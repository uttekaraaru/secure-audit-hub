"""
AI chatbot service.

- If ANTHROPIC_API_KEY is configured, questions are answered by real Claude AI,
  grounded with an ISO 27001 / 27002 / 42001 system prompt.
- If no key is configured (or the API call fails for any reason), it falls back
  to the same rule-based keyword matching the original frontend ChatBot.jsx used,
  so the feature always works out of the box.
"""

from app.config import settings

SYSTEM_PROMPT = (
    "You are Secure Audit AI, the assistant embedded in the Secure Audit Hub website. "
    "You help visitors understand ISO/IEC 27001 (Information Security Management Systems), "
    "ISO/IEC 27002 (security controls guidance) and ISO/IEC 42001 (AI Management Systems). "
    "Answer clearly and concisely (3-6 sentences unless the user asks for more detail). "
    "If asked something unrelated to information security, risk, compliance, or AI governance, "
    "politely steer the conversation back to those topics."
)

_client = None
if settings.anthropic_api_key:
    try:
        import anthropic

        _client = anthropic.Anthropic(api_key=settings.anthropic_api_key)
    except Exception:
        _client = None


def _rule_based_reply(question: str) -> str:
    q = question.lower()

    if "27001" in q:
        return "ISO 27001 is the international standard for Information Security Management Systems (ISMS)."
    if "27002" in q:
        return "ISO 27002 provides guidance for implementing information security controls."
    if "42001" in q:
        return "ISO 42001 is the international standard for Artificial Intelligence Management Systems."
    if "annex" in q:
        return "Annex A contains 93 security controls divided into Organizational, People, Physical and Technological categories."
    if "clause 6" in q:
        return "Clause 6 covers Planning, Risk Assessment, Risk Treatment and Security Objectives."
    if "risk" in q:
        return "Risk Assessment identifies, evaluates and treats information security risks."

    return "I'm still learning. Try asking about ISO 27001, ISO 27002, ISO 42001, Annex A, or risk assessment."


def get_ai_reply(question: str) -> tuple[str, str]:
    """Returns (reply_text, source) where source is 'ai' or 'rule-based'."""

    if _client is not None:
        try:
            response = _client.messages.create(
                model=settings.anthropic_model,
                max_tokens=500,
                system=SYSTEM_PROMPT,
                messages=[{"role": "user", "content": question}],
            )
            text_parts = [block.text for block in response.content if getattr(block, "type", "") == "text"]
            reply = "\n".join(text_parts).strip()
            if reply:
                return reply, "ai"
        except Exception:
            # Fall through to rule-based on any API error (bad key, network, rate limit, etc.)
            pass

    return _rule_based_reply(question), "rule-based"

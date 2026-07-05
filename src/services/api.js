const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.detail || `Request failed (${res.status})`);
  }

  return res.json();
}

// ---------- Dashboard ----------

export function getDashboard() {
  return request("/api/dashboard/full");
}

export function getIsoStandard(standard) {
  return request(`/api/dashboard/iso/${standard}`);
}

// ---------- Contact ----------

export function submitContact({ name, email, subject, message }) {
  return request("/api/contact", {
    method: "POST",
    body: JSON.stringify({ name, email, subject, message }),
  });
}

// ---------- Chat ----------

export function sendChatMessage(sessionId, message) {
  return request("/api/chat", {
    method: "POST",
    body: JSON.stringify({ session_id: sessionId, message }),
  });
}

export function getChatHistory(sessionId) {
  return request(`/api/chat/history/${sessionId}`);
}

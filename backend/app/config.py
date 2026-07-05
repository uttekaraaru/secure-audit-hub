from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    # App
    cors_origins: str = "http://localhost:5173"

    # Database
    database_url: str = "sqlite:///./secure_audit_hub.db"

    # AI Chatbot
    anthropic_api_key: str = ""
    anthropic_model: str = "claude-sonnet-4-6"

    # SMTP / Contact form
    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    contact_from_email: str = ""
    contact_to_email: str = "63aaradhyauttekar@gmail.com"

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


settings = Settings()

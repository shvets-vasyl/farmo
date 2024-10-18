interface TelegramWebApp {
  initDataUnsafe: {
    user: {
      user_id: string;
    };
  };
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
}
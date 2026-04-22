export async function POST(req: Request) {
  try {
    const { name, phone, car } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return Response.json({ error: 'Missing Telegram credentials' }, { status: 500 });
    }

    const text = `🐝 <b>Нова заявка з сайту!</b>\n\n👤 <b>Ім'я:</b> ${name}\n📞 <b>Телефон:</b> ${phone}\n🚗 <b>Авто:</b> ${car}`;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      console.error('Telegram API error:', await response.text());
      return Response.json({ error: 'Failed to send message' }, { status: 500 });
    }

    return Response.json({ ok: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

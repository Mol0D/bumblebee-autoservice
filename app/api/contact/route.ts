export async function POST(req: Request) {
  try {
    const { name, phone, car } = await req.json();

    const botSecret = process.env.BOT_SECRET_TOKEN;
    if (!botSecret) {
      return Response.json({ error: 'Missing bot credentials' }, { status: 500 });
    }

    const response = await fetch('https://bumblebee-autoservice-bot-production.up.railway.app/new-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-token': botSecret,
      },
      body: JSON.stringify({ name, phone, car }),
    });

    if (!response.ok) {
      console.error('Bot webhook error:', await response.text());
      return Response.json({ error: 'Failed to send request' }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

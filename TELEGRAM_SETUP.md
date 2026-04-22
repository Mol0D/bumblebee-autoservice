# Налаштування Telegram Bot для Bumblebee

## Кроки

### 1. Створити Bot через @BotFather

1. Открыть Telegram і знайти **@BotFather** (вже готовий бот від Telegram)
2. Напишіть `/newbot`
3. Дайте боту ім'я, наприклад: `Bumblebee Service Bot`
4. Дайте юзернейм (унікальне ім'я), наприклад: `bumblebee_service_bot`
5. **@BotFather надасть токен** — скопіюйте його

Токен виглядає так: `1234567890:ABCDefGHIJKlmNoPqrsTuvWxyz`

### 2. Отримати Chat ID (ID каналу/чату)

Варіант А — якщо ви хочете отримувати в приватний чат:
1. Напишіть боту будь-що (наприклад: `/start`)
2. Відкрийте URL: `https://api.telegram.org/bot{YOUR_TOKEN}/getUpdates`
   - замінить `{YOUR_TOKEN}` на ваш токен
3. У JSON відповіді знайдіть `"chat":{"id": ....}`
4. Число в `id` — це ваш Chat ID

Варіант Б — якщо хочете в групу/канал:
1. Додайте бота в групу/канал
2. Напишіть у групі будь-що та запустіть `/setprivacy` → `Disabled` (щоб бот бачив всі повідомлення)
3. Виконайте той же URL як вище
4. Chat ID для групи починається з `-` (від'ємний)

### 3. Додати в `.env.local`

```
TELEGRAM_BOT_TOKEN=1234567890:ABCDefGHIJKlmNoPqrsTuvWxyz
TELEGRAM_CHAT_ID=123456789
```

### 4. Додати в Vercel (перед deployом)

1. Перейдіть на **Vercel Dashboard** → Your Project
2. Settings → Environment Variables
3. Додайте:
   - `TELEGRAM_BOT_TOKEN` = ваш токен
   - `TELEGRAM_CHAT_ID` = ваш chat ID
4. Redeploy

### 5. Тестування

Локально:
```bash
npm run dev
```

Заповніть форму на сайті → форма має прийти в Telegram.

Якщо не приходить:
1. Перевіріть, чи бот додан у чат/канал
2. Перевіріть токен і Chat ID (можуть мати пробіли)
3. Подивіться консоль Next.js на помилки

---

**Важливо:** Коли замінюєте бота на нового або змінюєте Chat ID, оновіть Vercel Environment Variables і перезапустіть деплой.

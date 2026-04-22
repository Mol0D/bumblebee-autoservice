# Bumblebee Autoservice — Next.js Landing

Сучасний лендінг автосервісу на Next.js 14 з SSG, SEO оптимізацією та Telegram інтеграцією.

## 🚀 Швидкий старт

```bash
npm install
npm run dev
```

Сайт буде доступний на `http://localhost:3000`

## 📁 Структура проєкту

```
app/
├── page.tsx              ← головна сторінка
├── layout.tsx            ← root layout + SEO metadata
├── blog/
│   ├── page.tsx          ← сторінка "Всі статті"
│   └── [slug]/page.tsx   ← окрема стаття (SSG)
└── api/
    └── contact/route.ts  ← API для форми (→ Telegram)

components/              ← React компоненти
├── Nav.tsx
├── Hero.tsx
├── Services.tsx
├── About.tsx
├── Process.tsx
├── Gallery.tsx
├── Reviews.tsx
├── Blog.tsx
├── Contact.tsx
├── Footer.tsx
├── FloatCall.tsx
└── Icons.tsx

lib/
├── blog.ts              ← структура постів

public/
├── images/              ← фото
├── sitemap.xml
└── robots.txt

styles/
└── globals.css          ← основні стилі
```

## 🔧 Налаштування Telegram

Перед деплоєм треба налаштувати бота для отримання форм у Telegram:

**Дивись:** [`TELEGRAM_SETUP.md`](./TELEGRAM_SETUP.md)

Коротко:
1. Відкрий **@BotFather** → `/newbot` → отримай токен
2. Напиши боту щось → отримай chat ID з URL `getUpdates`
3. Додай у `.env.local`:
```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```

## 📝 Додавання нових статей у блог

Кожна стаття — це файл у `/lib/blog.ts`:

```typescript
'slug-name': {
  slug: 'slug-name',
  title: 'Заголовок статті',
  category: 'Категорія',
  date: '01 травня 2026',
  readTime: '5 хв',
  excerpt: 'Короткий опис для превʼю',
  htmlContent: `
    <h1>Заголовок</h1>
    <p>Текст статті...</p>
  `,
}
```

Після додавання слаг автоматично з'явиться на `/blog/{slug}` і включиться в `generateStaticParams`.

## 🌐 Deploy на Vercel

```bash
# 1. Логін у Vercel
npm i -g vercel
vercel login

# 2. Deploy
vercel --prod
```

В **Vercel Dashboard → Settings → Environment Variables** додай:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## 🎨 Стилізація

Проєкт використовує чистий CSS з кастомними змінними:

```css
:root {
  --bb-yellow: #F3CA18;
  --bb-bg: #13140F;
  --font-display: 'Bowlby One';
  --font-body: 'Manrope';
  --font-ui: 'Space Grotesk';
}
```

Всі шрифти завантажуються з Google Fonts (через `next/font`).

## 🔍 SEO

- **Metadata** в `app/layout.tsx` для базової сторінки
- **generateMetadata** для кожної статті в `/blog/[slug]/page.tsx`
- **Schema.org LocalBusiness** для Google Business Panel
- **Sitemap.xml** + **robots.txt** для пошукових машин

Ключові слова можна оновити після уточнення від SEO-спеціаліста.

## 📸 Оптимізація фото

Всі фото у `/public/images/` автоматично оптимізуються через `next/image`:
- WebP формат для новіших браузерів
- Lazy loading
- Responsive (різні розміри для мобіля)

## 🧪 Build & Test

```bash
npm run build       # Production build (генерує SSG статті)
npm run start       # Запуск production сервера
npm run lint        # Перевірка коду
```

## 📞 Контакти

- **Адреса:** Київ, Теремки-2, Голосіївський р-н
- **Телефон:** +380 XX XXX XX XX (оновить у Contact компоненті)
- **Email:** hi@bumblebee.auto (оновить у Footer)
- **Instagram:** @bumblebee_autoservice

---

Запущено на **Next.js 16.2.4** | **TypeScript** | **Vercel-ready**

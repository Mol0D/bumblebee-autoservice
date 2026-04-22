import { getAllPosts, getPost } from '@/lib/blog';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return null;

  return {
    title: `${post.title} — Bumblebee Autoservice`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-brand">
            <div className="logo-mark">
              <span style={{ fontSize: '20px' }}>🐝</span>
            </div>
            <div className="nav-brand-text">
              <span className="name">Bumblebee</span>
              <span className="sub">Autoservice · Київ</span>
            </div>
          </a>
          <div style={{ flex: 1 }} />
          <a href="/blog" className="btn btn-ghost">← Всі статті</a>
        </div>
      </nav>

      <article style={{ padding: '80px 0', background: 'var(--bb-bg)' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <header style={{ marginBottom: '56px' }}>
            <div className="post-meta" style={{ marginBottom: '24px' }}>
              <span className="chip">{post.category}</span>
              <span>{post.date}</span>
              <span>· {post.readTime}</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.2,
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: 'var(--bb-ink)',
            }}>
              {post.title}
            </h1>
          </header>

          <div style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'var(--bb-gray-2)',
          }} className="blog-content" dangerouslySetInnerHTML={{ __html: post.htmlContent }} />

          <hr style={{
            border: 'none',
            borderTop: '1px dashed var(--bb-border)',
            margin: '64px 0 40px',
          }} />

          <div style={{
            padding: '32px',
            background: 'var(--bb-surface)',
            borderRadius: 'var(--radius-card)',
            textAlign: 'center',
          }}>
            <p style={{ marginBottom: '20px' }}>Виникла питання до діагностиці?</p>
            <a href="/#contact" className="btn btn-primary">
              Записатись на прийом
            </a>
          </div>
        </div>
      </article>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-bottom" style={{ marginTop: 0 }}>
            <span>© 2026 Bumblebee Autoservice · Всі права захищені</span>
          </div>
        </div>
      </footer>

      <style>{`
        .blog-content h1 {
          font-family: var(--font-display);
          font-size: 2.5rem;
          text-transform: uppercase;
          margin: 32px 0 16px;
          color: var(--bb-ink);
        }
        .blog-content h2 {
          font-family: var(--font-display);
          font-size: 2rem;
          text-transform: uppercase;
          margin: 28px 0 12px;
          color: var(--bb-ink);
        }
        .blog-content h3 {
          font-family: var(--font-display);
          font-size: 1.5rem;
          text-transform: uppercase;
          margin: 20px 0 8px;
          color: var(--bb-yellow);
        }
        .blog-content p {
          margin: 16px 0;
        }
        .blog-content ul, .blog-content ol {
          margin: 16px 0;
          padding-left: 32px;
        }
        .blog-content li {
          margin: 8px 0;
        }
        .blog-content strong {
          color: var(--bb-yellow);
          font-weight: 700;
        }
      `}</style>
    </>
  );
}

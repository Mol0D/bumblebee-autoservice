import { getAllPosts } from '@/lib/blog';
import Icon from '@/components/Icons';

export const metadata = {
  title: 'Блог — Bumblebee Autoservice',
  description: 'Корисні статті про діагностику, ТО, ремонт підвіски та інші автосервісні поради.',
};

export default function BlogPage() {
  const posts = getAllPosts();

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
          <a href="/" className="btn btn-ghost">← На головну</a>
        </div>
      </nav>

      <section style={{ padding: '80px 0', background: 'var(--bb-bg)' }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: '56px' }}>
            <div className="title">
              <span className="eyebrow">Блог</span>
              <h2 style={{ fontSize: 'clamp(40px, 4.6vw, 66px)' }}>Корисне для<br />власників авто</h2>
            </div>
          </div>
          <div className="blog-grid">
            {posts.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="post" style={{ textDecoration: 'none' }}>
                <div className="post-cover">
                  <div className="icon"><Icon.Document /></div>
                </div>
                <div className="post-body">
                  <div className="post-meta">
                    <span className="chip">{p.category}</span>
                    <span>{p.date}</span>
                    <span>· {p.readTime}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="read">Читати <Icon.Arrow /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-bottom" style={{ marginTop: 0 }}>
            <span>© 2026 Bumblebee Autoservice · Всі права захищені</span>
          </div>
        </div>
      </footer>
    </>
  );
}

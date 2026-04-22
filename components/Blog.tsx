import Icon from './Icons';

const posts = [
  { cat: 'Діагностика', date: '15 квіт 2026', read: '5 хв', title: 'Чому «чек» горить, а машина їздить нормально?', excerpt: 'Розбираємось, коли це дрібниця, а коли — привід одразу їхати на СТО. Без страшилок.', slug: 'check-engine' },
  { cat: 'ТО', date: '02 квіт 2026', read: '4 хв', title: 'Як часто насправді треба міняти масло у двигуні', excerpt: 'Регламент виробника vs реальні умови експлуатації в Києві. Пояснюємо пальцями.', slug: 'oil-change' },
  { cat: 'Підвіска', date: '20 бер 2026', read: '6 хв', title: '«Стукіт» у підвісці: як зрозуміти, звідки він', excerpt: 'Топ-5 причин стуків на нерівностях і які з них треба лагодити негайно.', slug: 'suspension-noise' },
];

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="wrap">
        <div className="section-head">
          <div className="title">
            <span className="eyebrow">Блог</span>
            <h2>Корисне для<br />власників авто</h2>
          </div>
          <a href="/blog" className="btn btn-ghost">Всі статті <Icon.Arrow /></a>
        </div>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <a key={i} href={`/blog/${p.slug}`} className="post" style={{ textDecoration: 'none' }}>
              <div className="post-cover">
                <div className="icon"><Icon.Document /></div>
              </div>
              <div className="post-body">
                <div className="post-meta">
                  <span className="chip">{p.cat}</span>
                  <span>{p.date}</span>
                  <span>· {p.read}</span>
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
  );
}

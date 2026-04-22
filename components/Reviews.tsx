const reviews = [
  { stars: 5, text: 'Приїхав з «стукотом» у підвісці. За годину показали все на підйомнику, дали три варіанти цін — без тиску. Зробили за день. Дякую!', name: 'Андрій К.', car: 'Skoda Octavia 2014', av: 'А' },
  { stars: 5, text: 'Хлопці пояснили простою мовою, що з машиною. Не навʼязували зайвого — навпаки, сказали, що поки можна не міняти. Таке зараз рідкість.', name: 'Олена М.', car: 'Renault Megane 2018', av: 'О' },
  { stars: 5, text: 'Робив ТО і діагностику. Бентлі — не кожне СТО береться. Тут взялись спокійно, все акуратно, з повагою до авто.', name: 'Ігор П.', car: 'Bentley Continental', av: 'І' },
];

export default function Reviews() {
  return (
    <section className="section section-alt" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <div className="title">
            <span className="eyebrow">Що кажуть клієнти</span>
            <h2>Відгуки людей,<br />які повертаються</h2>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review">
              <div className="quote-mark">"</div>
              <div className="stars">{'★'.repeat(r.stars)}</div>
              <p>{r.text}</p>
              <div className="review-person">
                <div className="avatar">{r.av}</div>
                <div className="meta">
                  <div className="nm">{r.name}</div>
                  <div className="car">{r.car}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

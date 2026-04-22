const steps = [
  { n: '01', t: 'Запис', d: 'Заповнюєш форму або дзвониш. Ми уточнюємо симптоми і пропонуємо час.' },
  { n: '02', t: 'Діагностика', d: 'Авто на підйомник. Оглядаємо, підключаємо сканер, знаходимо причину.' },
  { n: '03', t: 'Розрахунок', d: 'Показуємо список робіт і запчастин. Рахуємо. Починаємо тільки після твого «так».' },
  { n: '04', t: 'Ремонт і видача', d: 'Робимо у домовлений строк. Здаємо авто чистим, з гарантією і поясненнями.' },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <div className="section-head">
          <div className="title">
            <span className="eyebrow">Як проходить візит</span>
            <h2>4 кроки —<br />і авто знову їздить</h2>
          </div>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div key={i} className="pstep">
              <span className="pstep-num">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

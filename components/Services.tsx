import Icon from './Icons';

const services = [
  { num: '01', title: 'Діагностика авто', desc: 'Візуальна та комп’ютерна — знаходимо причину, а не тільки симптом.', icon: <Icon.Diag />, feature: true },
  { num: '02', title: 'ТО та масло', desc: 'Заміна мастила, фільтрів, свічок — за регламентом виробника.', icon: <Icon.Oil /> },
  { num: '03', title: 'Заміна ГРМ', desc: 'Ремінь/ланцюг + ролики + помпа. Без сюрпризів через пів року.', icon: <Icon.Engine /> },
  { num: '04', title: 'Ходова частина', desc: 'Сайлентблоки, важелі, стійки, підшипники — повний ремонт підвіски.', icon: <Icon.Suspension />, dark: true },
  { num: '05', title: 'Амортизатори', desc: 'Передні, задні, стійки стабілізатора — авто знову «тримає» дорогу.', icon: <Icon.Suspension /> },
  { num: '06', title: 'Акумулятор', desc: 'Діагностика, підбір, встановлення, утилізація старого.', icon: <Icon.Battery /> },
  { num: '07', title: 'Система охолодження', desc: 'Радіатор, помпа, термостат, патрубки — щоб двигун не кипів.', icon: <Icon.Cooling /> },
  { num: '08', title: 'Гальмівна система', desc: 'Колодки, диски, рідина, шланги. Зупиняємось тоді, коли треба.', icon: <Icon.Brake /> },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="title">
            <span className="eyebrow">Що ми вміємо</span>
            <h2>Послуги,<br />на яких ми знаємось</h2>
          </div>
          <p className="body-lg title" style={{ maxWidth: 420 }}>
            Щоденний ремонт для авто, на яких ти щодня їздиш на роботу, возиш дитину в садок і їдеш у село на вихідних.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`svc${s.feature ? ' feature' : ''}${s.dark ? ' dark' : ''}`}>
              <div>
                <div className="svc-icon">{s.icon}</div>
                <div className="svc-num">{s.num} / {String(services.length).padStart(2, '0')}</div>
                <div className="svc-title">{s.title}</div>
                <div className="svc-desc">{s.desc}</div>
              </div>
              <div className="svc-foot">
                <span>Дізнатись більше</span>
                <span className="arrow-circle"><Icon.ArrowUR /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

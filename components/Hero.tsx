import Image from 'next/image';
import Icon from './Icons';

const HERO_COPY = {
  human: {
    tag: 'Приймаємо авто сьогодні',
    h1: <>СТО <span className="hl">з людським</span><br />підходом</>,
    lead: 'Чесно пояснюємо, що саме зламалось, скільки це коштує — і не починаємо роботу, поки ти не згоден. Без «а давай ще це поміняємо».',
    bubble1: 'Твоє авто у надійних лапах 🐝',
    bubble2: 'Без «а давай ще це поміняємо»',
    badge: <>ЧЕСНА<br />ДІАГНО-<br />СТИКА</>,
  },
};

export default function Hero() {
  const c = HERO_COPY.human;
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-left">
          <div className="hero-tag"><span className="dot" /> {c.tag}</div>
          <h1>{c.h1}</h1>
          <p className="hero-lead">{c.lead}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Записатись <span className="arrow"><Icon.Arrow /></span>
            </a>
            <a href="#services" className="btn btn-ghost">Подивитись послуги</a>
          </div>
          <div className="hero-meta">
            <div><div className="k">6+</div><div className="v">років на дорозі</div></div>
            <div><div className="k">800+</div><div className="v">задоволених авто</div></div>
            <div><div className="k">4.9</div><div className="v">★ у відгуках</div></div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-mascot-card">
            <Image
              src="/images/mascot-wrench.png"
              alt="Bumblebee механік"
              width={400}
              height={500}
              style={{ position: 'relative', zIndex: 2, width: '88%', height: 'auto' }}
            />
            <div className="speech-bubble sb-top-left">{c.bubble1}</div>
            <div className="speech-bubble sb-bottom-right">{c.bubble2}</div>
          </div>
          <div className="hero-badge-circle">
            <span className="inner">{c.badge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

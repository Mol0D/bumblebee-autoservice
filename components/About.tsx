import Image from 'next/image';

export default function About() {
  return (
    <section className="section section-alt about" id="about">
      <div className="wrap about-grid">
        <div className="about-visual">
          <Image
            src="/images/IMG_5082.jpg"
            alt="Майстерня Bumblebee"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay-badge">Теремки-2<br />від 2020 року</div>
        </div>
        <div className="about-text">
          <span className="eyebrow">Про Bumblebee</span>
          <h2>Ми — маленьке СТО,<br />яке знає кожного клієнта на ім&apos;я</h2>
          <p className="lead">
            Ми починали удвох з одним підйомником. Сьогодні нас команда, але філософія не змінилась:
            пояснити простими словами, полагодити тільки те, що треба, і не взяти грошей «про запас».
          </p>
          <div className="about-values">
            <div className="value-row">
              <span className="vnum">01</span>
              <div>
                <h4>Прозора діагностика</h4>
                <p>Показуємо все на підйомнику разом з тобою. Жодних «поламалось — ми все зробили» по телефону.</p>
              </div>
            </div>
            <div className="value-row">
              <span className="vnum">02</span>
              <div>
                <h4>Запчастини на вибір</h4>
                <p>Даємо 2–3 варіанти: економ, середня та оригінал. Пояснюємо різницю. Вибираєш ти.</p>
              </div>
            </div>
            <div className="value-row">
              <span className="vnum">03</span>
              <div>
                <h4>Гарантія на роботи</h4>
                <p>На роботу — до 12 місяців. Якщо щось пішло не так — повертайся, розберемось.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

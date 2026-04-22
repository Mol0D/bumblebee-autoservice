export default function Marquee() {
  const items = ['Діагностика', 'ТО', 'Ходова', 'Підвіска', 'ГРМ', 'Електрика', 'Масло', 'Амортизатори', 'Гальма', 'Охолодження'];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map(k => (
          <span key={k}>
            {items.map((t, i) => (
              <span key={i}>{t}<span className="dot" /></span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

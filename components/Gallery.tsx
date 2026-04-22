import Image from 'next/image';

const photos = [
  { src: '/images/IMG_2633 copy.jpg', alt: 'Майстерня Bumblebee', tag: 'Наша майстерня', grid: 'g1' },
  { src: '/images/unnamed.jpg', alt: 'Ремонт Peugeot', tag: 'Ходова Peugeot', grid: 'g2' },
  { src: '/images/IMG_6207.jpg', alt: 'Комп`ютерна діагностика', tag: 'Діагностика', grid: 'g3' },
  { src: '/images/photo_2025-11-06 15.00.53.jpeg', alt: 'Заміна масла MAHLE', tag: 'ТО та масло', grid: 'g4' },
  { src: '/images/IMG_6990.jpg', alt: 'Стіна інструментів', tag: 'Інструмент', grid: 'g5' },
  { src: '/images/IMG_4890 copy.jpg', alt: 'Bentley Continental GT', tag: 'Bentley GT', grid: 'g6' },
  { src: '/images/IMG_5249.jpg', alt: 'Mercedes у кольоровому вінілі', tag: 'Mercedes', grid: 'g7' },
  { src: '/images/IMG_5082.jpg', alt: 'MINI Cooper', tag: 'MINI Cooper', grid: 'g8' },
];

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <div className="title">
            <span className="eyebrow">Майстерня</span>
            <h2>Чисто, світло,<br />інструмент під рукою</h2>
          </div>
          <p className="body-lg" style={{ maxWidth: 420 }}>
            Два підйомники, повний набір спец-інструмента, сканер з підтримкою марок — від KIA до Bentley.
          </p>
        </div>
        <div className="gallery-grid">
          {photos.map((p, i) => (
            <div key={i} className={`gphoto ${p.grid}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              <span className="tag">{p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

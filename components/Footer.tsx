import Image from 'next/image';
import Icon from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="logo-mark">
                <Image src="/images/logo.png" alt="Bumblebee" width={48} height={48} />
              </div>
              <div className="t">Bumblebee<br />Autoservice</div>
            </div>
            <p className="footer-about">
              Маленьке чесне СТО на Теремках-2.
              Діагностика, ТО, ходова, ГРМ, електрика — для щоденних авто.
            </p>
          </div>
          <div>
            <h5>Послуги</h5>
            <a href="#services">Діагностика</a>
            <a href="#services">ТО та масло</a>
            <a href="#services">Заміна ГРМ</a>
            <a href="#services">Ходова</a>
            <a href="#services">Гальма</a>
          </div>
          <div>
            <h5>Компанія</h5>
            <a href="#about">Про нас</a>
            <a href="#process">Як це працює</a>
            <a href="/blog">Блог</a>
            <a href="#reviews">Відгуки</a>
          </div>
          <div>
            <h5>Контакти</h5>
            <a href="tel:+380000000000"><Icon.Phone /> +380 XX XXX XX XX</a>
            <a href="mailto:hi@bumblebee.auto"><Icon.Mail /> hi@bumblebee.auto</a>
            <a href="https://www.instagram.com/bumblebee_autoservice/" target="_blank" rel="noopener"><Icon.Insta /> Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Bumblebee Autoservice · Всі права захищені</span>
          <span>Київ · Голосіївський р-н · Теремки-2</span>
        </div>
      </div>
    </footer>
  );
}

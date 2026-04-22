'use client';

import Image from 'next/image';
import Icon from './Icons';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <div className="logo-mark">
            <Image src="/images/logo.png" alt="Bumblebee" width={36} height={36} />
          </div>
          <div className="nav-brand-text">
            <span className="name">Bumblebee</span>
            <span className="sub">Autoservice · Київ</span>
          </div>
        </a>
        <div className="nav-links">
          <a href="#services">Послуги</a>
          <a href="#about">Про нас</a>
          <a href="#process">Як це працює</a>
          <a href="#gallery">Майстерня</a>
          <a href="#blog">Блог</a>
          <a href="#contact">Контакти</a>
        </div>
        <a href="tel:+380000000000" className="btn btn-primary nav-phone">
          <Icon.Phone />
          <span className="phone-label">Записатись</span>
        </a>
      </div>
    </nav>
  );
}

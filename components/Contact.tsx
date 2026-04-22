'use client';

import { useState } from 'react';
import Icon from './Icons';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', car: '' });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="wrap">
        <div className="contact-wrap">
          <div className="contact-left">
            <h2>Запишись<br />на діагностику</h2>
            <p>Передзвонимо протягом 20 хвилин у робочий час, уточнимо деталі та запропонуємо найближчий вільний слот.</p>
            <div className="contact-points">
              <div className="cp">
                <div className="ic"><Icon.Pin /></div>
                <div>
                  <div className="lb">Адреса</div>
                  <div className="val">м. Київ, вул. Д. Луценка 16,<br />бокс 773</div>
                </div>
              </div>
              <div className="cp">
                <div className="ic"><Icon.Phone /></div>
                <div>
                  <div className="lb">Телефон</div>
                  <div className="val">+380637219130</div>
                </div>
              </div>
              <div className="cp">
                <div className="ic"><Icon.Clock /></div>
                <div>
                  <div className="lb">Графік</div>
                  <div className="val">Пн–Сб 9:00–19:00<br />Нд — за записом</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h3>Форма запису</h3>
            <p className="sub">Заповни три поля — і ми передзвонимо.</p>
            {!sent ? (
              <form onSubmit={submit}>
                <div className="field">
                  <label>Як вас звати</label>
                  <input
                    required
                    placeholder="Андрій"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label>Телефон</label>
                  <input
                    required
                    type="tel"
                    placeholder="+380 __ ___ __ __"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label>Марка / модель авто</label>
                  <input
                    required
                    placeholder="Skoda Octavia 2014"
                    value={form.car}
                    onChange={e => setForm({ ...form, car: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                  {loading ? 'Відправляємо...' : 'Записатись'} <span className="arrow"><Icon.Arrow /></span>
                </button>
                <p className="form-note">Натискаючи «Записатись», ви погоджуєтесь на обробку персональних даних для зв'язку. Ми не передаємо їх третім особам.</p>
              </form>
            ) : (
              <div className="form-success show">
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                  <Icon.Check /> <strong>Дякуємо, {form.name}!</strong>
                </div>
                <div>Ми зателефонуємо на <strong>{form.phone}</strong> протягом 20 хвилин у робочий час.</div>
              </div>
            )}
          </div>
        </div>

        <div className="map-wrap">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=30.43%2C50.38%2C30.46%2C50.39&layer=mapnik&marker=50.3855572%2C30.4455904"
            title="Bumblebee — Теремки-2, Київ"
            loading="lazy"
            style={{ width: '100%', height: '420px', border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const AboutComponent = () => {
  return (
    <div className="about-brief">
      <div className="about-brief-content">
        <h2 className="about-brief-title">Tentang Jadiin</h2>
                <p className="about-brief-description">
            Platform terdepan di Indonesia yang memberdayakan individu, UMKM, dan startup untuk memiliki 
            kehadiran digital profesional melalui solusi website yang inovatif, solutif, mudah, dan terjangkau.
        </p>
        <div className="about-brief-highlights">
            <div className="about-highlight">
                <span className="highlight-icon">🚀</span>
                <span>Platform Terdepan Indonesia</span>
            </div>
            <div className="about-highlight">
                <span className="highlight-icon">💡</span>
                <span>Solusi Inovatif & Terjangkau</span>
            </div>
            <div className="about-highlight">
                <span className="highlight-icon">🎯</span>
                <span>Memberdayakan UMKM & Startup</span>
            </div>
        </div>
        <a href="/about" className="about-brief-link">
          Pelajari Lebih Lanjut →
        </a>
      </div>
    </div>
  );
};

export default AboutComponent;

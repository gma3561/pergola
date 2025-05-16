import { useState, useEffect } from 'react'
import './App.css'
import pergola1 from './assets/images/Pergola1.webp'
import pergola2 from './assets/images/Pergola2.webp'
import pergola3 from './assets/images/Pergola3.webp'
import pergola4 from './assets/images/Pergola4.webp'
import pergola5 from './assets/images/Pergola5.jpg'

function App() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [pergola1, pergola2, pergola3, pergola4, pergola5];
  const imgTitles = [
    "페르골라 비치 클럽 전경",
    "페르골라 수영장 뷰",
    "페르골라 비치 파라솔",
    "페르골라 해변 전망",
    "페르골라 석양 뷰"
  ];

  // 자동 이미지 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="header-content">
          <h1>다낭 여행 가이드</h1>
          <nav className="main-nav">
            <ul>
              <li><a href="#pergola">페르골라</a></li>
              <li><a href="#attractions">관광명소</a></li>
              <li><a href="#restaurants">맛집</a></li>
              <li><a href="#tips">여행팁</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section" id="pergola">
          <h2>페르골라 - 다낭의 럭셔리 비치 클럽</h2>
          
          <div className="slider-container">
            <div className="image-slider">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`slide ${index === activeImage ? 'active' : ''}`}
                >
                  <img src={img} alt={`Pergola ${index + 1}`} />
                  <div className="image-caption">{imgTitles[index]}</div>
                </div>
              ))}
              
              <div className="slider-dots">
                {images.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === activeImage ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <h3>페르골라 비치 클럽 소개</h3>
            <p>
              다낭 미케비치에 위치한 페르골라(Pergola)는 베트남 최고의 럭셔리 비치 클럽입니다. 
              아름다운 해변가에서 최고급 시설과 서비스를 즐길 수 있으며, 탁 트인 바다 전망과 함께 
              고급스러운 음식과 음료를 즐기며 여유로운 시간을 보낼 수 있는 곳입니다.
            </p>
            <div className="info-details">
              <div className="info-item">
                <h4>위치</h4>
                <p>Đà Nẵng, Bãi biển Mỹ Khê, Việt Nam</p>
              </div>
              <div className="info-item">
                <h4>영업시간</h4>
                <p>매일 09:00 - 22:00</p>
              </div>
              <div className="info-item">
                <h4>추천 포인트</h4>
                <p>선셋 뷰, 수영장, 칵테일, 해변 파티</p>
              </div>
            </div>
            <div className="cta-button">
              <a href="https://maps.app.goo.gl/M1ZfpzQb7C34BMRL7" target="_blank" rel="noopener noreferrer">
                구글 지도에서 보기
              </a>
            </div>
          </div>
        </section>
        
        <section className="attractions-section" id="attractions">
          <h2>다낭 추천 관광명소</h2>
          <div className="section-content">
            <div className="attraction-card">
              <h3>바나힐</h3>
              <p>프랑스 스타일의 테마파크로, 케이블카와 골든브릿지로 유명한 곳입니다.</p>
            </div>
            <div className="attraction-card">
              <h3>다낭 대성당</h3>
              <p>핑크색 외관이 특징인 다낭의 랜드마크 성당입니다.</p>
            </div>
            <div className="attraction-card">
              <h3>마블 마운틴</h3>
              <p>대리석 산으로 불리며 다양한 동굴과 사원이 있는 명소입니다.</p>
            </div>
          </div>
        </section>
        
        <section className="tips-section" id="tips">
          <h2>다낭 여행 꿀팁</h2>
          <div className="tips-content">
            <div className="tip-card">
              <h3>베스트 시즌</h3>
              <p>2월부터 5월까지가 다낭 여행의 황금기입니다. 비가 적고 덥지 않은 날씨를 즐길 수 있어요!</p>
            </div>
            <div className="tip-card">
              <h3>교통수단</h3>
              <p>그랩(Grab) 앱을 이용하면 편리하게 이동할 수 있습니다. 미리 다운로드 해보세요.</p>
            </div>
            <div className="tip-card">
              <h3>쇼핑</h3>
              <p>한시장과 빈컴플라자는 꼭 방문해야 할 쇼핑 명소입니다.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 다낭 여행 가이드. All rights reserved.</p>
          <p>문의사항은 채널톡으로 연락주세요!</p>
        </div>
      </footer>
    </div>
  )
}

export default App

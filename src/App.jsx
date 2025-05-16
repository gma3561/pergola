import { useState, useEffect } from 'react'
import './App.css'
import pergola1 from './assets/images/Pergola1.webp'
import pergola2 from './assets/images/Pergola2.webp'
import pergola3 from './assets/images/Pergola3.webp'
import pergola4 from './assets/images/Pergola4.webp'
import pergola5 from './assets/images/Pergola5.jpg'

function App() {
  const [activeImage, setActiveImage] = useState(0);
  const [language, setLanguage] = useState('ko'); // 'ko' for Korean, 'en' for English
  const images = [pergola1, pergola2, pergola3, pergola4, pergola5];

  // 언어별 텍스트 데이터
  const translations = {
    ko: {
      title: "페르골라 호텔 가이드",
      nav: {
        hotel: "호텔 정보",
        facilities: "편의시설",
        nearby: "주변 관광",
        restaurants: "맛집",
        cafes: "카페",
        tips: "여행 팁"
      },
      heroTitle: "페르골라 호텔",
      hotelInfo: {
        intro: "다낭의 아름다운 해변가에 위치한 페르골라(Pergola) 호텔은 한국인 여행객을 위한 최고의 숙소입니다. 럭셔리한 객실과 최상의 서비스를 제공하며, 다낭의 주요 관광지와 가까운 거리에 있습니다.",
        location: "위치",
        locationDetail: "Đà Nẵng, Bãi biển Mỹ Khê, Việt Nam",
        hours: "리셉션 운영시간",
        hoursDetail: "24시간",
        amenities: "주요 시설",
        amenitiesDetail: "수영장, 레스토랑, 스파, 헬스장, 비즈니스 센터"
      },
      mapButton: "구글 지도에서 보기",
      attractions: {
        title: "주변 관광지",
        banaHill: {
          name: "바나힐",
          description: "프랑스 스타일의 테마파크로, 케이블카와 골든브릿지로 유명한 곳입니다. 호텔에서 차로 약 40분 거리에 있습니다."
        },
        cathedral: {
          name: "다낭 대성당",
          description: "핑크색 외관이 특징인 다낭의 랜드마크 성당입니다. 호텔에서 차로 약 15분 거리에 있습니다."
        },
        marbleMountain: {
          name: "마블 마운틴",
          description: "대리석 산으로 불리며 다양한 동굴과 사원이 있는 명소입니다. 호텔에서 차로 약 20분 거리에 있습니다."
        }
      },
      restaurants: {
        title: "추천 맛집",
        local1: {
          name: "Banh Canh Cua",
          description: "베트남 게와 새우를 넣은 쌀국수. 현지식을 즐기고 싶은 분들에게 추천합니다.",
          address: "B13, 2/9 street, Da Nang"
        },
        local2: {
          name: "Hai San Thanh Map",
          description: "해변 전망이 좋은 현지 해산물 레스토랑. 신선한 해산물 요리를 즐길 수 있습니다.",
          address: "37 Hoang Sa street, Tho Quang Ward, Son Tra district"
        },
        local3: {
          name: "Hai San Phuoc My",
          description: "정원 분위기의 해산물 레스토랑. 아늑한 분위기에서 맛있는 해산물을 맛볼 수 있습니다.",
          address: "18 Ho Nghinh street"
        },
        local4: {
          name: "Bếp Cuốn Đà Nẵng",
          description: "베트남 전통 요리를 맛볼 수 있는 현지 레스토랑.",
          address: "31-33 Trần Bạch Đằng, Phước Mỹ, Sơn Trà"
        },
        local5: {
          name: "Cơm Nhà Vui",
          description: "베트남 가정식을 맛볼 수 있는 현지 식당.",
          address: "133 Hà Bổng, Sơn Trà"
        }
      },
      cafes: {
        title: "인스타그래머블 카페",
        cafe1: {
          name: "Wind Garden",
          description: "정원과 코이 물고기가 있는 아름다운 카페. 사진 찍기 좋은 장소입니다.",
          address: "72 Lê Mạnh Trinh street"
        },
        cafe2: {
          name: "Cá Chuồn Space",
          description: "해변 전망이 좋은 카페. 멋진 바다 뷰를 즐기며 커피를 마실 수 있습니다.",
          address: "Da Nang 해변가"
        },
        cafe3: {
          name: "Nối - The cabin",
          description: "해변이 보이는 모던한 카페. 아늑한 분위기와 멋진 전망이 특징입니다.",
          address: "118 Chu Huy Mân, Nại Hiên Đông, Sơn Trà"
        },
        cafe4: {
          name: "Lighthouse",
          description: "직접 로스팅한 커피와 다이닝을 함께 즐길 수 있는 카페.",
          address: "12 Dương Đình Nghệ, Phường An Hải Bắc, Quận Sơn Trà"
        },
        cafe5: {
          name: "Bloom Patisserie",
          description: "훌륭한 디저트와 페이스트리를 맛볼 수 있는 카페.",
          address: "189 Tran Hung Dao street, An Hai Bac ward, Son Tra district"
        },
        cafe6: {
          name: "B&B Bakery",
          description: "맛있는 베이커리 제품을 판매하는 카페.",
          address: "192 Nguyen Van Thoai street"
        }
      },
      tips: {
        title: "여행 팁",
        bestSeason: {
          name: "베스트 시즌",
          description: "2월부터 5월까지가 다낭 여행의 황금기입니다. 비가 적고 덥지 않은 날씨를 즐길 수 있어요!"
        },
        transportation: {
          name: "교통수단",
          description: "그랩(Grab) 앱을 이용하면 편리하게 이동할 수 있습니다. 미리 다운로드 해보세요."
        },
        shopping: {
          name: "쇼핑",
          description: "한시장과 빈컴플라자는 꼭 방문해야 할 쇼핑 명소입니다."
        }
      },
      footer: {
        copyright: "© 2024 페르골라 호텔 가이드. All rights reserved.",
        contact: "문의사항은 채널톡으로 연락주세요!"
      }
    },
    en: {
      title: "Pergola Hotel Guide",
      nav: {
        hotel: "Hotel Info",
        facilities: "Facilities",
        nearby: "Nearby",
        restaurants: "Restaurants",
        cafes: "Cafes",
        tips: "Travel Tips"
      },
      heroTitle: "Pergola Hotel",
      hotelInfo: {
        intro: "Located on the beautiful beachfront of Da Nang, Pergola Hotel is the perfect accommodation for Korean travelers. Offering luxurious rooms and excellent service, the hotel is conveniently close to Da Nang's major tourist attractions.",
        location: "Location",
        locationDetail: "Đà Nẵng, Mỹ Khê Beach, Vietnam",
        hours: "Reception Hours",
        hoursDetail: "24 hours",
        amenities: "Amenities",
        amenitiesDetail: "Swimming pool, Restaurant, Spa, Gym, Business center"
      },
      mapButton: "View on Google Maps",
      attractions: {
        title: "Nearby Attractions",
        banaHill: {
          name: "Bana Hills",
          description: "A French-style theme park famous for its cable car and Golden Bridge. About 40 minutes by car from the hotel."
        },
        cathedral: {
          name: "Da Nang Cathedral",
          description: "A landmark cathedral with a distinctive pink exterior. About 15 minutes by car from the hotel."
        },
        marbleMountain: {
          name: "Marble Mountains",
          description: "Known as the marble mountains with various caves and temples. About 20 minutes by car from the hotel."
        }
      },
      restaurants: {
        title: "Recommended Restaurants",
        local1: {
          name: "Banh Canh Cua",
          description: "Vietnamese crab and shrimp tapioca noodle soup. Recommended for those who want to enjoy local cuisine.",
          address: "B13, 2/9 street, Da Nang"
        },
        local2: {
          name: "Hai San Thanh Map",
          description: "Local seafood restaurant with a beach view. Enjoy fresh seafood dishes.",
          address: "37 Hoang Sa street, Tho Quang Ward, Son Tra district"
        },
        local3: {
          name: "Hai San Phuoc My",
          description: "Garden atmosphere seafood restaurant. Taste delicious seafood in a cozy environment.",
          address: "18 Ho Nghinh street"
        },
        local4: {
          name: "Bếp Cuốn Đà Nẵng",
          description: "Local restaurant with traditional Vietnamese cuisine.",
          address: "31-33 Trần Bạch Đằng, Phước Mỹ, Sơn Trà"
        },
        local5: {
          name: "Cơm Nhà Vui",
          description: "Local restaurant serving Vietnamese home-style meals.",
          address: "133 Hà Bổng, Sơn Trà"
        }
      },
      cafes: {
        title: "Instagrammable Cafes",
        cafe1: {
          name: "Wind Garden",
          description: "Beautiful cafe with a garden and koi fish. Great spot for taking photos.",
          address: "72 Lê Mạnh Trinh street"
        },
        cafe2: {
          name: "Cá Chuồn Space",
          description: "Cafe with a beach view. Enjoy coffee with a spectacular sea view.",
          address: "Da Nang beachfront"
        },
        cafe3: {
          name: "Nối - The cabin",
          description: "Modern cafe with a beach view. Features a cozy atmosphere and great scenery.",
          address: "118 Chu Huy Mân, Nại Hiên Đông, Sơn Trà"
        },
        cafe4: {
          name: "Lighthouse",
          description: "Coffee roaster and dining cafe where you can enjoy freshly roasted coffee.",
          address: "12 Dương Đình Nghệ, Phường An Hải Bắc, Quận Sơn Trà"
        },
        cafe5: {
          name: "Bloom Patisserie",
          description: "Cafe with excellent desserts and pastries.",
          address: "189 Tran Hung Dao street, An Hai Bac ward, Son Tra district"
        },
        cafe6: {
          name: "B&B Bakery",
          description: "Cafe selling delicious bakery products.",
          address: "192 Nguyen Van Thoai street"
        }
      },
      tips: {
        title: "Travel Tips",
        bestSeason: {
          name: "Best Season",
          description: "February to May is the golden period for visiting Da Nang. Enjoy the weather with little rain and not too hot!"
        },
        transportation: {
          name: "Transportation",
          description: "The Grab app allows you to move around conveniently. Download it in advance."
        },
        shopping: {
          name: "Shopping",
          description: "Han Market and Vincom Plaza are must-visit shopping destinations."
        }
      },
      footer: {
        copyright: "© 2024 Pergola Hotel Guide. All rights reserved.",
        contact: "For inquiries, please contact us via Channel Talk!"
      }
    }
  };

  // 현재 언어 데이터
  const t = translations[language];

  // 언어 전환 함수
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

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
          <h1>{t.title}</h1>
          <nav className="main-nav">
            <ul>
              <li><a href="#hotel">{t.nav.hotel}</a></li>
              <li><a href="#facilities">{t.nav.facilities}</a></li>
              <li><a href="#nearby">{t.nav.nearby}</a></li>
              <li><a href="#restaurants">{t.nav.restaurants}</a></li>
              <li><a href="#cafes">{t.nav.cafes}</a></li>
              <li><a href="#tips">{t.nav.tips}</a></li>
              <li className="language-toggle">
                <button onClick={toggleLanguage}>
                  {language === 'ko' ? 'English' : '한국어'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section" id="hotel">
          <h2>{t.heroTitle}</h2>
          
          <div className="slider-container">
            <div className="image-slider">
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className={`slide ${index === activeImage ? 'active' : ''}`}
                >
                  <img src={img} alt={`Pergola Hotel ${index + 1}`} />
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
          
          <div className="info-card" id="facilities">
            <h3>{t.heroTitle}</h3>
            <p>{t.hotelInfo.intro}</p>
            
            <div className="info-details">
              <div className="info-item">
                <h4>{t.hotelInfo.location}</h4>
                <p>{t.hotelInfo.locationDetail}</p>
              </div>
              <div className="info-item">
                <h4>{t.hotelInfo.hours}</h4>
                <p>{t.hotelInfo.hoursDetail}</p>
              </div>
              <div className="info-item">
                <h4>{t.hotelInfo.amenities}</h4>
                <p>{t.hotelInfo.amenitiesDetail}</p>
              </div>
            </div>
            <div className="cta-button">
              <a href="https://maps.app.goo.gl/M1ZfpzQb7C34BMRL7" target="_blank" rel="noopener noreferrer">
                {t.mapButton}
              </a>
            </div>
          </div>
        </section>
        
        <section className="attractions-section" id="nearby">
          <h2>{t.attractions.title}</h2>
          <div className="section-content">
            <div className="attraction-card">
              <h3>{t.attractions.banaHill.name}</h3>
              <p>{t.attractions.banaHill.description}</p>
            </div>
            <div className="attraction-card">
              <h3>{t.attractions.cathedral.name}</h3>
              <p>{t.attractions.cathedral.description}</p>
            </div>
            <div className="attraction-card">
              <h3>{t.attractions.marbleMountain.name}</h3>
              <p>{t.attractions.marbleMountain.description}</p>
            </div>
          </div>
        </section>
        
        <section className="restaurants-section" id="restaurants">
          <h2>{t.restaurants.title}</h2>
          <div className="section-content">
            <div className="restaurant-card">
              <h3>{t.restaurants.local1.name}</h3>
              <p>{t.restaurants.local1.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.restaurants.local1.address}</p>
            </div>
            <div className="restaurant-card">
              <h3>{t.restaurants.local2.name}</h3>
              <p>{t.restaurants.local2.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.restaurants.local2.address}</p>
            </div>
            <div className="restaurant-card">
              <h3>{t.restaurants.local3.name}</h3>
              <p>{t.restaurants.local3.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.restaurants.local3.address}</p>
            </div>
            <div className="restaurant-card">
              <h3>{t.restaurants.local4.name}</h3>
              <p>{t.restaurants.local4.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.restaurants.local4.address}</p>
            </div>
            <div className="restaurant-card">
              <h3>{t.restaurants.local5.name}</h3>
              <p>{t.restaurants.local5.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.restaurants.local5.address}</p>
            </div>
          </div>
        </section>

        <section className="cafes-section" id="cafes">
          <h2>{t.cafes.title}</h2>
          <div className="section-content">
            <div className="cafe-card">
              <h3>{t.cafes.cafe1.name}</h3>
              <p>{t.cafes.cafe1.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.cafes.cafe1.address}</p>
            </div>
            <div className="cafe-card">
              <h3>{t.cafes.cafe2.name}</h3>
              <p>{t.cafes.cafe2.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.cafes.cafe2.address}</p>
            </div>
            <div className="cafe-card">
              <h3>{t.cafes.cafe3.name}</h3>
              <p>{t.cafes.cafe3.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.cafes.cafe3.address}</p>
            </div>
            <div className="cafe-card">
              <h3>{t.cafes.cafe4.name}</h3>
              <p>{t.cafes.cafe4.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.cafes.cafe4.address}</p>
            </div>
            <div className="cafe-card">
              <h3>{t.cafes.cafe5.name}</h3>
              <p>{t.cafes.cafe5.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.cafes.cafe5.address}</p>
            </div>
            <div className="cafe-card">
              <h3>{t.cafes.cafe6.name}</h3>
              <p>{t.cafes.cafe6.description}</p>
              <p className="address"><strong>{language === 'ko' ? '주소' : 'Address'}:</strong> {t.cafes.cafe6.address}</p>
            </div>
          </div>
        </section>

        <section className="tips-section" id="tips">
          <h2>{t.tips.title}</h2>
          <div className="tips-content">
            <div className="tip-card">
              <h3>{t.tips.bestSeason.name}</h3>
              <p>{t.tips.bestSeason.description}</p>
            </div>
            <div className="tip-card">
              <h3>{t.tips.transportation.name}</h3>
              <p>{t.tips.transportation.description}</p>
            </div>
            <div className="tip-card">
              <h3>{t.tips.shopping.name}</h3>
              <p>{t.tips.shopping.description}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.contact}</p>
        </div>
      </footer>
    </div>
  )
}

export default App

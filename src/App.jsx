import { useState } from 'react'
import './App.css'
import pergola1 from './assets/images/Pergola1.webp'
import pergola2 from './assets/images/Pergola2.webp'
import pergola3 from './assets/images/Pergola3.webp'
import pergola4 from './assets/images/Pergola4.webp'
import pergola5 from './assets/images/Pergola5.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>다낭 여행 가이드</h1>
        <h2>Pergola - 다낭의 아름다운 명소</h2>
        <div className="pergola-gallery">
          <img src={pergola1} className="pergola-img" alt="Pergola 1" />
          <img src={pergola2} className="pergola-img" alt="Pergola 2" />
          <img src={pergola3} className="pergola-img" alt="Pergola 3" />
          <img src={pergola4} className="pergola-img" alt="Pergola 4" />
          <img src={pergola5} className="pergola-img" alt="Pergola 5" />
        </div>
        <div className="info-section">
          <h3>Pergola 소개</h3>
          <p>다낭의 아름다운 해변가에 위치한 Pergola는 아름다운 전망과 함께 휴식을 취할 수 있는 명소입니다.</p>
        </div>
      </div>
    </>
  )
}

export default App

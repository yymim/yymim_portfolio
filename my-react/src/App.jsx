import React from 'react'
import CampusSelector from './CampusSelector'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="top-header">
        <ul>
          <li>
            <CampusSelector />
          </li>
          <li>
            <div className="title">장소</div>
            <div className="td"></div>
          </li>
          <li>
            <div className="title">신청기간</div>
            <div className="td"></div>
          </li>
          <li>
            <div className="title">처리현황</div>
            <div className="td"></div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App;

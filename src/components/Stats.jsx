import React from 'react'
import StatsCards from './StatsCards'
import iconBrand from "../images/icon-brand-recognition.svg"
import iconDetailed from "../images/icon-detailed-records.svg"
import iconFully from "../images/icon-fully-customizable.svg"
import "../styles/stats.css"
import { useRef } from 'react'

export default function Stats({originalLink, shortLink, styleLink, backgraoundButtonClick, textCopy, changeText}) {

  const buttonCopyRef = useRef()
  
  const buttonCopyHandle = (e) => {
      changeText()
  }

    
  return (
    <div className="stats">
      <div className="stats__response" style={styleLink}>
        <p className="stats__original-link">{originalLink}</p>
        <div className="stats__borde"></div>
        <p className="stats__short-link">{shortLink}</p>
        <button className="stats__copy-button" ref={buttonCopyRef} onClick={buttonCopyHandle} style={backgraoundButtonClick}>{textCopy}</button>
      </div>
      <div className="stats__text"> 
        <h2 className="stats__title">Advanced Statistics</h2>
        <p className="stats__paragraph">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="stats__cards">
        <StatsCards position="up" image={iconBrand} title="Brand Recognition" paragraph="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />
        <div className="cyan"></div>
        <StatsCards position="center" image={iconDetailed} title="Detailed Records" paragraph="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
        <div className="cyan"></div>
        <StatsCards position="down" image={iconFully} title="Fully customizable" paragraph="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
      </div>
    </div>
  )
}

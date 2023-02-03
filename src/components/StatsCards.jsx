import React from "react"
import "../styles/statsCards.css"
export default function StatsCards({image, title, paragraph, position}) {

  let pos = position
  let classCard = "statscards "

  return (
    <div className={classCard + pos}>
        <div className="statcards__backgroundimage">
            <img src={image} alt="" className="statscards__img" />
        </div>
        <div className="statscards__backgroundtext">
            <h3 className="statscards__title">{title}</h3>
            <p className="statscards__paragraph">{paragraph}</p>
        </div>
    </div>
  )
}

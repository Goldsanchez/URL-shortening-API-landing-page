import React from 'react'
import IllustrationWorking from './IlustrationWorking'
import "../styles/cover.css"

export default function Cover() {
  return (
    <section className="cover">
      <div className="cover__width">
        <IllustrationWorking className="cover__img" />
        <div className="cover__text">
          <h2 className="text__title">More than just shorter links</h2>
          <p className="text__paragraph">Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className="text__button">Get Started!</button>
        </div>
      </div>
    </section>
  )
}

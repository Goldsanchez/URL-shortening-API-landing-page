import React from 'react'
import "../styles/footer.css"
import { useState } from 'react'
import IconFb from './iconSocials/IconFb'
import IconTw from './iconSocials/IconTw'
import IconIg from './iconSocials/IconIg'
import IconPi from './iconSocials/IconPi'


export default function Footer() {

  const [iconColorFb, setIconColorFb] = useState("white")
  const [iconColorTw, setIconColorTw] = useState("white")
  const [iconColorIg, setIconColorIg] = useState("white")
  const [iconColorPi, setIconColorPi] = useState("white")

  const iconOnMouseMove = (e) => {
    if(e.target.className.animVal === "footer__socialLinks footer__fb") setIconColorFb("var(--Cyan)")
    if(e.target.className.animVal === "footer__socialLinks footer__tw") setIconColorTw("var(--Cyan)")
    if(e.target.className.animVal === "footer__socialLinks footer__ig") setIconColorIg("var(--Cyan)")
    if(e.target.className.animVal === "footer__socialLinks footer__pi") setIconColorPi("var(--Cyan)")
    console.log(e.target.className);
  }

  const iconOnMouseOut = (e) => {
    if(e.target.className.animVal === "footer__socialLinks footer__fb") setIconColorFb("white")
    if(e.target.className.animVal === "footer__socialLinks footer__tw") setIconColorTw("white")
    if(e.target.className.animVal === "footer__socialLinks footer__ig") setIconColorIg("white")
    if(e.target.className.animVal === "footer__socialLinks footer__pi") setIconColorPi("white")
  }


  return (
    <div className="footer">
      <div className="footer__width">
        <div className="footer__div footer__shortly">
          <h3 className="footer__title">Shortly</h3>
        </div>
        <div className="footer__div">
          <p className='footer__subtitle'>Features</p>
          <p className='footer__list'>Link Shortening</p>
          <p className='footer__list'>Branded Links</p>
          <p className='footer__list'>analytics</p>
        </div>
        <div className="footer__div">
          <p className='footer__subtitle'>Resources</p>
          <p className='footer__list'>Blog</p>
          <p className='footer__list'>Developers</p>
          <p className='footer__list'>Support</p>
        </div>
        <div className="footer__div">
          <p className='footer__subtitle'>Company</p>
          <p className='footer__list'>About</p>
          <p className='footer__list'>Our Team</p>
          <p className='footer__list'>Careers</p>
          <p className='footer__list'>Contact</p>
        </div>
        <div className="footer__div footer__socials">
          <IconFb iconColor={iconColorFb} onMouseMoveCapture={iconOnMouseMove} onMouseOutCapture={iconOnMouseOut}/>
          <IconTw iconColor={iconColorTw} onMouseMoveCapture={iconOnMouseMove} onMouseOutCapture={iconOnMouseOut}/>
          <IconIg iconColor={iconColorIg} onMouseMoveCapture={iconOnMouseMove} onMouseOutCapture={iconOnMouseOut}/>
          <IconPi iconColor={iconColorPi} onMouseMoveCapture={iconOnMouseMove} onMouseOutCapture={iconOnMouseOut}/>
        </div>
      </div>
    </div>
  )
}

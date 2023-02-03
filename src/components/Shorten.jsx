import React, {useRef} from 'react'
import { useState } from 'react'

import "../styles/shorten.css"

export default function Shorten({shortenIt,changeValue}) {

const inputRef = useRef()
const shorten__paragraphRef = useRef()
const [styleShortenParagraph, setStyleShortenParagraph] = useState({})

  
  const buttonClick = () => {
      if(isValidUrl(inputRef.current.value)){
        shortenIt(inputRef.current.value, {display: "flex"}, {backgroundColor: "var(--Cyan)"}, "Copy")
      }
  }

  const onClickInput = () => {
    if(inputRef.current.value === ""){
      setStyleShortenParagraph({display:"flex"})
    }

  }

  const onBlurInput = () => {
    setStyleShortenParagraph({display:"none"})
  }

  const onChangeInput = () =>{
    setStyleShortenParagraph({display:"none"})
    if(inputRef.current.value === ""){
      setStyleShortenParagraph({display:"flex"})
    }
    changeValue()

  }


  const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }

  return (
    <div className="shorten">
      <input type="text" className='shorten__input' placeholder="Shorten a link here..." onFocus={onClickInput} onBlur={onBlurInput} onChange={onChangeInput} ref={inputRef}/>
      <p className='shorten__paragraph' ref={shorten__paragraphRef} style={styleShortenParagraph}>Please add a link</p>
      <button className='shorten__button' onClick={buttonClick}>Shorten It</button>
    </div>
  )
}
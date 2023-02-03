
import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Shorten from './components/Shorten';
import Stats from './components/Stats';
import Boost from './components/Boost';
import Footer from './components/Footer';
import { useState, useEffect} from 'react';

function App() {

  const [originalLink, setOriginalLink] = useState()
  const [shortLink, setShortLink] = useState()
  const [url, seturl] = useState("")
  const [styleLink, setStyleLink] = useState({})
  const [backgraoundButtonClick, setBackgraoundButtonClick] = useState({})
  const [textCopy, setTextCopy] = useState("")
  const [value, setValue] = useState(true)


  const shortenIt = (url, styleLink, backgraoundButtonClick, textCopy) => {
    seturl(url)
    setStyleLink(styleLink)
    if(value === true ) setBackgraoundButtonClick(backgraoundButtonClick)
    if(value === true ) setTextCopy(textCopy)
  }

  const changeText = () =>{
    setTextCopy("Copied!")
    setBackgraoundButtonClick({backgroundColor:"var(--Dark-Violet)"})
    setValue(false)
    console.log(value);
  }

  const changeValue = () => {
    setValue(true)
  }

  useEffect(() => {
    fetch("https://api.shrtco.de/v2/shorten?url=" + url)
      .then((response) => response.json())
      .then((data) => {
          setOriginalLink(data.result.original_link)
          setShortLink(data.result.full_short_link)
      })

  },[url])


  
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Cover/>
        <Shorten shortenIt={shortenIt} changeValue={changeValue}/>
        <Stats originalLink={originalLink} shortLink={shortLink} styleLink={styleLink} backgraoundButtonClick={backgraoundButtonClick} textCopy={textCopy} changeText={changeText}/>
        <Boost/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

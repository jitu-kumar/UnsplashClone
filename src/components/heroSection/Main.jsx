import React,{useState} from 'react'
import ImageSection from '../imageSection/ImageSection'
import './Main.css';


const Main = () => {
  const [searcData, setSearchData] = useState("")
  const handSearch = (e) =>{
    if (e.code === "Enter") {
console.log(e.target.value)
    setSearchData(e.target.value)
    }
  }
  return (
    <>
       <section className="hero_section">
      <div className="text_container">
        <h3><span class="lg_text">Unsplash</span></h3>
        <p className="sm_text">The internet’s source for visuals. <br />
Powered by creators everywhere.</p>
      <div className='sect'>
              <input onKeyDown={handSearch} className="search-input" type="text" name="search"  placeholder="Search-high-resolution-images"/>
              {/* {searchIcon} */}
          </div>
          <p className="sm_text">Trending:flower, wallpapers, backgrounds, happy, love</p>
      </div>
      <div className="bottom-div">
        <p className='sm_text'>Photo by
eberhard 🖐 grossgasteiger</p>
        <p className='sm_text'> <span className='read'>Read more about the </span> Unsplash License</p>
        <p className='sm_text'>Create your website today.</p>
      </div>
    </section>
      <ImageSection paramsdata={searcData} />
    </>
  )
}

export default Main




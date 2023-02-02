
import React from 'react'
import FadeMenu from '../drawer/FadeMenu'

import Main from '../heroSection/Main'
import "./Navbar.css"


const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
const Navbar = () => {
    return (
        <>
            <div className="nav">

                <div className="logo">
                    <svg width="32" height="32" className="UP8CN" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><desc lang="en-US">Unsplash logo</desc><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
                </div>
                <div className="searchbox">
                    <button className='svgicon'>{searchIcon}</button>
                    <input type="text" name="search" placeholder="Search-high-resolution-images" />
                </div>

                <a className="navlinks" href="/#explore">Explores</a>
                <a className="navlinks" href="/#advertise">Advertise</a>
                <a className="navlinks" style={{ "color": "#00e0ff" }} href="/#unsplash">Unsplash+</a>
                <a className="navlinks" href="/#">|</a>
                <a className="navlinks" href="/#login">Log in</a>
                <a className="navlinks" href="/#">/</a>
                <a className="navlinks" href="/#signz">Sign Up</a>
                <button className='btn-photo navlinks'>Submit a photo</button>
                <FadeMenu />
            </div>
            <div className="nav-2">
                <a className="navlinks" href="/#explore">Wallpapers</a>
                <a className="navlinks" href="/#">|</a>
                <a className="navlinks" href="/#advertise">3D Renders</a>
                <a className="navlinks" href="/#unsplash">Travel</a>
                <a className="navlinks" href="/#unsplash">Nature</a>
                <a className="navlinks" href="/#unsplash">Street Photography</a>
                <a className="navlinks" href="/#unsplash">Experimental</a>
                <a className="navlinks" href="/#unsplash">Textures & Patterns</a>
                <a className="navlinks" href="/#unsplash">Animals</a>
                <a className="navlinks" href="/#unsplash">Architecture & Interiors</a>
                <a className="navlinks" href="/#unsplash">Fashion & Beauty</a>
                <a className="navlinks" href="/#unsplash">Film</a>
                <a className="navlinks" href="/#unsplash">Food</a>
            </div>
            <Main />
        </>
    )
}

export default Navbar
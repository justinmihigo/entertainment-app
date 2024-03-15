import React from 'react';
import bookmarkIcon from '../../assets/icon-nav-bookmark.svg';
import homeIcon from '../../assets/icon-nav-home.svg';
import tvIcon from '../../assets/icon-nav-tv-series.svg';
import avatar from '../../assets/image-avatar.png';
import movieIcon from '../../assets/icon-nav-movies.svg';
import moviesLogo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar: React.FC = () => {
    return (
        <div className='contain'>
            <div className='section-first'>
                <img src={moviesLogo} alt="logo" />
            <div className='cont'>
               <Link to="/"><img src={homeIcon} alt="Home" className='icon' /></Link>
               <Link to="/bookmarks"><img src={bookmarkIcon} alt="Bookmark" className='icon' /></Link>
                <Link to="/movies"><img src={movieIcon} alt="Movie" className='icon'/></Link>
                <Link to="/tv-series"><img src={tvIcon} alt="TV" className='icon'/></Link>
            </div>
            </div>
            <div id='avatar'><img src={avatar} alt="TV" /></div>
        </div>

    );
}
export default Navbar;
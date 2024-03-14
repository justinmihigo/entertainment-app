import React from 'react';
import bookmarkIcon from '../../assets/icon-nav-bookmark.svg';
import homeIcon from '../../assets/icon-nav-home.svg';
import tvIcon from '../../assets/icon-nav-tv-series.svg';
import avatar from '../../assets/image-avatar.png';
import movieIcon from '../../assets/icon-nav-movies.svg';
import moviesLogo from '../../assets/logo.svg';
import "./navbar.css";

const Navbar: React.FC = () => {
    return (
        <div className='contain'>
            <div className='section-first'>
                <img src={moviesLogo} alt="logo" />
            <div className='cont'>
                <img src={homeIcon} alt="Home" />
                <img src={bookmarkIcon} alt="Bookmark" />
                <img src={movieIcon} alt="Movie" />
                <img src={tvIcon} alt="TV" />
            </div>
            </div>
            <div id='avatar'><img src={avatar} alt="TV" /></div>
        </div>

    );
}
export default Navbar;
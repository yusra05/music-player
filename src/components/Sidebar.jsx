import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeadphones, faHeart, faHistory, faList, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className="bg-gradient-to-t from-customWhite via-customGray  to-customWhite  fixed top-0 left-0 w-[16%] h-full">
      <div className="flex ml-4">
        <img src="/src/assets/logo.png" alt="Logo" className="w-24 h-16 mt-4 mr-4 lg:block hidden"/>
        <h2 className="mt-8  text-customBlue-1 text-xl font-bold">UI KIT</h2>
      </div>
      <h3 className="mt-4 ml-8 font-semibold text-gray-400 text-sm lg:block hidden">BROWSE MUSIC</h3>

      <ul className="mt-4 ml-8 space-y-2">

      <li className="flex items-center space-x-2 group hover:text-customBlue-1">
      <div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faCompass}
            className="text-gray-400 group-hover:text-customBlue-1"
          />
          <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Discover</span>
        </div>
      </li>

      <li className="flex items-center space-x-2 group hover:text-customBlue-1">
      <div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faMusic}
            className="text-gray-400 group-hover:text-customBlue-1"
          />
          <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Genre</span>
        </div>
      </li>

      <li className="flex items-center space-x-2 group hover:text-customBlue-1">
      <div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faChartLine}
            className="text-gray-400 group-hover:text-customBlue-1"
          />
          <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Top Charts</span>
        </div>
      </li>

      <li className="flex items-center space-x-2 group hover:text-customBlue-1">
      <div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faUserFriends}
            className="text-gray-400 group-hover:text-customBlue-1"
          />
          <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Collabs</span>
        </div>
      </li>

      <li className="flex items-center space-x-2 group hover:text-customBlue-1">
      <div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faHeadphones}
            className="text-gray-400 group-hover:text-customBlue-1"
          />
          <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Free Music</span>
        </div>
      </li>

      <li className="flex items-center space-x-2 group hover:text-customBlue-1">
      <div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faBroadcastTower}
            className="text-gray-400 group-hover:text-customBlue-1"
          />
          <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Stations</span>
        </div>
      </li>
      
      </ul>

      <h3 className="mt-4 ml-8 font-semibold text-gray-400 text-sm lg:block hidden">YOUR MUSIC</h3>

<ul className="mt-4 ml-8 space-y-2">

<li className="flex items-center space-x-2 group hover:text-customBlue-1">
<div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  <div className="flex items-center space-x-2">
    <FontAwesomeIcon
      icon={faHeart}
      className="text-gray-400 group-hover:text-customBlue-1"
    />
    <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Favourites</span>
  </div>
</li>

<li className="flex items-center space-x-2 group hover:text-customBlue-1">
<div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  <div className="flex items-center space-x-2">
    <FontAwesomeIcon
      icon={faHistory}
      className="text-gray-400 group-hover:text-customBlue-1"
    />
    <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">History</span>
  </div>
</li>

</ul>

<h3 className="mt-4 ml-8 font-semibold text-gray-400 text-sm lg:block hidden">YOUR PLAYLISTS</h3>

<ul className="mt-4 ml-8 space-y-2">

<li className="flex items-center space-x-2 group hover:text-customBlue-1">
<div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  <div className="flex items-center space-x-2">
    <FontAwesomeIcon
      icon={faPlayCircle}
      className="text-gray-400 group-hover:text-customBlue-1"
    />
    <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Public Playlist</span>
  </div>
</li>

<li className="flex items-center space-x-2 group hover:text-customBlue-1">
<div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  <div className="flex items-center space-x-2">
    <FontAwesomeIcon
      icon={faMusic}
      className="text-gray-400 group-hover:text-customBlue-1"
    />
    <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">Purchased</span>
  </div>
</li>

<li className="flex items-center space-x-2 group hover:text-customBlue-1">
<div className="absolute left-0 w-1 h-8 bg-customBlue-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  <div className="flex items-center space-x-2">
    <FontAwesomeIcon
      icon={faList}
      className="text-gray-400 group-hover:text-customBlue-1"
    />
    <span className="text-gray-400 hover:text-customBlue-1 font-semibold text-md lg:block hidden">My First Playlists</span>
  </div>
</li>

</ul>

    </div>
  );
};

export default Sidebar;

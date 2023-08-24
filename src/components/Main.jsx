import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faSearch, faBookmark, faMicrophone, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import PlayButton from './PlayButton';
import HeartButton from './HeartButton';
import SongGrid from './SongGrid';
import Player from './Player';


const Main = () => {
  
  return (
    <div className="bg-gradient-to-b from-customBlue  to-White text-white p-10 flex-1 ml-[16%]">
      <div className="absolute lg:ml-[16%]  inset-0 z-0 bg-contain bg-no-repeat lg:block hidden bg-right" style={{ backgroundImage: "url('/src/assets/girl.png')" }}></div>

      <div className="flex justify-between mb-8">
        <div className="flex items-center">
          
          <div className="relative flex items-center mr-2">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-white text-xl absolute left-3"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-white opacity-40 text-white pl-10 py-2 pr-8 rounded-md w-80 focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faMicrophone}
              className="text-white text-xl absolute right-3"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faBell} className="text-white text-2xl" />
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl  font-semibold mt-8 mb-6">What's hot this <br /> weekend?</h1>
          <p className="text-md font-medium text-gray-400 mb-6">
            Growing up in the small, wintry town of Berkak, Norway with less than 
            <br /> 1000 pople, Astrid S was drawn to music at a veryearly age...
          </p>
          <div className="flex items-center space-x-6  mb-6">
          <button className="relative bg-customBlue-1 shadow-xl text-white font-semibold py-2 w-32 rounded-full">
      Listen
      <FontAwesomeIcon
        icon={faPlayCircle}
        className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 p-2"
      />
    </button>
    <div className="w-12 h-12 bg-customBlue-1 rounded-full flex items-center justify-center shadow-xl">
        <FontAwesomeIcon icon={faBookmark} className="text-white w-6 h-6" />
      </div>
          </div>

          <div>
      <h1 className="text-2xl text-black font-semibold mt-20 mb-2">Noteworthy Albums</h1>
      <p className="text-sm font-medium text-gray-400 mb-6">
        Get better recommendations 
        <span class="text-blue-500 underline ml-2">defining your taste</span>
      </p>
    
       </div>


       <div class="grid md:grid-cols-6 sm:grid-cols-6 grid-cols-2  gap-x-1">
         <a 
           aria-current="page"
           className="bg-footer z-10 p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl group active"
           href="/">
           <div className="pt-[100%] relative mb-4">
             <img
               src="/src/assets/1.png"
               className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"/>
                 <HeartButton/>
                 <PlayButton/>
            </div>
              <h6 className="overflow-hidden overflow-ellipsis text-black whitespace-nowrap  text-base font-semibold">
                 Remixes
               </h6>
               <p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">Flume</p>
         </a>


          <a 
           aria-current="page"
           className="bg-footer z-10 p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl group active"
           href="/">
             <div className="pt-[100%] relative mb-4">
               <img
                src="/src/assets/2.png"
                className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"/>
              <HeartButton/>
              <PlayButton/>
               </div>
               <h6 className="overflow-hidden overflow-ellipsis text-black whitespace-nowrap  text-base font-semibold">
                Ace
               </h6>
               <p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">Else</p>
          </a>


          <a 
            aria-current="page"
            className="bg-footer z-10 p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl group active"
            href="/">
            <div className="pt-[100%] relative mb-4">
              <img
                src="/src/assets/6.jpg"
                className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"
              />
              <HeartButton/>
              <PlayButton/>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis text-black whitespace-nowrap  text-base font-semibold">
              How'd You Like It
            </h6>
            <p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">Rosie Lowe</p>
          </a>


           <a 
            aria-current="page"
            className="bg-footer z-10 p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl group active"
            href="/">
            <div className="pt-[100%] relative mb-4">
              <img
                src="/src/assets/3.png"
                className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"
              />
             <HeartButton/>
              <PlayButton/>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis text-black whitespace-nowrap  text-base font-semibold">
              Take a Chance
            </h6>
            <p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">Else</p>
           </a>


            <a 
              aria-current="page"
              className="bg-footer z-10 p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl group active"
              href="/">
              <div className="pt-[100%] relative mb-4">
                <img
                  src="/src/assets/4.png"
                  className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"
                />
                <HeartButton/>
                <PlayButton/>
              </div>
              <h6 className="overflow-hidden overflow-ellipsis text-black whitespace-nowrap  text-base font-semibold">
                Skin: The Remixes
              </h6>
              <p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">Flume</p>
            </a>

             <a 
               aria-current="page"
               className="bg-footer z-10 p-4 rounded hover:bg-active hover:bg-white hover:shadow-xl group active"
                            href="/">
               <div className="pt-[100%] relative mb-4">
                 <img
                   src="/src/assets/5.png"
                   className="absolute inset-0 object-cover w-full h-full rounded shadow-xl"
                 />
                 <HeartButton/>
                 <PlayButton/>
               </div>
               <h6 className="overflow-hidden overflow-ellipsis text-black whitespace-nowrap  text-base font-semibold">
                 1978
               </h6>
               <p className="line-clamp-2 text-link text-gray-400 text-sm mt-1">Else , Lorde</p>
             </a>

            </div>
            
            <div>
              
              <SongGrid />
              <Player />
            </div>
          </div>

        </div>

        
           
      </div>

    );
  };

export default Main;

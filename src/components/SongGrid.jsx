import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay, faPause, faPlus, faChartSimple, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const SongGrid = () => {
  const songsCol1 = [
    // Replace with your song data for Column 1
    { name: 'Worry About Us', artist: 'Rosie Lowe', icon: faPlay, image: 'src/assets/1.png'},
    { name: 'Take a Chance (feat. Little Dragon)', artist: 'Else', icon: faPause, image: 'src/assets/2.png'},
    { name: 'Control', artist: 'Else', icon: faChartSimple, image: 'src/assets/3.png'},
    // Add more songs as needed
  ];


  const songsCol2 = [
    // Replace with your song data for Column 2
    { name: 'Lorde Tama', artist: 'Else', icon: faChartSimple, image: 'src/assets/4.png'},
    { name: 'Take a Chance (feat. Little Dragon)', artist: 'Else', icon: faPlay, image: 'src/assets/5.png'},
    { name: 'Control', artist: 'Rosie Lowe', icon: faPlay, image: 'src/assets/6.jpg'},
    // Add more songs as needed
  ];

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10">
      <div className="flex flex-col justify-between p-4 rounded ">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-black font-bold">Latest Album Releases</h2>
          <span className="text-customBlue-1">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
        {songsCol1.map((song, index) => (
  <div key={index} className="p-4 rounded hover:bg-customBlue mb-2 flex items-center justify-between">
    <div className="flex items-center">
      <FontAwesomeIcon icon={song.icon} className="mr-4 text-customBlue-1" />
      <FontAwesomeIcon icon={faPlus} className="mr-4 text-black" />
      <img src={song.image} alt="song image" className="mr-4 w-6 h-6" />
      <div>
        <span className="text-black text-sm font-bold mb-1">{song.name}</span>
        <p className="text-gray-400 text-xs">{song.artist}</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="mr-2">
        <p className="text-gray-400 text-xs">06:21</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faEllipsis} className="text-gray-400 text-xs" />
      </div>
    </div>
  </div>
))}

</div>


      <div className="flex flex-col justify-between p-4 rounded ">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-black font-bold">Latest Singles Releases</h2>
          <span className="text-customBlue-1">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>

        {songsCol2.map((song, index) => (
  <div key={index} className="p-4 rounded hover:bg-customBlue mb-2 flex items-center justify-between">
    <div className="flex items-center">
      <FontAwesomeIcon icon={song.icon} className="mr-4 text-customBlue-1" />
      <FontAwesomeIcon icon={faPlus} className="mr-4 text-black" />
      <img src={song.image} alt="song image" className="mr-4 w-6 h-6" />
      <div>
        <span className="text-black text-sm font-bold mb-1">{song.name}</span>
        <p className="text-gray-400 text-xs">{song.artist}</p>
      </div>
    </div>
    <div className="flex items-center">
      <div className="mr-2">
        <p className="text-gray-400 text-xs">06:21</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faEllipsis} className="text-gray-400 text-xs" />
      </div>
    </div>
  </div>
  
))}
       
      </div>
      
    </div>
  );
};

export default SongGrid;

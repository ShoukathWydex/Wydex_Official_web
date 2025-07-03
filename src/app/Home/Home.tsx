
import React from 'react'
import HomeVideo from './HomeComponents/HomeVideo'
import Discription from './HomeComponents/Discription'
import VideoAnimation from './HomeComponents/VideoAnimation'
import OurStory from './HomeComponents/OurStory' 

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HomeVideo />
      <div className="relative z-10 bg-white">
        <Discription/>
        <VideoAnimation/>
        <OurStory/>

      </div>
    </div>
  );

}

export default Home; 



import React from 'react'
// Import the video file from assets
import myVid from '../assets/rimowa.mp4';

function VideoComponent() {
  return (
    <>
      <div>
        {/* HTML5 video element
            - className 'vvs' for styling in CSS
            - src points to imported video
            - autoPlay starts video automatically
            - muted ensures audio is off by default
        */}
        <video className='vvs' src={myVid} autoPlay muted></video>
      </div>
    </>
  )
}

export default VideoComponent

import React from 'react'
import BgVideo from '../images/BgVideo.mp4'
export default function Discover() {
    return (
        <div className='container-fluid text-center  ' id='Discover'>
             <h1 className='discover '> LET DISCOVER PAKISTAN</h1>
            <video  autoPlay loop muted id='background-video' className='text-center' >
                <source src={BgVideo} type='video/mp4' id='video' />
            </video>
           
           
        </div>
    )
}

import React from 'react'
import Hunza from '../images/hunza.jpeg'
import Neelam from '../images/neelam.jpg'
import Skardu from '../images/skardu.webp'
import Swat from '../images/swat.jpg'
export default function OnGoingTour() {
  return (
    <div className='contianer-fluid text-black bg-light py-3'>
      <h1 className='text-center p-4'>ON GOING TOURS!</h1>
      <div className="row justify-content-center text-center m-5 ">
        <div className='col-md-3 bg-light text-center' >
                <img src={Skardu} alt="" style={{width:'20rem', height:'13rem'}} className='img-fluid'/>
                <div className='fs-3'>Skardu Valley</div>
                <div>from RS.22,000 PKR</div>
        </div>
        <div className='col-md-3 bg-light text-center' >
                <img src={Hunza} alt="" style={{width:'20rem', height:'13rem'}}/>
                <div className='fs-3'>Hunza Valley</div>
                <div>from RS.22,000 PKR</div>
        </div>
        <div className='col-md-3 bg-light text-center' >
                <img src={Neelam} alt="" style={{width:'20rem', height:'13rem'}}/>
                <div className='fs-3'>Neelam Valley</div>
                <div>from RS.22,000 PKR</div>
        </div>
        <div className='col-md-3 bg-light text-center' >
                <img src={Swat} alt="" style={{width:'20rem', height:'13rem'}}/>
                <div className='fs-3'>Swat Valley</div>
                <div>from RS.22,000 PKR</div>
        </div> 
        <button className='btn btn-primary col-auto px-4 my-4 '>View All</button>
      </div>
     
    </div>
  )
}

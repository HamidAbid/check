import React from 'react'
import Hunza from '../images/hunza.jpeg'
import { FaArrowRightLong } from "react-icons/fa6";
export default function MostLiked() {
  return (
    <div className='container-fluid bg-light text-black py-5'>
      <h1 className='p-4 text-center'>MOST LIKED TOUR</h1>
      <div className="row justify-content-evenly">
        <div className="col-md-6 text-center">
            <img src={Hunza} alt="" className='img-fluid'/>
        </div>
        <div className="col-md-5 fs-4 pt-5 ">
            <div className='fs-1' >HUNZA VALLEY</div>
            <div>Six Days Adventure to Hunza Valley Departure From Friday</div>
            <h3 className='pt-3 text-primary fs-5'>Book Now <FaArrowRightLong /></h3>
            </div>   
          </div>
    </div>
  )
}

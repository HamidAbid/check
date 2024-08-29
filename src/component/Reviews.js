import React from 'react'
import Hunza from '../images/hunza.jpeg'
export default function Reviews() {
  return (
    <div className='container-fluid py-3'>
      <h1 className='text-center p-5'>What Our Client Say About Us</h1>
      <div className="row gap-5 p-4 justify-content-center">
        <div className="col-md-5 text-center    img-container">
          <div className="row">
          <span className='  col-auto'>
          <img src={Hunza} alt="" className='img-fluid review-img rounded-circle' style={{height:'8rem',width:'8rem'}} />
          </span>
          <span className=' col-8 text-start'><h3>M.Usman</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem repudiandae ipsum asperiores possimus.</h5></span>
          </div>     
        </div>
        <div className="col-md-5 text-center    img-container">
          <div className="row">
          <span className='  col-auto'>
          <img src={Hunza} alt="" className='img-fluid review-img rounded-circle' style={{height:'8rem',width:'8rem'}} />
          </span>
          <span className=' col-8 text-start'><h3>M.Usman</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem repudiandae ipsum asperiores possimus.</h5></span>
          </div>     
        </div>
        <div className="col-md-5 text-center    img-container">
          <div className="row">
          <span className='  col-auto'>
          <img src={Hunza} alt="" className='img-fluid review-img rounded-circle' style={{height:'8rem',width:'8rem'}} />
          </span>
          <span className=' col-8 text-start'><h3>M.Usman</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem repudiandae ipsum asperiores possimus.</h5></span>
          </div>     
        </div>
        <div className="col-md-5 text-center    img-container">
          <div className="row">
          <span className='  col-auto'>
          <img src={Hunza} alt="" className='img-fluid review-img rounded-circle' style={{height:'8rem',width:'8rem'}} />
          </span>
          <span className=' col-8 text-start'><h3>M.Usman</h3>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem repudiandae ipsum asperiores possimus.</h5></span>
          </div>     
        </div>
      </div>
    </div>
  )
}

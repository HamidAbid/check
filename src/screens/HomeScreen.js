import React from 'react'
import Navbar from '../component/Navbar'
import OnGoingTour from '../component/OnGoingTour'
import Discover from '../component/Discover'
import MostLiked from '../component/MostLiked'
import Reviews from '../component/Reviews'

export default function HomeScreen() {
  return (
    <>
    <Navbar/>
    <Discover/>
    <OnGoingTour/>
    <MostLiked/>
    <Reviews/>
    </>
  )
}

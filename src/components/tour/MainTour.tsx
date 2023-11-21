import React from 'react'
import Sort from '../filter/Sort'
import TourCard from './TourCard'

const MainTour = () => {
  return (
    <div>
          <div className="bg-white rounded-2xl shadow-lg px-5 py-4 hidden sm:flex items-center justify-between mb-4">
            <div>
              Showing <span className="font-[600]">10</span> of{" "}
              <span className="font-[600]">20</span> results
            </div>
            <Sort />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 10 }).map((item, i) => (
              <TourCard key={i} />
            ))}
          </div>
        </div>
  )
}

export default MainTour
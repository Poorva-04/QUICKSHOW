import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

      <div className='relative mt-6'>
        <BlurCircle top='-100px' right='-100px' />
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={false}
          className="mx-auto max-w-full"
          width="960px"
          height="540px"
        />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-4xl mx-auto'>
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className={`relative rounded-lg overflow-hidden transition duration-300 cursor-pointer hover:-translate-y-1 ${
              currentTrailer.image === trailer.image
                ? 'ring-2 ring-primary'
                : 'hover:opacity-80'
            }`}
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt=""
              className='w-full h-full object-cover brightness-75'
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2 text-white'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection

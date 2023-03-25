import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="pt-8 bg-plum">
    <div className="container lg:md-4 xl:md-4 2xl:md-4 md:px-4 mx-auto">
      <div className="px-7 pt-4">
        <div className="flex flex-wrap">
          <div className="mb-24 w-full md:w-1/2 pt-6">
            <h3 className=" text-xl md:text-4xl xl:text-4xl 2xl:text-4xl lg:text-4xl mt-12 font-bold text-custom-green">
              <span className="text">Our highly effective mental illness detection: mental healthcare without waiting time</span>
            </h3>
            <p className="mt-10 text-xl">Stress, exhaustion, worries but can't figure what's wrong? 
            Here comes the psychological help you need: Our survey can help you figure out your
            mental health and understand it better. </p>
            <Link to="/Survey"><button className='mt-10  text-lg hover:bg-hover-green bg-custom-green p-4 text-white text-bold rounded-lg'>Take a survey now</button></Link>
          </div>
          <div className="xl:w-1/2 2xl:w-1/2 lg:w-1/2 md:w-1/2  md:visible lg:visible invisible flex items-center">
            <img src="Girl.svg" alt="Girl Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner
import React from 'react'

const Roadmap = () => {
  return (
    <div>

<div class="container bg-gray-200 mx-auto w-full h-full">
  <div class="relative wrap overflow-hidden p-5 md:p-10 lg:p-10 xl:p-10 2xl:p-10 h-full">
    <div class="border-2-2 absolute border-custom-green h-full border left-1/2"></div>
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-custom-green shadow-xl w-8 h-8 lg:w-14 lg:h-14 md:w-14 md:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <div class="order-1 bg-white w-5/12 md:px-3 md:py-6 lg:px-3 lg:py-6 xl:px-3 xl:py-6 2xl:px-3 2xl:py-6">
      <img className=' w-1/3 h-1/3 invisible md:visible lg:visible xl:visible 2xl:visible' alt='register image' src = "/register.svg"></img>
        <h3 class="mb-2 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 font-bold text-sm lg:text-xl xl:text-xl 2xl:text-xl md:text-xl">Register With Us</h3>
      </div>
    </div>

    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-custom-green shadow-xl w-8 h-8 lg:w-14 lg:h-14 md:w-14 md:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <div class="order-1 w-5/12 md:px-3 md:py-6 lg:px-3 lg:py-6 xl:px-3 xl:py-6 2xl:px-3 2xl:py-6">
      <img className=' w-1/3 h-1/3 invisible md:visible lg:visible xl:visible 2xl:visible' alt='survey image' src = "/bookAppointment.svg"></img>
        <h3 class="mb-2 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 font-bold text-sm lg:text-xl xl:text-xl 2xl:text-xl md:text-xl">Take A Survey</h3>
      </div>
    </div>
    
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-custom-green shadow-xl w-8 h-8 lg:w-14 lg:h-14 md:w-14 md:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div class="order-1 bg-white w-5/12 md:px-3 md:py-6 lg:px-3 lg:py-6 xl:px-3 xl:py-6 2xl:px-3 2xl:py-6">
        <img className=' w-1/3 h-1/3 invisible md:visible lg:visible xl:visible 2xl:visible' alt='recommendation image' src = "/recommendation.svg"></img>
        <h3 class="mb-2 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 font-bold text-sm lg:text-xl xl:text-xl 2xl:text-xl md:text-xl">Get recommendation</h3>
      </div>
    </div>

    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-custom-green shadow-xl w-8 h-8 lg:w-14 lg:h-14 md:w-14 md:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
      </div>
      <div class="order-1 bg-white w-5/12 md:px-3 md:py-6 lg:px-3 lg:py-6 xl:px-3 xl:py-6 2xl:px-3 2xl:py-6">
      <img className=' w-1/3 h-1/3 invisible md:visible lg:visible xl:visible 2xl:visible' alt='appointment image' src = "/bookAppointment.svg"></img>
        <h3 class="mb-2 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4 font-bold text-sm lg:text-xl xl:text-xl 2xl:text-xl md:text-xl">Book Appointment</h3>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Roadmap;

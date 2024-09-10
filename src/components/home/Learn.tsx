import React from 'react'

function Learn() {
    return (
      
            <main className="flex flex-col xl:flex-col items:center  bg-primary 2xl:px-40 md:px-10 sm:px-5 py-10   h-50 ">


                <div className="flex flex-col xl:flex-row items-center  bg-primary pb-5   h-50 ">

                    <div className="w-full pb-0 sm:pb-5">
                        <h1 className="tracking-tight font-bold text-white  2xl:text-5xl xl:text-5xl  sm:text-2xl leading-relaxed text-center ">Learn How <br />Nexify Works!</h1>

                    </div>

                    <div className="w-full">
                        <p className="text-white mt-2 2xl:text-3xl leading-relaxed  sm:text-sm text-justify font-regular">Watch our quick video to see how Nexify makes car service easy, efficient, and stress-free for everyone!</p>
                    </div>
                </div>

                <div className='h-[602px] bg-white rounded-lg'> 
                <video className="h-full w-full rounded-lg" controls>
      <source
        src="/Nexify Video(1).mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>


</div>
              
            </main>
    )
}

export default Learn
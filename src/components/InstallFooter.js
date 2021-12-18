import React from 'react'

const InstallFooter = ({ installProcess }) => {
  return (
    <div className=''>
      <div className='flex justify-center flex-col text-purple-900 text-center'>
        <h1 className='font-semibold text-lg mb-4'>Install the app to use offline</h1>
          {/* <p className='text-sm'>Click the button below to install</p> */}
          {/* <div>
            <img src="" alt="" />
          </div> */}
          <button className='font-medium text-xs py-4 px-4 bg-white text-purple-700 border border-purple-700 rounded-md hover:bg-purple-700 hover:text-white transition-all delay-75' onClick={() => installProcess()}>Install App</button>
      </div>
    </div>
  )
}

export default InstallFooter

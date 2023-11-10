import React from 'react'

const Buttons = () => {
  return (
    <>
      <div className='mb-16'>
        <h4>Buttons</h4>
        <hr />
        <div className="flex flex-wrap justify-between">
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <button>Default</button>
            <button className='ml-2 bg-gray-700 text-slate-100 shadow-md shadow-slate-400'>Hover</button>
            <button className='ml-2 bg-gray-800 text-slate-100 shadow-inner shadow-slate-900'>Focus</button>
            <button className='ml-2 bg-gray-700 text-slate-100 outline outline-2 outline-offset-2 outline-gray-500'>Active</button>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <button className='btn-primary'>Primary</button>
            <button className='btn-primary ml-2 bg-sky-700 border-sky-700 text-sky-100 shadow-md shadow-sky-300'>Hover</button>
            <button className='btn-primary ml-2 bg-sky-800 border-sky-800 text-sky-100 shadow-inner shadow-sky-900'>Focus</button>
            <button className='btn-primary ml-2 bg-sky-700 border-sky-700 text-sky-100 outline outline-2 outline-offset-2 outline-sky-500'>Active</button>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <button className='btn-secondary'>Secondary</button>
            <button className='btn-secondary ml-2 bg-slate-700 border-slate-700 text-slate-100 shadow-md shadow-slate-300'>Hover</button>
            <button className='btn-secondary ml-2 bg-slate-800 border-slate-800 text-slate-100 shadow-inner shadow-slate-900'>Focus</button>
            <button className='btn-secondary ml-2 bg-slate-700 border-slate-700 text-slate-100 outline outline-2 outline-offset-2 outline-slate-500'>Active</button>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <button className='btn-danger'>Danger</button>
            <button className='btn-danger ml-2 bg-rose-700 border-rose-700 text-rose-100 shadow-md shadow-rose-300'>Hover</button>
            <button className='btn-danger ml-2 bg-rose-800 border-rose-800 text-rose-100 shadow-inner shadow-rose-900'>Focus</button>
            <button className='btn-danger ml-2 bg-rose-700 border-rose-700 text-rose-100 outline outline-2 outline-offset-2 outline-rose-500'>Active</button>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <button className='btn-warning'>Warning</button>
            <button className='btn-warning ml-2 bg-yellow-700 border-yellow-700 text-yellow-100 shadow-md shadow-yellow-200'>Hover</button>
            <button className='btn-warning ml-2 bg-yellow-800 border-yellow-800 text-yellow-100 shadow-inner shadow-yellow-900'>Focus</button>
            <button className='btn-warning ml-2 bg-yellow-700 border-yellow-700 text-yellow-100 outline outline-2 outline-offset-2 outline-yellow-500'>Active</button>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <button className='btn-info'>Info</button>
            <button className='btn-info ml-2 bg-blue-700 border-blue-700 text-blue-100 shadow-md shadow-blue-200'>Hover</button>
            <button className='btn-info ml-2 bg-blue-800 border-blue-800 text-blue-100 shadow-inner shadow-blue-900'>Focus</button>
            <button className='btn-info ml-2 bg-blue-700 border-blue-700 text-blue-100 outline outline-2 outline-offset-2 outline-blue-500'>Active</button>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <button className='btn-success'>Success</button>
            <button className='btn-success ml-2 bg-teal-700 border-teal-700 text-teal-100 shadow-md shadow-teal-200'>Hover</button>
            <button className='btn-success ml-2 bg-teal-800 border-teal-800 text-teal-100 shadow-inner shadow-teal-900'>Focus</button>
            <button className='btn-success ml-2 bg-teal-700 border-teal-700 text-teal-100 outline outline-2 outline-offset-2 outline-teal-500'>Active</button>
          </div>
        </div>
      </div>

      <div className='mb-16'>
        <h4>Buttons Group</h4>
        <hr />
        <div className="flex flex-wrap justify-between">
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <div className="btn-group">
              <button>Default</button>
              <button className='bg-gray-700 text-slate-100 shadow-md shadow-slate-400'>Hover</button>
              <button className='bg-gray-800 text-slate-100 shadow-inner shadow-slate-900'>Focus</button>
              <button className='bg-gray-700 text-slate-100 outline outline-2 outline-offset-2 outline-gray-500'>Active</button>
            </div>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <div className="btn-group">
              <button className='btn-primary'>Primary</button>
              <button className='btn-primary bg-sky-700 border-sky-700 text-sky-100 shadow-md shadow-sky-300'>Hover</button>
              <button className='btn-primary bg-sky-800 border-sky-800 text-sky-100 shadow-inner shadow-sky-900'>Focus</button>
              <button className='btn-primary bg-sky-700 border-sky-700 text-sky-100 outline outline-2 outline-offset-2 outline-sky-500'>Active</button>
            </div>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <div className="btn-group">
              <button className='btn-secondary'>Secondary</button>
              <button className='btn-secondary bg-slate-700 border-slate-700 text-slate-100 shadow-md shadow-slate-300'>Hover</button>
              <button className='btn-secondary bg-slate-800 border-slate-800 text-slate-100 shadow-inner shadow-slate-900'>Focus</button>
              <button className='btn-secondary bg-slate-700 border-slate-700 text-slate-100 outline outline-2 outline-offset-2 outline-slate-500'>Active</button>
            </div>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <div className="btn-group">
              <button className='btn-danger'>Danger</button>
              <button className='btn-danger bg-rose-700 border-rose-700 text-rose-100 shadow-md shadow-rose-300'>Hover</button>
              <button className='btn-danger bg-rose-800 border-rose-800 text-rose-100 shadow-inner shadow-rose-900'>Focus</button>
              <button className='btn-danger bg-rose-700 border-rose-700 text-rose-100 outline outline-2 outline-offset-2 outline-rose-500'>Active</button>
            </div>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <div className="btn-group">
              <button className='btn-warning'>Warning</button>
              <button className='btn-warning bg-yellow-700 border-yellow-700 text-yellow-100 shadow-md shadow-yellow-200'>Hover</button>
              <button className='btn-warning bg-yellow-800 border-yellow-800 text-yellow-100 shadow-inner shadow-yellow-900'>Focus</button>
              <button className='btn-warning bg-yellow-700 border-yellow-700 text-yellow-100 outline outline-2 outline-offset-2 outline-yellow-500'>Active</button>
            </div>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <div className="btn-group">
              <button className='btn-info'>Info</button>
              <button className='btn-info bg-blue-700 border-blue-700 text-blue-100 shadow-md shadow-blue-200'>Hover</button>
              <button className='btn-info bg-blue-800 border-blue-800 text-blue-100 shadow-inner shadow-blue-900'>Focus</button>
              <button className='btn-info bg-blue-700 border-blue-700 text-blue-100 outline outline-2 outline-offset-2 outline-blue-500'>Active</button>
            </div>
          </div>
          <div className='mb-4 lg:w-1/3 md:w-1/2'>
            <div className="btn-group">
              <button className='btn-success'>Success</button>
              <button className='btn-success bg-teal-700 border-teal-700 text-teal-100 shadow-md shadow-teal-200'>Hover</button>
              <button className='btn-success bg-teal-800 border-teal-800 text-teal-100 shadow-inner shadow-teal-900'>Focus</button>
              <button className='btn-success bg-teal-700 border-teal-700 text-teal-100 outline outline-2 outline-offset-2 outline-teal-500'>Active</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buttons
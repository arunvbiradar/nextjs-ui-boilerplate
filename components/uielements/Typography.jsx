import React from 'react'

const Typography = () => {
  return (
    <div className='mb-16'>
      <h4>Typography</h4>
      <hr />
      <div className="flex flex-row">
        <div className="basis-1/2">
          <h1>H1 Heading</h1>
          <h2>H2 Heading</h2>
          <h3>H3 Heading</h3>
          <h4>H4 Heading</h4>
          <h5>H5 Heading</h5>
          <h6>H6 Heading</h6>
        </div>
        <div className="basis-1/2">
          <h1 className='h1'>.h1 Heading</h1>
          <h2 className='h2'>.h2 Heading</h2>
          <h3 className='h3'>.h3 Heading</h3>
          <h4 className='h4'>.h4 Heading</h4>
          <h5 className='h5'>.h5 Heading</h5>
          <h6 className='h6'>.h6 Heading</h6>
        </div>
      </div>
      <div className='mt-8'>          
        <p className='mb-3'><strong>Paragraph</strong>: Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p className='lead'><strong>Lead</strong>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, consequatur totam eos beatae labore dignissimos!</p>
      </div>
    </div>
  )
}

export default Typography
import React from 'react'

const Card = ({ title, author, date, category, tags, content, img }) => {

  return (
    <div className='mb-5'>
      <p className=' text-blue-800 text-[18px] font-bold'> {title}</p>

      <p className='text-[13px] mb-1'>
        By <span className='italic'>{author}</span> on <span className=' font-bold underline'>{category}</span>
      </p>

      <p className='text-[13px] mb-2'>Posted on <span className='italic'>{date}</span> </p>

      <p className='text-[14px] mb-2'>{content}</p>
      {/* <div>
        <img src={img} width={300} className='rounded-lg' />
      </div> */}
      <div className=''>
        {
          tags.map((tag, index) => {
            return <span className='text-blue-700 text-[11px] underline mx-[5px] font-bold'
              key={index}> #{tag}</span>
          })
        }
      </div>
    </div>
  )
}

export default Card

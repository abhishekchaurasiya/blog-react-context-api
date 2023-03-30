import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Pagination = () => {
  const { page, totalPages, pageHandlerClick } = useContext(AppContext)
  console.log(totalPages, page)
  return (
    <div className=' w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[700px] py-3 '>
        <div className='flex gap-x-2'>
          {
            page > 1 && <button
              className=' border rounded-md py-1 px-2 flex justify-center items-center bg-orange-950 text-white'
              onClick={() => pageHandlerClick(page - 1)}>
              <FiChevronLeft /> Previous
            </button>
          }

          {
            page < totalPages && <button
              className=' border rounded-md py-1 px-2 flex justify-center items-center  bg-orange-950 text-white'
              onClick={() => pageHandlerClick(page + 1)}>
              Next <FiChevronRight />
            </button>
          }

        </div>

        <p className=' font-bold text-sm'>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination

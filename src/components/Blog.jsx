import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from "../components/Spinner";
import Card from "../components/Card"

const Blog = () => {
  const { posts, loading } = useContext(AppContext)

  return (
    <div className='w-11/12 max-w-[700px] flex flex-col items-center justify-center gap-2 mt-[70px] mb-[60px]
   '>
      {
        loading ? (<Spinner />) :
          (posts.length === 0 ?
            (<div>
              <p>No Post Found</p>
            </div>) :
            (posts.map((post, id) => {
              return <Card {...post} key={id} />
            })))
      }
    </div>
  )
}

export default Blog;

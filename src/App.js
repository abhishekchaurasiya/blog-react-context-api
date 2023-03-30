import React, { useContext, useEffect } from 'react'
import "./App.css";
import Blog from './components/Blog';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';

const App = () => {
  const { fetchBlogPost } = useContext(AppContext)

  useEffect(() => {
    fetchBlogPost()
  },[])

  return (
    <div className=' w-full h-full flex flex-col gap-y-2 items-center'>
      <Header />
      <Blog />
      <Pagination />
    </div>
  )
}

export default App

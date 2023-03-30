import React, { createContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { baseUrl } from '../baseUrl';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [posts, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const fetchBlogPost = async (page = 1) => {
        let url = `${baseUrl}?page=${page}`
        try {
            setLoading(true)
            const getData = await fetch(url)
            const response = await getData.json();

            setPost(response.posts)
            setPage(response.page)
            setTotalPages(response.totalPages)

        } catch (error) {
            console.log("Error fetching data")
            setPage(1)
            setPost([])
            setTotalPages(null)
        }
        setLoading(false)
    };

    const pageHandlerClick = (page) => {
        setPage(page)
        fetchBlogPost(page)
        toast.success(`Hello I am page ${page}`)
    }

    const value = {
        loading, setLoading,
        posts, setPost,
        page, setPage,
        totalPages, setTotalPages,
        fetchBlogPost, pageHandlerClick
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


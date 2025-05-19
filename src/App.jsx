import React, { useState, useEffect } from 'react'
import { ImageGallery, SearchBar, LoadMoreBtn } from './components'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'

import axios from 'axios';

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "IxWHTNgi0m59B-3fKDw_rmM2qSddrwHDWfH0344L_dA";



const App = () => {

  // Gallery
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchPhoto = (term) => {
    setSearch(term);
    setGallery([]);
    setPage(1);
    setTotalPage(0);
    setTotalPhotos(0);
    setErrorMessage(null);
    setIsError(false);
    setIsLoading(true);
  }
  const nextPage = () => {
    setPage((prev) => prev + 1);
  }

  useEffect(() => {

    const fetchPhotoApi = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            query: search,
            page: page,
            per_page: 12,
            client_id: ACCESS_KEY
          }
        });

        const { total_pages, results, total } = response.data;
        if (results.length < 1) {

          toast.error(`The search for the ${search} yielded no results`, {
            duration: 2000,
            position: 'top-right',
          });
          setIsError(true);
        } else {

          setGallery((prev) => [...prev, ...results])
          setTotalPage(total_pages)
          setTotalPhotos(total)
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
        setErrorMessage(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }

    if (!search) {
      return;
    } else {
      fetchPhotoApi();
    }

  }, [search, page]);

  useEffect(() => {
    if (totalPhotos < 1) {
      return;
    } else {
      toast.success(`The search for the ${search} yielded ${totalPhotos} results`, {
        duration: 2000,
        position: 'top-right',
      });
    }

  }, [totalPhotos]);


  return (
    <div className="App">
      <SearchBar searchPhoto={searchPhoto} />
      <ImageGallery
        gallery={gallery}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
      />
      {
        totalPage > 0 ? <LoadMoreBtn nextPage={nextPage} /> : null
      }
    </div>
  )
}

export default App

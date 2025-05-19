import React, { useState, useEffect } from 'react'
import { ImageGallery, SearchBar } from './components'
import { Toaster } from 'react-hot-toast';
import './App.css'

import axios from 'axios';

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "IxWHTNgi0m59B-3fKDw_rmM2qSddrwHDWfH0344L_dA";



const App = () => {

  // Gallery
  const [gallery, setGallery] = useState([]);
  const [gallerySearch, setGallerySearch] = useState("");
  const [galleryPage, setGalleryPage] = useState(1);
  const [isGalleryLoading, setIsGalleryLoading] = useState(false);

  const searchPhoto = (term) => {
    setGallerySearch(term);
  }


  useEffect(() => {



    const fetchPhotoApi = async () => {
      setIsGalleryLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: {
            query: gallerySearch,
            page: galleryPage,
            per_page: 12,
            client_id: ACCESS_KEY
          }
        });
        setGallery((prev) => [...prev, ...response.data.results])
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsGalleryLoading(false);
        }, 1000);
      }
    }


    if (!gallerySearch) {
      return;
    } else {
      fetchPhotoApi();
    }
  }, [gallerySearch, galleryPage]);

  return (
    <div className="App">
      <SearchBar searchPhoto={searchPhoto} />
      <ImageGallery gallery={gallery} isGalleryLoading={isGalleryLoading} />
    </div>
  )
}

export default App

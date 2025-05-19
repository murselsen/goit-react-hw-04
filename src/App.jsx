import React, { useState, useEffect } from 'react'
import { ImageGallery, SearchBar } from './components'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'

import axios from 'axios';

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "IxWHTNgi0m59B-3fKDw_rmM2qSddrwHDWfH0344L_dA";



const App = () => {

  // Gallery
  const [gallery, setGallery] = useState([]);
  const [gallerySearch, setGallerySearch] = useState();
  const [galleryPage, setGalleryPage] = useState(1);
  const [isGalleryLoading, setIsGalleryLoading] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [isPhotoModal, setIsPhotoModal] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchPhoto = (term) => {
    setGallerySearch(term);
    setGallery([]);
    setGalleryPage(1);
    setIsError(false);
  }
  const nextGalleryPage = () => {
    setGalleryPage((prev) => prev + 1);
  }

  const togglePhotoModal = (photoData) => {
    setIsPhotoModal(!isPhotoModal);
    if (isPhotoModal) {
      setPhotoModal(false);
    } else {
      setPhotoModal(photoData);
    }
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
        if (response.data.results.length < 1) {
          toast.error(`The search for the ${gallerySearch} yielded no results`, {
            duration: 2000,
            position: 'top-right',
            style: {
              background: '#333',
              color: '#fff',
              fontSize: '16px',
            }
          });
          setIsError(true);
        } else {
          setGallery((prev) => [...prev, ...response.data.results])

        }
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
      <ImageGallery
        gallery={gallery}
        isGalleryLoading={isGalleryLoading}
       
        isError={isError}
        togglePhotoModal={togglePhotoModal}
      />
      
    </div>
  )
}

export default App

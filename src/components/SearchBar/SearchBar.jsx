import React from 'react';
import Css from './SearchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';





const SearchBar = ({
    searchPhoto
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const { search } = e.target.elements
        if (search.value) {
            toast.success(`initiating a search for ${search.value} content...`, {
                position: 'top-right',
                duration: 2000,
                style: {

                    background: '#000',
                    color: '#fff',
                },
            });

            searchPhoto(search.value);
        } else {
            toast.error("Please enter a search");
        }
    }

    return (
        <header className={Css.SearchBar}>
            <form className={Css.SearchBar_Form} onSubmit={handleSubmit}>
                <input
                    className={Css.SearchBar_Input}
                    type="text"
                    name='search'
                    placeholder="Search images and photos"
                />
                <button type="submit" className={Css.SearchBar_Button}>
                    <AiOutlineSearch />
                </button>
            </form>
            <Toaster />
        </header>

    )
};

export default SearchBar;
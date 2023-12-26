import React from 'react'
import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import SearchDataFile from '../../Data/SearchDataFile'
import close from '../../assets/images/x.png'
import { FaSearch } from 'react-icons/fa'
import './SearchBoxMob.css'



const SearchBoxMob = ({activeButton, setActiveButton}) => {
    const [ search, setSearch ] = useState("")
    const [ searchData, setSearchData ] = useState([])


        
    const handleChange = (e) => {
        setSearch(e.target.value)
    };
    const handleClose = () => {
        setSearch("")
        setSearchData([])
    } ;
    const handleLinkClose = () => {
        let navBar = document.querySelector(".navbar-collapse")
        setSearch("")
        setSearchData([])
        navBar.classList.remove("show")
        setActiveButton(!activeButton)
    }
    useEffect( () => {
        let closeImg = document.querySelector(".closeImg");
        if ( search !== "" ){
            closeImg.style.display = "block";
            // fetch(` https://api.tvmaze.com/search/shows?q=${search}`)
            // .then( res => res.json())
            // .then(data => setSearchData(data));
            const newFilterData = SearchDataFile.filter( resultLink => {
                return resultLink.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            })
            setSearchData(newFilterData)
        }
        else if( search === "" ){
            closeImg.style.display = "none";
            setSearch("")
            setSearchData([])
        };
    }, [search]);
 


    return (
        <>
            <div className='toRemoveForm-mob'>
                <div 
                className='input-item mob-search' 
                >
                        <label htmlFor='searchText' className='label-icon '>
                            <span className='search-icon'>
                                <FaSearch />
                            </span>
                        </label>    
                        <label 
                        htmlFor   = 'searchText' 
                        className = 'closeImg'
                        onClick   = { handleClose }
                        >
                            <img className='img-fluid' src={close} alt="" />
                        </label>                   
                        <input 
                        autoComplete='off'
                        className   ='search-input form-control searchText' 
                        type        ="text" 
                        placeholder ="ابحث..."
                        id          ="searchTextMob" 
                        name        ="searchKeyword" 
                        value        = {search}
                        onChange     = {handleChange}
                        />  
                </div>    
                <div className="results-list">
                    {
                        searchData.map(( data, index ) => {
                            return (
                                <HashLink 
                                key={index} 
                                className= 'search-result'  
                                to={data.GoToPath} 
                                onClick={handleLinkClose}
                                >
                                    { data.name }
                                </HashLink>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SearchBoxMob
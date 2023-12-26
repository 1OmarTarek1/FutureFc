import React from 'react'
import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import SearchDataFile from '../../Data/SearchDataFile'
import { FaSearch } from 'react-icons/fa'
import close from '../../assets/images/x.png'
import './SearchBoxPC.css'
// import { useLocation } from 'react-router-dom'
// import { useHistory } from 'react-router-use-history'


// حل مشكلة زرار الانتر اللينكات مبتروحش علي مكانها بظبت

const SearchBoxPC = () => {
    const [ activeSearch, setActiveSearch ] = useState("");
    const [ search, setSearch ] = useState("")
    const [ searchData, setSearchData ] = useState([])
    let   [ selectedItem, setSelectedItem ] = useState( -1 )

    const handleChange = (e) => {
        setSearch(e.target.value)
    };
    const handleClose = () => {
        setSearch("")
        setSearchData([])
        setSelectedItem(-1)
    } ;
    const handleKeyDown = (e) => {
        if ( selectedItem < searchData.length ){
            if( e.key === "ArrowUp" && selectedItem > 0 ) {
                setSelectedItem( prev => prev - 1 )
            }
            else if( e.key === "ArrowDown" && selectedItem < searchData.length - 1 ) {
                setSelectedItem( prev => prev + 1 )
            }
            else if( e.key === "Enter" && selectedItem >= 0 ) {
                    let linksGO = document.querySelectorAll(".search-result") 
                    linksGO[selectedItem].click()   
                    setSearch("")
                    setSearchData([])
                    setSelectedItem(-1)
                    setActiveSearch(!activeSearch)
            }
        }
        else {
            setSelectedItem(-1)
        };
    };
    const handleLinkClose = () => {
        setSearch("")
        setSearchData([])
        setSelectedItem(-1)
        setActiveSearch(!activeSearch)
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
            setSelectedItem(-1)
        }

    }, [search]);

    return (
        <>
            <div 
                className= {
                        activeSearch ? 
                        " activeSearch searchForm input-item pc-search" 
                        : "searchForm input-item pc-search"
                    } 
                >
                    <label 
                        htmlFor   = 'searchText' 
                        className = 'label-icon '
                        onClick   = {() => { setActiveSearch( !activeSearch );}}
                    >
                        <span className='search-icon pcSearchIcon' 
                        onClick={handleClose}
                        >
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
                    autoComplete = "off"
                    className    = 'search-input form-control searchText pcSearch' 
                    type         = "search" 
                    placeholder  = "ابحث..."
                    id           = "searchText" 
                    name         = "searchKeyword" 
                    value        = {search}
                    onChange     = {handleChange}
                    onKeyDown    = {handleKeyDown}
                    />  
            </div>
            <div className="results-list">
                {
                    searchData.map(( data, index ) => {
                        return (
                            <HashLink 
                            key={index} 
                            className={ selectedItem === index 
                            ? 'search-result activeLine' 
                            : 'search-result' } 
                            to={data.GoToPath} 
                            onClick={handleLinkClose}
                            >
                                { data.name }
                            </HashLink>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SearchBoxPC
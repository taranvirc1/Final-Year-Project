import React from 'react'
import {Link} from "react-router-dom"
import  "../../Styles/Forum/Search_Thread.css"
import DeleteIcon from "../../images/forum/delete.png"
import SearchIcon from "../../images/forum/search.png"

function SearchThread() {
  return (
    <div className='navbar-spacing'>
      <h2 className='SearchForum-Title'>Search Forum Threads</h2>
      <section className='thread-search'>
        <div className='searchthread-title'>
          <label for="sthread-title">Thread Title: </label>
          <input type="text" id="sthread-title" name="sthread-title" placeholder="  Search For Topic Thread Title"/>
        </div>
        <div className='searchtags'>
          <label for="s_tags">Tags: </label>
          <input type="text" id="s_tags" name="s_tags" placeholder="  Catergorise Topic Tags"/>
        </div>
        <div className='searchsort'>
          <label for="ssort">Sort By: </label>
          <select id="ssort" name="ssort">
            <option value="Last Updated">Last Updated</option>
            <option value="Most Liked">Most Liked</option>
            <option value="Most Replies">Most Replies</option>
          </select>
        </div>
        <div className='ClearSearch'>
          <button className='clearbutton'><img src={DeleteIcon} alt="delete icon"/></button>
        </div>
        <div className='searchpost'>
        <Link to="/SearchThread_results">
          <a href="/" className='spost'><img src={SearchIcon} alt="search icon"/></a>
          <label>Search Thread</label>
        </Link>
        </div>
      </section>
    </div>
    
  )
}

export default SearchThread
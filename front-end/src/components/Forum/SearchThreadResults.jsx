import React from 'react'
import {Link} from "react-router-dom"
import "../../Styles/Forum/SearchThread_Results.css"

// import SearchIcon from "../../images/forum/search.png"
// import CreateIcon from "../../images/forum/create.png"
import SortIcon from "../../images/forum/sort.png"
import LikeIcon from "../../images/forum/like.png"
import ReplyIcon from "../../images/forum/reply.png"

function SearchThreadResults() {
  return (
    <>
    <div className='navbar-spacing'>
    </div>
    <div className="searchresult-title">
        <h2>You Searched For: "CS"</h2>
    </div>
    <nav className='SearchResult-list'>
        <a href='/'>Previous</a>
        <a href='/'>1</a>
        <a href='/'>2</a>
        <a href='/'>Next</a>
    </nav>
    
    <div className='SearchResultOptions'>
        
        <a href='/' className="SearchResultSort">
          
          <label for="srsortbtn"><img src={SortIcon} alt="sort icon"/></label>               
          <input type="checkbox" id="srsortbtn"/> 
          
          <ul class="searchresultsort-optn">
            <li><a href="/">Last Updated</a></li> 
            <li><a href="/">Most Liked</a></li>
            <li><a href="/">Most Replies</a></li>
          </ul>

        </a>
          
    </div>
    <div className='ThreadResultsFound'><h2>5 results found</h2></div>
    <section className='ThreadResults-List'>
      
      <div className="threadresult">
        <div className='result-items'>
          <Link to="/Forum_page">
            <a href="/" className='result-title'>CS2001-Thread</a>
          </Link>
          <ul className='rtags'>
            <li>CS</li>
            <li>Programming</li>
          </ul>
          <div className='rStats'>
            {/* <div className='rLikes'><img src={LikeIcon} alt="like icon"></img></div>
            <h4>5 Likes</h4> */}
            <div className='rReplies'><img src={ReplyIcon} alt="reply icon"></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='result-creatorname'>Started 2 hours ago By Kenura</div>
          
          
        </div>
      </div>


     
    </section>
    </>
  )
}

export default SearchThreadResults
import React from 'react'
import {Link} from "react-router-dom"
import "../../Styles/Forum/SearchThread_Results.css"

import SearchIcon from "../../images/forum/search.png"
import CreateIcon from "../../images/forum/create.png"
import SortIcon from "../../images/forum/sort.png"
import LikeIcon from "../../images/forum/like.png"
import ReplyIcon from "../../images/forum/reply.png"

function SearchThread_results() {
  return (
    <>
    <div className='navbar-spacing'>
    </div>
    <div className="searchresult-title">
        <h2>You Searched For: "CS"</h2>
    </div>
    <nav className='SearchResult-list'>
        <a >Previous</a>
        <a >1</a>
        <a >2</a>
        <a >Next</a>
    </nav>
    
    <div className='SearchResultOptions'>
        
        <a className="SearchResultSort">
          
          <label for="srsortbtn"><img src={SortIcon}/></label>               
          <input type="checkbox" id="srsortbtn"/> 
          
          <ul class="searchresultsort-optn">
            <li><a href="#">Last Updated</a></li> 
            <li><a href="#">Most Liked</a></li>
            <li><a href="#">Most Replies</a></li>
          </ul>

        </a>
          
    </div>
    <section className='ThreadResults-List'>
      
      <div className="threadresult">
        <div className='result-items'>
          <Link to="/Forum_page">
            <a href="" className='result-title'>CS2001-Thread</a>
          </Link>
          <ul className='rtags'>
            <li>CS</li>
            <li>Programming</li>
          </ul>
          <div className='rStats'>
            <div className='rLikes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='rReplies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='result-creatorname'>Started 2 hours ago By Kenura</div>
          
          
        </div>
      </div>

      <div className="threadresult">
        <div className='result-items'>
          <Link to="/Forum_page">
            <a href="" className='result-title'>CS2001-Thread</a>
          </Link>
          <ul className='rtags'>
            <li>CS</li>
            <li>Programming</li>
          </ul>
          <div className='rStats'>
            <div className='rLikes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='rReplies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='result-creatorname'>Started 2 hours ago By Kenura</div>
          
          
        </div>
      </div>
      <div className="threadresult">
        <div className='result-items'>
          <Link to="/Forum_page">
            <a href="" className='result-title'>CS2001-Thread</a>
          </Link>
          <ul className='rtags'>
            <li>CS</li>
            <li>Programming</li>
          </ul>
          <div className='rStats'>
            <div className='rLikes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='rReplies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='result-creatorname'>Started 2 hours ago By Kenura</div>
          
          
        </div>
      </div>
      <div className="threadresult">
        <div className='result-items'>
          <Link to="/Forum_page">
            <a href="" className='result-title'>CS2001-Thread</a>
          </Link>
          <ul className='rtags'>
            <li>CS</li>
            <li>Programming</li>
          </ul>
          <div className='rStats'>
            <div className='rLikes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='rReplies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='result-creatorname'>Started 2 hours ago By Kenura</div>
          
          
        </div>
      </div>
      <div className="threadresult">
        <div className='result-items'>
          <Link to="/Forum_page">
            <a href="" className='result-title'>CS2001-Thread</a>
          </Link>
          <ul className='rtags'>
            <li>CS</li>
            <li>Programming</li>
          </ul>
          <div className='rStats'>
            <div className='rLikes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='rReplies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='result-creatorname'>Started 2 hours ago By Kenura</div>
          
          
        </div>
      </div>

     
    </section>
    </>
  )
}

export default SearchThread_results
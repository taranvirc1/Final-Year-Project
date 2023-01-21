import React from 'react'
import {Link} from "react-router-dom"
import "../../Styles/Forum/Forum_Landing.css"

import SearchIcon from "../../images/forum/search.png"
import CreateIcon from "../../images/forum/create.png"
import SortIcon from "../../images/forum/sort.png"
import LikeIcon from "../../images/forum/like.png"
import ReplyIcon from "../../images/forum/reply.png"

function ForumLanding() {
  return (
    <>
    <div className='navbar-spacing'>
    </div>
    <div className="forums-title">
        <h2>Student Forum Threads</h2>
    </div>
    <nav className='LandingPage-list'>
        <a >Previous</a>
        <a >1</a>
        <a >2</a>
        <a >Next</a>
    </nav>
    
    <div className='LandingOptions'>
        
        <a className="LandingSort">
          
          <label for="lsortbtn"><img src={SortIcon}/></label>               
          <input type="checkbox" id="lsortbtn"/> 
          
          <ul class="landingsort-optn">
            <li><a href="#">Last Updated</a></li> 
            <li><a href="#">Most Liked</a></li>
            <li><a href="#">Most Replies</a></li>
          </ul>

        </a>
        <Link to="/Search_thread">
          <a href="/Search_thread"><img src={SearchIcon}/></a>
        </Link>
        
        <Link to="/Create_forum">
          <a href="/"><img src={CreateIcon}/></a>
        </Link>
          
    </div>
    <section className='Thread-List'>
      
      <div className="thread">
        <div className='topic-items'>
          <Link to="/Forum_page">
            <a href="" className='thread-title'>CS2001-Thread</a>
          </Link>
          <ul className='tags'>
            <li>CS</li>
            <li>Programming</li>
          </ul>
          <div className='Stats'>
            <div className='Likes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='Replies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='thread-creatorname'>Started 2 hours ago By Kenura</div>
          
          
        </div>
      </div>

      <div className="thread">
        <div className='topic-items'>
        <a href="" className='thread-title'>CS2005-Thread</a>
          <ul className='tags'>
            <li>CS</li>
            <li>Networks</li>
          </ul>
          <div className='Stats'>
            <div className='Likes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='Replies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          <div className='thread-creatorname'>Started 2 hours ago By Kenura</div>
        </div>
      </div>
      
      <div className="thread">
        <div className='topic-items'>
        <a href="" className='thread-title'>CS2004-Thread</a>
          <ul className='tags'>
            <li>CS</li>
            <li>Algorithms</li>
          </ul>
          <div className='Stats'>
            <div className='Likes'><img src={LikeIcon}></img></div>
            <h4>7 Likes</h4>
            <div className='Replies'><img src={ReplyIcon}></img></div>
            <h4>5 Replies</h4>
          </div>
          <div className='thread-creatorname'>Started 2 hours ago By Kenura</div>
        </div>
      </div>
      
      <div className="thread">
        <div className='topic-items'>
        <a href="" className='thread-title'>CS2001-Thread</a>
          <ul className='tags'>
            <li>CS</li>
            <li>Programming</li>
          </ul>
          <div className='Stats'>
            <div className='Likes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='Replies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='thread-creatorname'>Started 2 hours ago By Kenura</div>
          
          
        </div>
      </div>

      <div className="thread">
        <div className='topic-items'>
        <a href="" className='thread-title'>CS2005-Thread</a>  
          <ul className='tags'>
            <li>CS</li>
            <li>Networks</li>
          </ul>
          <div className='Stats'>
            <div className='Likes'><img src={LikeIcon}></img></div>
            <h4>5 Likes</h4>
            <div className='Replies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          <div className='thread-creatorname'>Started 2 hours ago By Kenura</div>
        </div>
      </div>
      
      <div className="thread">
        <div className='topic-items'>
        <a href="" className='thread-title'>CS2004-Thread</a>
          <ul className='tags'>
            <li>CS</li>
            <li>Algorithms</li>
          </ul>
          <div className='Stats'>
            <div className='Likes'><img src={LikeIcon}></img></div>
            <h4>7 Likes</h4>
            <div className='Replies'><img src={ReplyIcon}></img></div>
            <h4>5 Replies</h4>
          </div>
          <div className='thread-creatorname'>Started 2 hours ago By Kenura</div>
        </div>
      </div>
      <div className="thread">
        <div className='topic-items'>
        <a href="" className='thread-title'>CS2004-Thread</a>
          <ul className='tags'>
            <li>CS</li>
            <li>Algorithms</li>
          </ul>
          <div className='Stats'>
            <div className='Likes'><img src={LikeIcon}></img></div>
            <h4>7 Likes</h4>
            <div className='Replies'><img src={ReplyIcon}></img></div>
            <h4>5 Replies</h4>
          </div>
          <div className='thread-creatorname'>Started 2 hours ago By Kenura</div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ForumLanding
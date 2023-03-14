import React from 'react'
import {Link} from "react-router-dom"
import "../../Styles/Forum/Forum_Landing.css"
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import SearchIcon from "../../images/forum/search.png"
import CreateIcon from "../../images/forum/create.png"
import SortIcon from "../../images/forum/sort.png"
import ReplyIcon from "../../images/forum/reply.png"

function ForumLanding() {
  const [threads, setthreads] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [threadid, setthreadid] = useState(0);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const ViewForum = (item) => {
    localStorage.setItem("ThreadID", item);
    navigate("/Forum_page");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/threads`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((resp) => {
        console.log(resp.data);

        setthreads(resp.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Get current posts
  const endOffset = itemOffset + postsPerPage;
  const currentPosts = threads.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(threads.length / postsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % threads.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className='fl-navbar-spacing'>
    </div>
    <div className="forums-title">
        <h2>Student Forum Threads</h2>
    </div>
    <div className='thread-pages'>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<Prev"
        renderOnZeroPageCount={null}
        activeClassName="active"
      />
    </div>
    
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
      {currentPosts.map((item, index) => (
      <div className="thread">
        <div className='topic-items'>
          <div className='thread-title'
            onClick={() => {
              ViewForum(item.threadId);
            }}
            >{item.threadName}</div>
            
    
          <ul className='tags'>
            <li>{item.fTags}</li>
          </ul>
          <div className='Stats'>
            <div className='Replies'><img src={ReplyIcon}></img></div>
            <h4>4 Replies</h4>
          </div>
          
          <div className='thread-creatorname'>Started on {item.fDateCreated} By {item.students.firstName} {item.students.lastName} </div>
          
          
        </div>
      </div>
      ))}
    </section>
    </>
  )
}

export default ForumLanding

import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import "../../Styles/Forum/Forum_Page.css"
import DeleteIcon from "../../images/forum/delete.png"
import SortIcon from "../../images/forum/sort.png"
import ReplyIcon from "../../images/forum/reply.png"
import ProfileIcon from "../../images/forum/profile.png"
import axios from 'axios'

import BoldIcon from "../../images/forum/text-editor/bold.png"
import ItalicIcon from "../../images/forum/text-editor/italic.png"
import UnderlineIcon from "../../images/forum/text-editor/underline.png"
import StrikethroughIcon from "../../images/forum/text-editor/strikethrough.png"
import ColourWheelIcon from "../../images/forum/text-editor/colourwheel.png"
import FontSizeIcon from "../../images/forum/text-editor/fontsize.png"
import replyline from "../../images/forum/text-editor/replyline.png"
import HyperlinkIcon from "../../images/forum/text-editor/hyperlink.png"
import PhotoIcon from "../../images/forum/text-editor/photo.png"
import EmojiIcon from "../../images/forum/text-editor/emoji.png"
import ListIcon from "../../images/forum/text-editor/list.png"
import TextAlignIcon from "../../images/forum/text-editor/textalign.png"
import QuoteIcon from "../../images/forum/text-editor/quote.png"
import SpoilerIcon from "../../images/forum/text-editor/spoiler.png"
import ReactPaginate from 'react-paginate';

function ForumPage() {
  const [threadName,setthreadName]=useState([]);
  const [threadTag,setthreadtag]=useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [messages, setMessages] = useState([]);
  const [newMessage, setnewMessage] = useState("");
  const [studentId, setStudentId] = useState("");
  const [subbed, setSubbed] = useState([]);
  const [saveSubId, setsaveSubId] = useState(0);
  const[SubButton, setSubButton] = useState("Subscribe");
  const [subcolor,setsubcolor]=useState('white');
  const saveThreadID = localStorage.getItem("ThreadID");
  const saveLoggedinUser = localStorage.getItem("loggedInUser");
  const jwt = localStorage.getItem("jwt");

  const threadnameloader = (e) => {
    axios
    .get(`http://localhost:8080/threadid/${saveThreadID}`, { headers })
  
      .then((resp) => {
        setthreadName(resp.data.threadName);
        setthreadtag(resp.data.fTags)
        console.log("Thread Name: " + threadName);
      })
      .catch((error) => {
        console.error(error);
  });
  }

  useEffect(() => {
    axios.get(`http://localhost:8080/profile/${saveLoggedinUser}`, { headers})
      .then(response => {
        setStudentId(response.data.studentId)

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
console.log("Message created by"+studentId);
  const headers = {
    Authorization: `Bearer ${jwt}`,
  };

const messageloader = (e) => {
  axios
  .get(`http://localhost:8080/messages/${saveThreadID}`, { headers })

    .then((resp) => {
      console.log(resp.data);

      setMessages(resp.data);
    })
    .catch((error) => {
      console.error(error);
});
}



//Get current posts
const endOffset = itemOffset + postsPerPage;
const currentMessages = messages.slice(itemOffset, endOffset);
const pageCount = Math.ceil(messages.length / postsPerPage);

const handlePageClick = (event) => {
  const newOffset = (event.selected * postsPerPage) % messages.length;
  console.log(
    `User requested page number ${event.selected}, which is offset ${newOffset}`
  );
  setItemOffset(newOffset);
};

const newmessagehandle = (e) => {
  e.preventDefault();
  console.log(newMessage);
  if (localStorage.getItem("loggedInUser") === "") {
    alert("Please Login to post a message");
  }
  else if (newMessage === "") {
    alert("Please fill in the text field");
  }
  else{
    axios
    .post("http://localhost:8080/messages/create", {newMessage,saveThreadID,studentId},
      {headers: { Authorization: `Bearer ${jwt}` }},
    )
    .then((res) => {
        console.log(res);
})
    .then(() => {
      messageloader();
    })
    .catch((err) => {
      console.log(err);

    });
  }
    
     
  }

  //subscribe button colour changer white to orange
  
  //subscribe button text changer "Subscribe" to "Subscribed"
  
  function subbuttonchange(){
    if(saveSubId===0){
      setSubButton("Subscribe")
      setsubcolor("white")
    }
    else{
      setSubButton("Subscribed")
      setsubcolor("orange")
    }
    
  }

  const subscriptiondata = (e) => {
    axios
    .get(`http://localhost:8080/getsub/${saveLoggedinUser}/${saveThreadID}`, { headers })
  
      .then((resp) => {
        console.log(resp.data);
  
        setSubbed(resp.data);
        setsaveSubId(resp.data.subId);
        console.log("getting subId: "+ subbed);
        console.log("getting subId: "+ saveSubId);
      })
      .catch((error) => {
        console.error(error);
  });
  }

  const subscribe = (e) => {
    if(saveSubId===0){
      axios
      .get(`http://localhost:8080/sub/create`,{saveLoggedinUser,saveThreadID}, { headers })
    
        .then((resp) => {
          console.log(resp.data);
          setsaveSubId(resp.subId);
          subbuttonchange();
          
        })
        .catch((error) => {
          console.error(error);
        }
      )
    }
    else{
      console.log("delete subId: " +saveSubId);
      axios
      .delete(`http://localhost:8080/deleteSub/${saveSubId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        if (response.data != null) {
          // alert("deleted successfully ");
        }
        setsaveSubId(0);
        subbuttonchange();
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  useEffect(() => {
    messageloader();
    subscriptiondata();
    threadnameloader();
    subbuttonchange();
    
  }, []);


  return (
    <>
    <div className='fp-navbar-spacing'>
    </div>
    <div className="forums-title">
        <h2 className='threadName'>{threadName}</h2>
        <h2 className='threadTag'>{threadTag}</h2>
    </div>
    <div className='thread-messages'>
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
    
    <div className='PageOptions'>
        
      {/* <a className="PageSort">
          
          <label for="psortbtn"><img src={SortIcon}/></label>               
          <input type="checkbox" id="psortbtn"/> 
          
          <ul class="pagesort-optn">
            <li><a href="#">Last Updated</a></li>
            <li><a href="#">Most Replies</a></li>
          </ul>

      </a> */}
      <a>
        <button id="subbtn" style={{background:subcolor}} onClick={event=>{subscribe();}}>{SubButton}</button>
      </a> 
          
    </div>
    {currentMessages.map((item, index) => (

      <div className='Thread-Messages'>
        <div className='ThreadMessage'>
        {item.students.avatar?  <img   className="ThreadProfile" src={"data:image/png;base64," + item.students.avatar } height="90" width="90" alt="" /> :
        <img className="ThreadProfile" src={ProfileIcon} height="90" width="90" alt="" />}
        

          <div className='ThreadParagraph'>
            <p>  {item.message }    
              </p>
          </div>
        </div>
        <div className='ThreadUser'>{item.students.firstName}</div>
        <div className='dateandreply'>
          <div className='ThreadTime'>Posted on {item.mDateCreated} at {item.mTimeCreated}</div>
          <a href= "#replysection" className="ThreadReply">
            <img src={ReplyIcon}/>
            <label>Reply</label>
          </a>
        </div>
        
      </div>
    ))}
    <section id="replysection" className='ThreadReplySection'>
      <div className='ThreadTextEditor'>
        <div className='ThreadEditorText'>
          <textarea rows="10" name="pagetext_body" onChange={(e) => setnewMessage(e.target.value)}></textarea>
        </div>
      </div>
      <div className='ThreadTextEditorTrash'><button className='Threadtrashbutton'><img src={DeleteIcon}/></button></div>
      <div className="ThreadTextEditorReply" onClick={newmessagehandle}>
        <a href="/" ><img src={ReplyIcon}/></a>
        <label>Post Reply</label>
      </div>
    </section>
    </>
  )
}

export default ForumPage

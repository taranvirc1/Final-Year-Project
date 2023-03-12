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

const LikeIcon = require('../../images/forum/like.png')
const LikedIcon = require('../../images/forum/liked.png')
const likeselect = { LikeIcon, LikedIcon }



function ForumPage() {
  const [threadId,setThreadId]=useState(0);
  const [messages, setMessages] = useState([]);
  const [mLikes, setmLikes] = useState(0);
  const [newMessage, setnewMessage] = useState([]);
  const [studentId, setStudentId] = useState("");
  const saveThreadID = localStorage.getItem("ThreadID");
  const loggedInUser = localStorage.getItem("ThreadID");
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const saveThreadID = localStorage.getItem("ThreadID");
    setThreadId(saveThreadID);
    
  }, []);

  useEffect(() => {

    const saveLoggedinUser = localStorage.getItem("loggedInUser");
    axios.get(`http://localhost:8080/profile/${saveLoggedinUser}`, { headers})
      .then(response => {
        setStudentId(response.data.studentId)

      })
      .catch(error => {
        console.log(error);
      });
  }, []);
console.log("this"+studentId);


  const token = jwt;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const Api = `http://localhost:8080/messages/${threadId}`;
  const params = {
    threadId  };

useEffect(() => {
  axios
  .get(`http://localhost:8080/messages/${saveThreadID}`, { headers })

    .then((resp) => {
      console.log(resp.data);

      setMessages(resp.data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

const newmessagehandle = (e) => {
  e.preventDefault();

    axios
      .post("http://localhost:8080/messages/create", {newMessage,mLikes,saveThreadID,studentId},
        {headers: { Authorization: `Bearer ${jwt}` }},
      )
      .then((res) => {
          console.log(res);
})
      .then(() => {
        setnewMessage("");
      })
      .catch((err) => {
        console.log(err);

      });
    
  }

console.log(saveThreadID)
console.log(studentId)










  
  //subscribe button colour changer white to orange
  const [subcolor,setsubcolor]=useState('white');
  function subbg(){
    if(subcolor==="white"){
      setsubcolor("orange")
    }
    else{
      setsubcolor("white")
    }
  }
  //subscribe button text changer "Subscribe" to "Subscribed"
  const[SubButton, setSubButton] = useState("Subscribe");
  function watchthread(){
    if(SubButton==="Subscribed"){
      setSubButton("Subscribe")
    }
    else{
      setSubButton("Subscribed")
    }
    
  }
  //like button colour changer white to Dodger Blue
  const [likecolor,setlikeColor]=useState('white');
  function likebg(){
    if(likecolor==="white"){
      setlikeColor("#4882ff")
    }
    else{
      setlikeColor("white")
    }
  }
  //subscribe button image changer "LikeIcon" to "LikedIcon"
  const[LikeButton, setLikeButton] = useState(likeselect.LikeIcon);
  function presslike(){
    if(LikeButton===likeselect.LikedIcon){
      setLikeButton(likeselect.LikeIcon)
    }
    else{
      setLikeButton(likeselect.LikedIcon)
    }
  }

  const [threadid, setthreadid] = useState("");

  useEffect(() => {
    const saveThreadID = localStorage.getItem("ThreadID");
    if (saveThreadID) {
      setthreadid(saveThreadID);
    }
  }, []);
  console.log(threadid);
  return (
    <>
    <div className='navbar-spacing'>
    </div>
    <div className="forums-title">
        <h2>Student Forum Threads</h2>
    </div>
    <nav className='ForumPage-list'>
        <a >Previous</a>
        <a >1</a>
        <a >2</a>
        <a >Next</a>
    </nav>
    
    <div className='PageOptions'>
        
      <a className="PageSort">
          
          <label for="psortbtn"><img src={SortIcon}/></label>               
          <input type="checkbox" id="psortbtn"/> 
          
          <ul class="pagesort-optn">
            <li><a href="#">Last Updated</a></li> 
            <li><a href="#">Most Liked</a></li>
            <li><a href="#">Most Replies</a></li>
          </ul>

      </a>
      <a>
        <button id="subbtn" style={{background:subcolor}} onClick={event=>{watchthread();subbg();}}>{SubButton}</button>
      </a> 
          
    </div>
    {messages.map((item, index) => (

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
        <div className='ThreadTime'>2 hours ago</div>
        <div className='ThreadInteraction'>
          <div className='ThreadLike' style={{background:likecolor}} onClick={event=>{likebg();presslike();}}><img src={LikeButton}/></div>
        <div className="ThreadReply"><img src={ReplyIcon}/><label>Reply</label></div>
        </div>
      </div>
    ))}
    <section className='ThreadReplySection'>
      <div className='ThreadTextEditor'>
        <div className="ThreadTextEditorPanel">
          <ul className='ThreadEditorIcons'>
            <li><img src={BoldIcon}/></li>
            <li><img src={ItalicIcon} style={{height: 42}}/></li>
            <li><img src={UnderlineIcon} style={{height: 42}}/></li>
            <li><img src={StrikethroughIcon}/></li>
            <li><img src={ColourWheelIcon}/></li>
            <li><img src={FontSizeIcon}/></li>
            <img className="Replyline" src={replyline}/>
            <li><img src={HyperlinkIcon}/></li>
            <li><img src={PhotoIcon}/></li>
            <li><img src={EmojiIcon}/></li>
            <li><img src={ListIcon}/></li>
            <li><img src={TextAlignIcon} style={{height: 44}}/></li>
            <li><img src={QuoteIcon}/></li>
            <li><img src={SpoilerIcon}/></li>
          </ul>
        </div>
        <div className='ThreadEditorText'>
          <textarea rows="15" name="pagetext_body" onChange={(e) => setnewMessage(e.target.value)}></textarea>
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

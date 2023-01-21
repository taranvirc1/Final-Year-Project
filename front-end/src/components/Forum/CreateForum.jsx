import React from 'react'
import {Link} from "react-router-dom"
import  "../../Styles/Forum/Create_Forum.css"
import DeleteIcon from "../../images/forum/delete.png"
import ReplyIcon from "../../images/forum/reply.png"
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

function CreateForum() {
  return (
    <>
    <div className='navbar-spacing'>
    </div>
    <h2 className='CreateForum-Title'>Create Forum Threads</h2>
    <section className='thread-create'>
      <div className='createthread-title'>
        <label for="cthread-title">Thread Title: </label>
        <input type="text" id="cthread-title" name="cthread-title" placeholder="  Add Topic Thread Title"/>
      </div>
      <div className='createtags'>
        <label for="c_tags">Tags: </label>
        <input type="text" id="c_tags" name="c_tags" placeholder="  Catergorise Topic Tags"/>
      </div>
      
      <div className='ThreadCreator'>
            <div className="ThreadTextCreatorPanel">
            <ul className='ThreadCreatorIcons'>
                <li><img src={BoldIcon} alt="bold icon"/></li>
                <li><img src={ItalicIcon} style={{height: 38}} alt="italic icon"/></li>
                <li><img src={UnderlineIcon} style={{height: 38}} alt="underline icon"/></li>
                <li><img src={StrikethroughIcon} alt="strike icon"/></li>
                <li><img src={ColourWheelIcon} alt="colour wheeel icon"/></li>
                <li><img src={FontSizeIcon} alt="font icon"/></li>
                <img className="Createline" src={replyline} alt="reply icon"/>
                <li><img src={HyperlinkIcon} alt="hyperlink icon"/></li>
                <li><img src={PhotoIcon} alt="file icon"/></li>
                <li><img src={EmojiIcon} alt="emoji icon"/></li>
                <li><img src={ListIcon} alt="list icon"/></li>
                <li><img src={TextAlignIcon} style={{height: 38}} alt="text align icon"/></li>
                <li><img src={QuoteIcon} alt="quote icon"/></li>
                <li><img src={SpoilerIcon} alt="spoiler icon"/></li>
            </ul>
            </div>
            <div className='ThreadCreatorText'>
            <textarea rows="20" name="text_body" placeholder=' First Message'></textarea>
            </div>
        </div>
        <div className='ThreadCreatorTextTrash'><button className='threadcreatetrashbutton'><img src={DeleteIcon}/></button></div>
        <div className="ThreadTextEditorCreate">
        <Link to="/Forum_landing">
            <a href="/" ><img src={ReplyIcon} alt="reply icon"/></a>
            <label>Post Thread</label>
        </Link>
        </div>
    </section>
    </>
  )
}

export default CreateForum
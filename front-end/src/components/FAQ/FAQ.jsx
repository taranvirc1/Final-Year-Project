import React from 'react'
import "../../Styles/FAQStyles/FAQ.css"
import {Link} from "react-router-dom"

function FAQ() {
    //(".faq-plus").on('click',function(){
        //(this).parent().parent().find('.faq-body').slideToggle();
      //});
  return (
    <div className="body">
    <div className="faq-container">
    <div className="row">
      <div className="faq-wrapper">
        <div className="faqheader">
          <h1>FAQs</h1>
        </div>
        <div className="faq-inner">
          <div className="faq-item">
            <h3>
              Is Coding4All free ?
              <span className="faq-plus">&#43;</span>
            </h3>
            <div className="faq-body">
             Yes Coding4All is a completely free website run by donations, ads and sponsors. This allows it to be more accessible to a wider audience.
            </div>
          </div>
          <hr/>
          <div className="faq-item">
            <h3>
              What is an FAQ page ?
              <span className="faq-plus">&#43;</span>
            </h3>
            <div className="faq-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
          <hr/>
          <div className="faq-item">
            <h3>
              What is an FAQ page ?
              <span className="faq-plus">&#43;</span>
            </h3>
            <div className="faq-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
          <hr/>
          <div className="faq-item">
            <h3>
              What is an FAQ page ?
              <span className="faq-plus">&#43;</span>
            </h3>
            <div className="faq-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
          <hr/>
          <div className="faq-item">
            <h3>
              What is an FAQ page ?
              <span className="faq-plus">&#43;</span>
            </h3>
            <div className="faq-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <div className="form-container">
    <Link to="/Contact">
    <a href="/">
      <button className="form-button">Contact Us</button>
    </a>
    </Link>
  </div>
  <br/>
  <br/>
  </div>
  )
}

export default FAQ
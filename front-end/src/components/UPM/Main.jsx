import React from "react";
import "../../Styles/UPM/Main.css";
import avatar from "../../images/UPM/assets/avatar.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <div className="container">
                <div className="left-side">
                    <nav className="navMenu">
                        <a href="/">
                            <span className="title">Account</span>
                        </a>
                        <a href="/profile">
                            <span className="title">Profile</span>
                        </a>
                        <a href="/">
                            <span className="title">Themes</span>
                        </a>
                        <a href="/">
                            <span className="title">Privacy</span>
                        </a>
                        <div className="dot"></div>
                    </nav>
                </div>
                <div className="right-side">
                    <div className="card">
                        <div className="background-avatar"></div>
                        <div className="avatar">
                            <img src={avatar}></img>
                        </div>
                        <button className="edit">Change avatar</button>
                        <div className="info-container">
                            <form>
                                <li className="item">
                                    <label>USERNAME</label>
                                    <div className="spacer">
                                        <input placeholder="default" readOnly="readonly"></input>
                                        <button>Edit</button>
                                    </div>
                                </li>
                                <li className="item">
                                    <label>EMAIL</label>
                                    <div className="spacer">
                                        <input placeholder="default" readOnly="readonly"></input>
                                        <button>Edit</button>
                                    </div>
                                </li>

                                <li className="item">
                                    <label>PHONE</label>
                                    <div className="spacer">
                                        <input placeholder="default" readOnly="readonly"></input>
                                        <button>Edit</button>
                                    </div>
                                </li>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;

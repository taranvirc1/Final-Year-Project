import React from "react";
import "../../Styles/UPM/UPM.css";
import avatar from "../../images/UPM/assets/avatar.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function UPM() {
    return (
        <>
            <div className="upm-container">
                <div className="upm-left-side">
                    <nav className="upm-navMenu">
                        <a href="/">
                            <span className="upm-title">Account</span>
                        </a>
                        <a href="/profile">
                            <span className="upm-title">Profile</span>
                        </a>
                        <a href="/">
                            <span className="upm-title">Themes</span>
                        </a>
                        <a href="/">
                            <span className="upm-title">Privacy</span>
                        </a>
                        <div className="upm-dot"></div>
                    </nav>
                </div>
                <div className="upm-right-side">
                    <div className="upm-card">
                        <div className="upm-background-avatar"></div>
                        <div className="upm-avatar">
                            <img src={avatar}></img>
                        </div>
                        <button className="upm-edit">Change avatar</button>
                        <div className="upm-info-container">
                            <form>
                                <li className="upm-item">
                                    <label>USERNAME</label>
                                    <div className="upm-spacer">
                                        <input placeholder="default" readOnly="readonly"></input>
                                        <button>Edit</button>
                                    </div>
                                </li>
                                <li className="upm-item">
                                    <label>EMAIL</label>
                                    <div className="upm-spacer">
                                        <input placeholder="default" readOnly="readonly"></input>
                                        <button>Edit</button>
                                    </div>
                                </li>

                                <li className="upm-item">
                                    <label>PHONE</label>
                                    <div className="upm-spacer">
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

export default UPM;

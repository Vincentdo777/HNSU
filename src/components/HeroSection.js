import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import myVideo from '../videos/video2.mp4';

function HeroSection () {
    return (
        <div className="hero-container">
            <video src={myVideo} autoPlay loop muted></video>
            <h1>Practice PTE for free</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED <i className="far fa-play-circle"/>
                </Button>
                
                
            </div>
        </div>
    )
}

export default HeroSection;

import React, { Component } from "react";
import styled from "styled-components";
import Stamp from '../../styles/Stamp';

const HeroStyles = styled.div`
    height: 342px;  
    margin:0;
    position: relative;
    overflow: hidden;
    z-index:1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    

  :before {
    content:'';
    width:100%; height:100%;
    position:absolute;
    overflow: hidden;
    top:0; left:0;
    background:red;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_bg.jpg");
    z-index:-1;
    transform: skewY(-2.2deg);
    transform-origin:0 0;
    -webkit-backface-visibility: hidden; 
  }

  .details {
    padding: 190px 0 0 280px;
    
    .title1 {
      color: white;
      font-size: 44px;
      margin-bottom: 13px;
      position: relative;
      
      span {
        position: absolute;
        top: 3px;
        margin-left: 12px;
        background: #C4AF3D;
        border-radius: 5px;
        color: #544C21;
        font-size: 14px;
        padding: 0px 4px;
        
      }
    }

    .title2 {    
      color: #C7C1BA;
      font-size: 23px;    
      font-weight: 300;
      margin-bottom: 15px;
    }
    
    .likes {
      margin-left: 24px;
    }
    
    
    .likes:before {
      content: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png");
      position: relative;
      top: 2px;
      padding-right: 7px;
    }

  }

`;

const PodcastInfoBoxHero = props => (
  <HeroStyles>
    <div className="details">
        <Stamp>
            <div className="title1">
                {props.title} <span>PG-13</span>
            </div>
        </Stamp>

        <div className="title2">{props.subTitle}</div>

        <fieldset className="rating">
            <input type="radio" id="star5" name="rating" value="5" />
            <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
            <input type="radio" id="star4half" name="rating" value="4 and a half" />
            <label
            className="half"
            htmlFor="star4half"
            title="Pretty good - 4.5 stars"
            />
            <input type="radio" id="star4" name="rating" value="4" checked />
            <label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
            <input type="radio" id="star3half" name="rating" value="3 and a half" />
            <label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
            <input type="radio" id="star3" name="rating" value="3" />
            <label className="full" htmlFor="star3" title="Meh - 3 stars" />
            <input type="radio" id="star2half" name="rating" value="2 and a half" />
            <label
            className="half"
            htmlFor="star2half"
            title="Kinda bad - 2.5 stars"
            />
            <input type="radio" id="star2" name="rating" value="2" />
            <label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
            <input type="radio" id="star1half" name="rating" value="1 and a half" />
            <label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
            <input type="radio" id="star1" name="rating" value="1" />
            <label
            className="full"
            htmlFor="star1"
            title="Sucks big time - 1 star"
            />
            <input type="radio" id="starhalf" name="rating" value="half" />
            <label
            className="half"
            htmlFor="starhalf"
            title="Sucks big time - 0.5 stars"
            />
        </fieldset>

        <span className="likes">109 likes</span>
    </div>
    {/* <!-- end details --> */}
  </HeroStyles>
);
export default PodcastInfoBoxHero;

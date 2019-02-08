import React, { Component } from 'react';
import styled from 'styled-components';

const DescriptionStyles = styled.div`
  bottom: 0px;
  height: 200px;
  font-size: 16px;
  line-height: 26px;
  color: #b1b0ac;

  .column1 {
    padding-left: 50px;
    padding-top: 120px;
    width: 220px;
    float: left;
    text-align: center;
  }

  .tag {
    background: white;
    border-radius: 10px;
    padding: 3px 8px;
    font-size: 14px;
    margin-right: 4px;
    line-height: 35px;
    cursor: pointer;
  }

  .tag:hover {
    background: #ddd;
  }

  .column2 {
    padding-left: 41px;
    padding-top: 30px;
    margin-left: 20px;
    float: left;

    p.descrabtion {
      color: #000000ab;
      direction: rtl;
      box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
      background-color: white;
      padding: 16px;
      border-radius: 8px;
    }
  }

  .avatars {
    margin-top: 23px;

    img {
      cursor: pointer;
    }

    img:hover {
      opacity: 0.6;
    }

    a:hover {
      text-decoration: none;
    }
  }
`;

const PodcastInfoBoxDescription = ({ description, children }) => (
  <DescriptionStyles>
    <div className="column1">
      <span className="tag">action</span> <span className="tag">fantasy</span>
      <span className="tag">adventure</span>
    </div>
    <div className="column2">
      <p className="descrabtion">
        {
          // eslint-disable-next-line react/destructuring-assignment
          description
        }
        {/* <a href="#">read more</a> */}
      </p>

      {/* <div className="avatars">
        <a href="#" data-tooltip="Person 1" data-placement="top">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png"
            alt="avatar1"
          />
        </a>

        <a href="#" data-tooltip="Person 2" data-placement="top">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png"
            alt="avatar2"
          />
        </a>

        <a href="#" data-tooltip="Person 3" data-placement="top">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png"
            alt="avatar3"
          />
        </a>
      </div> */}

      {children}
    </div>
  </DescriptionStyles>
);
export default PodcastInfoBoxDescription;

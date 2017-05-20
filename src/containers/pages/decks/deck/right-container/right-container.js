import React from 'react';
import Comment from '../view/comment';
import Topbar from './topbar';
const RightContainer = ({currentDeck}) =>{

  return (
      <div className="container__page--inner container__page--right">
        <Topbar currentDeck={currentDeck}/>


        <div className="content">
          <div className="container__details">
            <div className="container__details--section container__details--description">
              <div className="section__header">
                <div className="line"></div>
                <h1>{currentDeck.title}</h1>
              </div>
              <div className="section__body">
                <div className="section__body--background">{currentDeck.description}</div>
              </div>
            </div>
            <div className="container__details--section container__details--comments">
              <div className="section__header">
                <div className="line"></div>
                <h1>104 comments</h1>
              </div>
              <div className="section__body">
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default RightContainer;
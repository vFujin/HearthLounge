import React, { Component } from 'react';
// import Select from 'react-select';

export class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Profile</h3>

          <ul>
            <li className="about">
              <div className="avatar"><img src="http://lorempixel.com/100/100/cats/" alt="cat"/></div>
              <div className="username">xx_Joe_xx</div>
              <label htmlFor="email">
                <input id="email" type="text" value="joe@placeholder.com"/>
              </label>
            </li>

            <li className="details">
              <h3><span>Details</span></h3>
              <label htmlFor="firstname">
                <p>First name:</p>
                <input id="firstname" type="text" value="Joe"/>
              </label>
              <label htmlFor="lastname">
                <p>Last name:</p>
                <input id="lastname" type="text" value="Smith"/>
              </label>
              <label htmlFor="gender">
                <p>Gender:</p>
                {/*<Select*/}
                    {/*placeholder="Mechaniki..."*/}
                    {/*value={this.props.mechanics}*/}
                    {/*options={mechanics}*/}
                    {/*onChange={this.props.handleInputFilter.bind(this, 'mechanics')}*/}
                {/*/>*/}
              </label>
              <div className="country">'Murica</div>
              <div className="signature">random text</div>
            </li>

            <li className="hearthstone">
              <h3><span>Hearthstone</span></h3>
              <label htmlFor="battletag">
                <span className="hs-icon icon-battlenet"></span>
                <input id="battletag" type="text" value="Placeholder#0000"/>
              </label>
              <label htmlFor="favourite-class">
                <p>Favourite class:</p>
                <span className="hs-icon icon-warlock"></span>
                <input id="favourite-class" type="text" value="Warlock"/>
              </label>
              <label htmlFor="region">
                <p>Region:</p>
                <input id="region" type="text" value="EU"/>
              </label>
            </li>

            <li className="social-media">
              <h3><span>Social Media</span></h3>
              <label htmlFor="facebook">
                <span className="hs-icon icon-facebook"></span>
                <input id="facebook" type="text" value="Placeholder"/>
              </label>
              <label htmlFor="twitter">
                <span className="hs-icon icon-twitter"></span>
                <input id="twitter" type="text" value="Placeholder"/>
              </label>
              <label htmlFor="twitch">
                <span className="hs-icon icon-twitch"></span>
                <input id="twitch" type="text" value="Placeholder"/>
              </label>
              <label htmlFor="youtube">
                <span className="hs-icon icon-youtube"></span>
                <input id="youtube" type="text" value="Placeholder"/>
              </label>
            </li>
          </ul>
          <button>Edit</button>
        </div>
    );
  }
}
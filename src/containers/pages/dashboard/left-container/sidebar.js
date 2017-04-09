import React, { Component } from 'react';
// import Select from 'react-select';

export class Sidebar extends Component {

  render() {
    console.log(this.props);
    return (
        <div className="sidebar">
          <h3 className="sidebar__header">Profile <button className="btn-pearl">Edit</button></h3>

          <ul className="sidebar__body">
            <li className="about">
              <div className="avatar"><img src="http://lorempixel.com/100/100/cats/" alt="cat"/></div>
              <div className="username">Joe</div>
            </li>

            <li className="details">
              <h3>Details</h3>
              <div>
                <label htmlFor="email">
                  <p>E-mail</p>
                  <input id="email" type="text" value="joe@placeholder.com"/>
                </label>
                {/*<label htmlfor="signature">Signature</label>*/}
                {/*<textarea id="signature" className="signature">random text</textarea>*/}
              </div>
            </li>

            <li className="hearthstone">
              <h3>Hearthstone</h3>
              <div>
                <label htmlFor="battletag">
                  <span className="hs-icon icon-battlenet"></span>
                  <input id="battletag" type="text" value="Placeholder#0000"/>
                </label>
                <label htmlFor="favourite-class">
                  <p>Favourite class:</p>
                  <span className="hs-icon icon-warlock"></span>
                  {/*<input id="favourite-class" type="text" value="Warlock"/>*/}
                </label>
                <label htmlFor="region">
                  <p>Region:</p>
                  <Select multiple={false}
                          style={{width: "100%"}}
                          placeholder="EU #1">
                    {options}
                  </Select>
                </label>
              </div>
            </li>

            <li className="social-media">
              <h3>Social Media</h3>
              <div>
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
              </div>
            </li>
          </ul>
        </div>
    );
  }
}
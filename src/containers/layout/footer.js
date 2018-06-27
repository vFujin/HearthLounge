import React from 'react';
import {Link} from 'react-router-dom';
import Icon from "../../components/icon";

const IconWithUrl = ({name, url, title}) => {
  return (
      <a href={url}
         target="_blank"
         rel="noopener noreferrer">
        <Icon name={name}
              tooltip={true}
              title={title}
              tooltipPlacement="top"/>
      </a>
  )
};

const Footer = () =>{
  // const path = pathname.split("/").splice(1).join(" > ");

  return (
        <footer>
            <div className="path"/>
            <div className="copyright">
              <div>
                <p>Hearth Lounge © 2018</p>
                <div>
                  <Link to="/terms-of-service">Terms</Link> & <Link to="/privacy-policy">Privacy</Link>
                </div>
              </div>
            </div>
            <div className="media">
              <IconWithUrl name="github" url="https://github.com/sbsrnt/HearthLounge" title="Contribute"/>
              <IconWithUrl name="twitch" url="https://www.twitch.tv/sbsrnt" title="development"/>
              {/*<IconWithUrl name="discord" url="https://discord.gg/fZgdKhV"/>*/}
              <Link to="/help">
                <Icon name="help"
                      tooltip={true}
                      tooltipPlacement="top"/>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import Tooltip from 'antd/lib/tooltip';
import {Link} from 'react-router-dom';
import Icon from "../../../../../../../components/icon";

const SocialMediaDetails = ({deckAuthor}) =>{
  const {username, facebook, twitter, twitch, youtube} = deckAuthor;

  const wrapper = (media, profile, affix = "com") =>{
    console.log(profile, media);
    return (
      <Link to={profile ? `https://www.${media}.${affix}/${profile}` :""} className={!profile ? "profile-not-defined" : undefined}>
        <Icon name={media} className={profile && `${media} active`}/>
      </Link>
    )
  };

  return (
    <Tooltip title={`${username}'s social media`} placement="bottom">
      <div className="social-media-wrapper">
        {wrapper("facebook", facebook)}
        {wrapper("twitter", twitter)}
        {wrapper("twitch", twitch, "tv")}
        {wrapper("youtube", youtube)}
      </div>
    </Tooltip>
  )
};

export default SocialMediaDetails;
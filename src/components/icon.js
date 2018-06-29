import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tooltip from 'antd/lib/tooltip';
import {supported_domains} from "../containers/pages/reddit/utils/posts";
import setToIconFormat from "../utils/set-to-icon-format";

const selectType = (
    iconName,
    title = null,
    className = '',
    type = null,
    tooltip = false,
    tooltipPlacement = "bottom",
    domain = null,
    linkFlairText = null,
    handleClick = null,
    id = null
    ) => {

  const validateMode = iconName === "standard" ? "mammoth" : iconName;

  const iconWrapper = (icon) => {
    let iconTitle = title ? title : iconName;
    return (
        <Tooltip title={_.capitalize(iconTitle)}
                 placement={tooltipPlacement}
                 arrowPointAtCenter={true}>
          {icon}
        </Tooltip>
    )
  };

  const redditDomainIcons = (domain) => {
    //todo: refactor
    const flairText = linkFlairText && linkFlairText.toLowerCase();
    const self = domain.includes(supported_domains[2]);
    const img = domain.includes(supported_domains[7]) || domain.includes(supported_domains[8]);

    const discussionFlairTexts = ["fanmade content", "discussion", "news"];

    if(!linkFlairText){
      if (domain.includes(supported_domains[0])) return icon("battlenet");
      else if (domain.includes(supported_domains[1]) || domain.includes(supported_domains[4])) return icon("youtube");
      else if (self) return icon("bubbles2");
      else if (domain.includes(supported_domains[3])) return icon("twitter");
      else if(domain.includes(supported_domains[5])) return icon("twitch");
      else if(img) return icon("image");
    } else {

      if (domain.includes(supported_domains[0])) return icon("battlenet");
      else if (domain.includes(supported_domains[1]) || domain.includes(supported_domains[4])) return icon("youtube");
      else if (self && discussionFlairTexts.includes(flairText)) return icon("bubbles2");

      else if (self && (flairText === "tournament")) return icon("trophy");
      else if (flairText === "competitive") return icon("trophy");
      else if (domain.includes(supported_domains[3])) return icon("twitter");
      else if (domain.includes(supported_domains[5])) return icon("twitch");
      else if (img) return icon("image");
      else return icon("redirect");
    }
  };

  let icon = (name) => {
    let icon = <span id={id} onClick={handleClick} className={`hs-icon icon-${_.toLower(name)} ${className}`}/>;
    return tooltip ? iconWrapper(icon) : icon;
  };

  let manaIcon = (name) => {
    let icon = <span id={id} onClick={handleClick} className={`hs-icon icon-mana-${_.toLower(name)} ${className}`}/>;
    return tooltip ? iconWrapper(icon) : icon;
  };

  let rarityIcon = () => {
    let icon = <span id={id} onClick={handleClick} className={`hs-icon icon-rarity active-without-background ${_.toLower(className)}`}/>;
    return tooltip ? iconWrapper(icon) : icon;
  };

  switch(type){
    case 'set': return icon(setToIconFormat(iconName));
    case 'mode': return icon(validateMode);
    case 'mana': return manaIcon(iconName);
    case 'rarity': return rarityIcon(iconName);
    case 'reddit': return redditDomainIcons(domain);
    default: return icon(iconName);
  }
};

const Icon = ({name, title, className, type, tooltip, tooltipPlacement, domain, linkFlairText, handleClick, id}) => selectType(name, title, className, type, tooltip, tooltipPlacement, domain, linkFlairText, handleClick, id);

export default Icon;

Icon.propTypes = {
  name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]),
  title: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  tooltip: PropTypes.bool,
  tooltipPlacement: PropTypes.string,
  domain: PropTypes.string,
  linkFlairText: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string
};

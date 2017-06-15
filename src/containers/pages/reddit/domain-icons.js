import React from 'react';
import PropTypes from 'prop-types';
import {supported_domains} from '../../../utils/reddit/posts';

const Icon = ({link_flair_text, domain }) => {
  if(link_flair_text !== null) {
    const iconTemplate = (icon) => <span className={`hs hs-icon icon-${icon}`}></span>;

    let flair_text = link_flair_text.toLowerCase();
    let self = domain.includes(supported_domains[2]);

    if (domain.includes(supported_domains[0]))
      return iconTemplate("battlenet");
    if (domain.includes(supported_domains[1]))
      return iconTemplate("youtube");
    if (self && flair_text !== "tournament")
      return iconTemplate("bubbles2");
    if (self && flair_text === "tournament")
      return iconTemplate("trophy");
    if (domain !== supported_domains[2]) {
      let icon = domain.replace(/\.com|clips\.|\.tv/g, "").toLowerCase();
      return iconTemplate(icon);
    }
  }
};

export default Icon;
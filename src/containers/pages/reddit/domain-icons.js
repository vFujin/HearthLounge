import React from 'react';

export const supported_domains = ["battle.net", "youtu.be", "self.hearthstone", "twitter.com","youtube.com", "clips.twitch.tv", "reddit.com"];
export const supported_domain_icons = ["battlenet", "youtube", "bubbles2", "twitter", "twitch", "reddit"];

const Icon = (post) => {
    let domain = post.domain;
    let flair_text = post.link_flair_text.toLowerCase();
    let self = domain.includes(supported_domains[2]);

    const iconTemplate = (icon) => <span className={`hs hs-icon icon-${icon}`}></span>;

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
};

export default Icon;
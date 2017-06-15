export const supported_domains = ["battle.net", "youtu.be", "self.hearthstone", "twitter.com","youtube.com", "clips.twitch.tv", "reddit.com"];
export const supported_domain_icons = ["battlenet", "youtube", "bubbles2", "twitter", "twitch", "reddit"];

export const checkIfStickied = (post) =>{
  const {stickied} = post;
  return stickied === true ? "hunter active" : stickied;
};

export const checkIfBlizzardPost = post =>{
  const {link_flair_text} = post;

  if(link_flair_text !== null) {
    let loweredFlairText= link_flair_text.toLowerCase();
    return loweredFlairText === "blizzard" ? "mage blizzard-official" : loweredFlairText;
  }
};

export const stripRedditURL = url => {
  let split = url.split('/');
  return split[split.length - 2];
};

export const stripDomains = post => {
  const {domain} = post;

  //Battle.net
  if(domain.includes(supported_domains[0]))
    return domain.split('.')[1]+"net";

  //Youtu.be
  else if(domain ===  supported_domains[1]){
    return domain.replace(supported_domains[1], "youtube");
  }

  else if(supported_domains.slice(2, 7).includes(domain)){
    return domain.replace(/self\.|\.com|clips\.|\.tv/g, "");
  }

  else return "default";
};

export const checkDomain = post =>{
  const {id, permalink, domain, url} = post;
  let selfURL = `/reddit/post/${id}/${stripRedditURL(permalink)}`;

  switch (domain) {
    case supported_domains[1]:
    case supported_domains[2]:
    case supported_domains[4]:
    case supported_domains[5]:
    case supported_domains[6]: return selfURL;
    case supported_domains[3]:
    default: return url;
  }
};

export const checkTopbarIconFilters = (location, post) =>{
  if(location) {
    let query = location.query.domain;
    if (query !== undefined) {
      return stripDomains(post) === query ? stripDomains(post) : "display-none";
    }
  }
};
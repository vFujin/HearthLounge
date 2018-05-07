export const supported_domains = ["battle.net", "youtu.be", "self.hearthstone", "twitter.com","youtube.com", "clips.twitch.tv", "reddit.com", "i.redd.it", "i.imgur.com"];

export const supportedDomains = [
  {
    name: "battle.net",
    icon: "battlenet"
  },
  {
    name: ["youtube", "youtu.be"],
    icon: "youtube"
  },
  {
    name: "self.hearthstone",
    icon: "bubbles2",
  },
  {
    name: "twitter.com",
    icon: "twitter"
  },
  {
    name: "clips.twitch.tv",
    icon: "twitch"
  },
  {
    name: ["i.redd.it", "i.imgur.com"],
    icon: "image"
  },
];

export const categories = [
  {
    name: "hot",
    icon: "fire"
  },
  {
    name: "new",
    icon: "greed"
  },
  {
    name: "rising",
    icon: "stats-dots"
  },
  {
    name: "top",
    icon: "rank-8"
  },
  {
    name: "controversial",
    icon: "overload"
  }
];

export const checkIfStickied = (post) =>{
  const {stickied} = post;
  return stickied === true ? "hunter active stickied" : stickied;
};

export const checkIfBlizzardPost = post =>{
  const {link_flair_text} = post;

  if(link_flair_text !== null) {
    let loweredFlairText= link_flair_text.toLowerCase();
    return loweredFlairText === "blizzard" ? "mage blizzard-official" : loweredFlairText;
  }
};

export const stripDomains = (post) => {
  const {domain} = post;

  if(post && domain) {
    //Battle.net
    if (domain.includes(supported_domains[0])) {
      return domain.split('.')[1] + "net";
    }

    //Youtu.be
    else if (domain === supported_domains[1]) {
      return domain.replace(supported_domains[1], "youtube");
    }

    else if (supported_domains.slice(2, 7).includes(domain)) {
      return domain.replace(/self\.|\.com|clips\.|\.tv/g, "");
    }

    else return "default";
  }
};
import _ from "lodash";

const setToIconFormat = (extension) => {
  const kebabCasedExtension = _.kebabCase(extension);

  switch(kebabCasedExtension){
    case "classic": return "hs-logo";
    case "curse-of-naxxramas": return "naxxramas";
    case "one-night-in-karazhan": return "karazhan";
    case "journey-to-un-goro": return "journey-to-ungoro";
    default: return kebabCasedExtension;
  }
};

export default setToIconFormat;

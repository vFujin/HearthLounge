import React from 'react';
import ContentInformationProtection from "./information-protection/content";
import ContentCookies from "./cookies/cookies";
import ContentThirdPartyServices from "./third-party-services/content";
import ContentGoogle from "./google/content";
import ContentCalOPPA from "./caloppa/content";
import ContentDoNotTrack from "./do-not-track/content";
import ContentCOPPA from "./coppa/content";
import ContentFairInformationPracticies from "./fair-information-practicies/content";

const Content = () => {
  return (
      <ul className="content default-style">
        <ContentInformationProtection />
        <ContentCookies />
        <ContentThirdPartyServices />
        <ContentGoogle />
        <ContentCalOPPA />
        <ContentDoNotTrack />
        <ContentCOPPA />
        <ContentFairInformationPracticies />
      </ul>
  )
};

export default Content;
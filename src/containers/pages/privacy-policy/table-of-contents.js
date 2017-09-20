import React from 'react';
import ToCInformationProtection from "./information-protection/table-of-content";
import ToCCookies from "./cookies/table-of-content";
import ToCThirdPartyServices from "./third-party-services/table-of-content";
import ToCGoogle from "./google/table-of-content";
import ToCCalOPPA from "./caloppa/table-of-content";
import ToCDoNotTrack from "./do-not-track/table-of-content";
import ToCCOPPA from "./coppa/table-of-content";
import ToCFairInformationPracticies from "./fair-information-practicies/table-of-content";

const TableOfContents = () =>{
  return (
      <ul className="table-of-contents">
        <ToCInformationProtection />
        <ToCCookies />
        <ToCThirdPartyServices />
        <ToCGoogle />
        <ToCCalOPPA />
        <ToCDoNotTrack />
        <ToCCOPPA />
        <ToCFairInformationPracticies />
      </ul>
  )
};

export default TableOfContents;
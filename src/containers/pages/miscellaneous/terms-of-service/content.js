import React from 'react';
import ContentTerms from "./content/terms";
import AccessToService from "./content/access-to-service";
import YourAccount from "./content/your-account";
import ResponsibilityOfUsers from "./content/responsibility-of-users";
import ResponsibilityOfVisitors from "./content/responsibility-of-visitors";
import ContentPostedOnOtherWebsites from "./content/content-posted-on-other-websites";
import IntellectualProperty from "./content/intellectual-property";
import DMCA from "./content/dmca";
import Feedback from "./content/feedback";
import Termination from "./content/termination";
import DisclaimerOfWarranties from "./content/disclaimer-of-warranties";
import LimitationOfLiability from "./content/limitation-of-liability";
import GeneralRepresentationAndWarranty from "./content/general-representation-and-warranty";
import Indemnification from "./content/indemnification";
import Translation from "./content/translation";
import ToSMiscellaneous from "./content/miscellaneous";
import TermsOfServiceLicense from "./content/terms-of-service-license";

const Content = () => {
  return (
    <ul className="content default-style">
      <ContentTerms />
      <AccessToService />
      <YourAccount />
      <ResponsibilityOfUsers />
      <ResponsibilityOfVisitors />
      <ContentPostedOnOtherWebsites />
      <IntellectualProperty />
      <DMCA />
      <Feedback />
      <Termination />
      <DisclaimerOfWarranties />
      <LimitationOfLiability />
      <GeneralRepresentationAndWarranty />
      <Indemnification />
      <Translation />
      <ToSMiscellaneous />
      <TermsOfServiceLicense />
    </ul>
  )
};

export default Content;
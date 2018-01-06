import React from 'react';
import {Link} from 'react-router-dom';
const Terms = () => {
  return (
    <li>
      <h3 id="terms">Terms</h3>
      <p>
        These Terms of Service ("Terms"), which include and hereby incorporate the <Link to="/privacy-policy">Privacy
        Policy ("Privacy Policy")</Link>, are a legal agreement between HearthLounge, LLC, and its related companies and
        affiliates (the "Company", "HearthLounge" or "we") and you ("you"). By using or accessing HearthLounge.io (the "Site")
        or any other websites, APIs, applications, or services offered by the Company, which are collectively referred
        to as the "Service," you agree:
      </p>
      <ul>
        <li>
          that you are 13 years of age or older
        </li>
        <li>
          if you are the age of majority in your jurisdiction or over, that you have read, understood, and accept to
          be bound by the Terms
        </li>
        <li>
          if you are between 13 and the age of majority in your jurisdiction, that your legal guardian has reviewed and
          agrees to these Terms
        </li>
      </ul>
      <p>
        The Company reserves the right, in its sole discretion, to modify or revise these Terms at any time, and you
        agree to be bound by such modifications or revisions. Any such change or modification will be effective immediately
        upon posting on the Service, and your continued use of the Service after any changes or modifications to these
        Terms are posted will constitute your acceptance of, and agreement to, such changes or modifications. If you
        object to any change or modification, your sole recourse shall be to cease using the Service.
      </p>
      <p>
        Please read these Terms carefully before accessing or using our Services. By accessing or using any part of our
        services, you agree to become bound by the Terms set forth herein. If you do not agree to all the terms and conditions
        of this agreement, then you may not access or use the Service.
      </p>
    </li>
  )
};

export default Terms;
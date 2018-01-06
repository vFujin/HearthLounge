import React from 'react';
import {Link} from 'react-router-dom';

const TermsOfServiceLicense = () => {
  return (
    <li>
      <h3 id="temrs-of-service-license">Terms of Service License</h3>
      <p>
        These Terms of Service were adapted from the <Link to="https://en.wordpress.com/tos/" target="_blank">Automattic Terms of Service</Link>, which
        are made available under a <Link to="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC-BY-SA 4.0 license</Link>.
      </p>
      <p>
        We thank the folks at Automattic for this initiative, and license the HearthLounge Terms of Service under the same CC-BY-SA 4.0 license.
        This means you may adapt these Terms of Service to your service and use them for your own service, under that same license
      </p>
    </li>
  )
};

export default TermsOfServiceLicense;
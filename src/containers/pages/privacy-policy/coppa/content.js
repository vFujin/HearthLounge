import React from 'react';

const ContentCOPPA = () => {
  return (
      <li>
        <h3 id="#coppa">COPPA (Children Online Privacy Protection Act)</h3>
        <p>
          When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.
        </p>
        <ul>
          <li>
            <h4 id="child-information">Child information</h4>
            <ul>
              <li>We do not collect information from children under 13</li>
              <li>We do not let third-parties, including ad networks or plug-ins collect PII from children under 13</li>
            </ul>
          </li>
          <li>
            <h4 id="child-information-deletion">Removing your child's information</h4>
            <p>We adhere to the following COPPA tenants:</p>
            <ul>
              <li>Parents can review, delete, manage or refuse with whom their child's information is shared through contacting us directly.</li>
            </ul>
          </li>
        </ul>
      </li>
  )
};

export default ContentCOPPA;
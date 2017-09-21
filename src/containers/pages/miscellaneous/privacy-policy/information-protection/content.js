import React from 'react';

const ContentInformationProtection = () => {
  return (
      <li>
        <h3 id="information-protection">Information Protection</h3>
        <ul>
          <li>
            <h4 id="information-about">What personal information do we collect from the people that visit our website?</h4>
            <p>When ordering or registering on our site, as appropriate, you may be asked to enter your email address or
              other details to help you with your experience.</p>
          </li>
          <li>
            <h4 id="information-collection">When do we collect information?</h4>
            <p>We collect information from you when you register on our site or enter information on our site.</p>
          </li>
          <li>
            <h4 id="information-usage">How do we use your information?</h4>
            <p>We may use the information we collect from you when you register, make a purchase, respond to a survey, surf the website, or use certain other site features in the following ways:</p>
            <ul>
              <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
              <li>To improve our website in order to better serve you.</li>
            </ul>
          </li>
          <li>
            <h4 id="information-confidentiality">How do we protect your information?</h4>
            <ul>
              <li>We do not use vulnerability scanning and/or scanning to PCI standards.</li>
              <li>An external PCI compliant payment gateway handles all CC transactions.</li>
              <li>We use regular Malware Scanning.</li>
              <li>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</li>
              <li>We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.</li>
              <li>All transactions are processed through a gateway provider and are not stored or processed on our servers.</li>
            </ul>
          </li>
        </ul>
      </li>
  )
};

export default ContentInformationProtection;
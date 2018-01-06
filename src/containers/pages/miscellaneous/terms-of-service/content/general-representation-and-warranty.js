import React from 'react';
import {Link} from 'react-router-dom';

const GeneralRepresentationAndWarranty = () => {
  return (
    <li>
      <h3 id="general-representation-and-warranty">General Representation and Warranty</h3>
      <p>
        You represent and warrant that:
      </p>
      <ul>
        <li>
          your use of our Services will be in strict accordance with the HearthLounge <Link to="/privacy-policy">Privacy Policy</Link>,
          with the Terms set forth in this agreement, and with all applicable laws and regulations (including without limitation any
          local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content,
          and including all applicable laws regarding the transmission of technical data exported from the United States or the country in which you reside)
        </li>
        <li>
          your use of our Services will not infringe or misappropriate the intellectual property rights of any third party.
        </li>
      </ul>
    </li>
  )
};

export default GeneralRepresentationAndWarranty;
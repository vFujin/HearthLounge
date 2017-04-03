import React from 'react';
import Navbar from './layout/navbar';
import {Footer} from './layout/footer';

const Main = ({children, location, user}) => {
  return (
      <div id="container">
        <Navbar url={location.pathname} user={user}/>
        {children}
        <Footer/>
      </div>
  );
};

Main.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object,
  user: React.PropTypes.string
};
export default Main;
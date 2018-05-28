import React from 'react';
import Loader from "../diamond/loader";

const PageLoader = ({isLoading, error}) => {

  if (isLoading) {
    return <Loader/>;
  }

  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

export default PageLoader;
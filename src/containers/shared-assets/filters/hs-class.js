import React from 'react';
import {Link} from 'react-router';
import {hs_class} from '../../../data/filters';

const HsClassFilter = (props) => {
  const {align, page, query} = props;

  const queries = el =>{
    return Object.assign({}, query, {'class': el})
  };

  function listClasses() {
    return (
        hs_class.map((hs_class, index) =>
            <li key={index}>
              <Link to={{pathname: 'cards', query: queries(hs_class.url)}}>
                <span className={`hs-icon ${hs_class.name} icon-${hs_class.url} ${query.class === hs_class.url ? 'active' : ''}`}></span>
                <div className="tooltip">
                  <div className="caret-up"></div>
                  <p>{hs_class.name}</p>
                </div>
              </Link>
            </li>
        ))
  }

  return (
      <ul className={`topbar-${align} hs-class-filter`}>
        {listClasses(page)}
      </ul>
  );
};

HsClassFilter.propTypes = {
  align: React.PropTypes.string,
  page: React.PropTypes.string,
  query: React.PropTypes.object
};

export default HsClassFilter;
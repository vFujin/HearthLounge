import React from 'react';
import {Link} from 'react-router';
import {hs_class} from '../../../data/filters';

const HsClassFilter = (props) => {
  const {align, page} = props;

  function listClasses() {
    return (
        hs_class.map((hs_class, index) =>
            <li key={index}>
              <Link to={{pathname: 'cards', query: Object.assign({}, props.queries, {hs_class: hs_class.url})}}>
                <span className={`hs-icon ${hs_class.name} icon-${hs_class.url}`}></span>
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

export default HsClassFilter;

HsClassFilter.propTypes = {
  align: React.PropTypes.string,
  page: React.PropTypes.string
};
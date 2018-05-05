import React, { Component } from 'react';
import { connect } from 'react-redux';
import {supportedDomains} from "../../utils/posts";
import {selectRedditDomain} from "../../../../../redux/reddit/posts/actions";
import Icon from "../../../../../components/icon";

class TopbarLeft extends Component {
  handleDomainClick = (e, domainObj) => {
    const {selectRedditDomain, domain} = this.props;
    const selectedDomain = e.currentTarget.id;

    if (selectedDomain !== domain.active) {
      selectRedditDomain({active: selectedDomain, obj: domainObj});
    }

    if(selectedDomain === domain.active) {
      selectRedditDomain({active: "", obj: {}});
    }
  };

  render() {
    const {domain} = this.props;

    return (
      <ul className="topbar-left">
        {supportedDomains.map((supportedDomain, i) =>
          <li key={i} id={supportedDomain.icon} onClick={(e) => this.handleDomainClick(e, supportedDomain)}>
            <Icon name={supportedDomain.icon}
                  domain={supportedDomain.name}
                  type="reddit"
                  className={`${supportedDomain.icon} ${supportedDomain.icon === domain.active ? "active" : ""}`}/>
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { domain } = state.redditPosts.posts;
  return { domain };
};

const mapDispatchToProps = dispatch => {
  return {
    selectRedditDomain: domain => dispatch(selectRedditDomain(domain)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopbarLeft);
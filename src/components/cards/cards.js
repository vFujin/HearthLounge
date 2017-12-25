import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Card from "./assets/card";
import Loader from "../loaders/loader";
import {lazyloadCards} from "./utils/lazyload";
import IconFilter from "../../containers/shared-assets/filters/icon-filter";
import {mapCards} from "./utils/map-cards";
import Topbar from "./assets/topbar";

class ComponentCards extends Component {
  constructor(props){
    super(props);

    this.state = {
      loadedCards: 40,
      mode: props.mode || null,
      filters: {}
    }
  }

  componentDidMount() {
    lazyloadCards('.content', loadedCards => this.setState({loadedCards}));
  }

  handleFilterClick = (e) =>{
    document.querySelector('.content').scrollTop = 0;
    const filter = e.currentTarget.dataset.filter;
    const value = _.startCase(e.currentTarget.id);
    this.setState({
      filters: {
        ...this.state.filters,
        [filter]: value
      },
      loadedCards: 40
    });
  };

  render() {
    const {filters} = this.props;
    return (
      <div className="container__page container__page--twoSided cards">
        <div className="container__page--inner  container__page--left">
          <h3 className="sidebar__header">Filters</h3>
          {/*<Sidebar cards={cards}*/}
          {/*query={query}/>*/}
        </div>
        <div className="container__page--inner container__page--right">
          <Topbar filters={this.props} handleFilterClick={this.handleFilterClick}/>
          <div className="content">
            <ul className="container__cards">
              {mapCards(this.props, this.state)}
            </ul>
          </div>

        </div>
      </div>
    )
  }

}

const mapStateToProps = state =>{
  const {info} = state;
  const {cards} = state.cards;
  return {cards, info};
};

export default connect(mapStateToProps, null)(ComponentCards);

ComponentCards.propTypes = {
  mode: PropTypes.string.isRequired
};
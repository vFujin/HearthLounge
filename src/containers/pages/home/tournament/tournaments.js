import React, {Component} from 'react';
import { connect } from "react-redux";
import {fetchUpcomingTournamentsRequest} from "../../../../redux/tournaments/upcoming/actions";
import Loader from "../../../../components/loaders/diamond/loader";
import Tournament from "./tournament";

class TournamentsBlock extends Component {
  componentDidMount() {
    this.props.fetchUpcomingTournaments();
  }

  mapTournaments = () => {
    const {items} = this.props;

    if(items) {
      return items.map(tournament => <Tournament key={tournament.id} tournament={tournament}/>)
    }
  };

  render() {
    const {loading} = this.props;

    return loading ? <Loader /> : (
      <ul>
        {this.mapTournaments()}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { items, loading } = state.tournaments.upcomingTournaments;
  return { items, loading };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchUpcomingTournaments: () => dispatch(fetchUpcomingTournamentsRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentsBlock);

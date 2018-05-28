import React, { Component } from 'react';
import { connect } from "react-redux";
import Calendar from "../../../components/calendar/calendar";
import {fetchTournamentsRequest} from "../../../redux/tournaments/actions";

class Tournaments extends Component {
  componentDidMount(){
    document.title = "Tournaments";

    this.props.fetchTournaments();
  }

  render() {
    return (
        <div className="container__page container__page--twoSided tournaments">
          <div className="tournaments__sidebar">
            <div className="tournaments__sidebar--header">
              Today's tournaments
            </div>
            <ul className="tournaments__sidebar--events">

            </ul>
          </div>
          <div className="tournaments__calendar">
            <Calendar events={this.props.items} loading={this.props.loading}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const { items, loading } = state.tournaments;
  return { items, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTournaments: () => dispatch(fetchTournamentsRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);

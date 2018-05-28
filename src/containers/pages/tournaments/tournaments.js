import React, { Component } from 'react';
import { connect } from "react-redux";
import Calendar from "../../../components/calendar/content/calendar";
import {fetchTournamentsRequest} from "../../../redux/tournaments/actions";

class Tournaments extends Component {
  componentDidMount() {
    document.title = "Tournaments";

    this.props.fetchTournaments();
  }

  render() {
    return (
      <div className="container__page tournaments">
        <Calendar events={this.props.items}
                  loading={this.props.loading}/>
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

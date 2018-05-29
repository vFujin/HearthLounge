import React, {PureComponent} from "react";
import dateFns from "date-fns";
import PropTypes from 'prop-types';
import CalendarSidebar from "../sidebar/sidebar";
import CalendarBody from "./layout/body";
import CalendarDays from "./layout/days";
import CalendarHeader from "./layout/header";
import {filterEvents} from "../utils/filter-events";
import '../styles.css';
import '../mobile-styles.css';

class Calendar extends PureComponent {

  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    selectedDateEvents: [],
    mobileBreakpoint: 815,
    mobileActiveDayEventsView: false
  };

  handleDateClick = (day, events) => {
    this.setState({
      selectedDate: day,
      selectedDateEvents: events,
      mobileActiveDayEventsView: true
    });
  };

  handleMobileActiveDayEventsViewCloseClick = () => {
    this.setState({
      mobileActiveDayEventsView: false
    })
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };


  render() {
    const {currentMonth, selectedDate, selectedDateEvents, mobileBreakpoint, mobileActiveDayEventsView} = this.state;
    const {events, loading} = this.props;

    return (
      <div className={`calendar ${mobileActiveDayEventsView ? "day-events-active" : undefined}`}>
        <CalendarSidebar selectedDate={selectedDate}
                         loading={loading}
                         handleMobileActiveDayEventsViewCloseClick={this.handleMobileActiveDayEventsViewCloseClick}
                         selectedDateEvents={filterEvents(events, selectedDate) || selectedDateEvents}/>
        <div className="calendar__content">
          <CalendarHeader currentMonth={currentMonth}
                          prevMonth={this.prevMonth}
                          nextMonth={this.nextMonth}/>
          <CalendarDays currentMonth={currentMonth}
                        mobileBreakpoint={mobileBreakpoint}/>
          <CalendarBody currentMonth={currentMonth}
                        selectedDate={selectedDate}
                        events={events}
                        handleDateClick={this.handleDateClick}/>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool
};

export default Calendar;
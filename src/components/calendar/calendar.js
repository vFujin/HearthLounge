import React, {PureComponent} from "react";
import dateFns from "date-fns";
import CalendarBody from "./layout/body";
import CalendarDays from "./layout/days";
import CalendarHeader from "./layout/header";
import './styles.css';

class Calendar extends PureComponent {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  handleDateClick = day => {
    this.setState({
      selectedDate: day
    });
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
    const {currentMonth, selectedDate} = this.state;

    return (
      <div className="calendar">
        <CalendarHeader currentMonth={currentMonth}
                        prevMonth={this.prevMonth}
                        nextMonth={this.nextMonth}/>
        <CalendarDays currentMonth={currentMonth}/>
        <CalendarBody currentMonth={currentMonth}
                      selectedDate={selectedDate}
                      handleDateClick={this.handleDateClick}/>
      </div>
    );
  }
}

export default Calendar;
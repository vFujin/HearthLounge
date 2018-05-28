import React, {PureComponent} from "react";
import dateFns from "date-fns";
import './styles.css';
import CalendarBody from "./layout/body";

class Calendar extends PureComponent {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="calendar__header calendar__row">
        <div className="calendar__col calendar__col--center">
          <div className="icon" onClick={this.prevMonth}>
            ❮
          </div>
        </div>
        <div className="calendar__col calendar__col--center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="calendar__col calendar__col--center" onClick={this.nextMonth}>
          <div className="icon">❯</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="calendar__col calendar__col--center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="calendar__days calendar__row">{days}</div>;
  }

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
        {this.renderHeader()}
        {this.renderDays()}
        <CalendarBody currentMonth={currentMonth}
                      selectedDate={selectedDate}
                      handleDateClick={this.handleDateClick}/>
      </div>
    );
  }
}

export default Calendar;
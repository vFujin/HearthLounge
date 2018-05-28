import startOfDay from 'date-fns/start_of_day';
import endOfDay from 'date-fns/end_of_day';
import _ from "lodash";

export const filterEvents = (events, selectedDate) => {
  const dayStart = +startOfDay(selectedDate);
  const dayEnd = +endOfDay(selectedDate);

  if(events){
    return events.filter(event => _.inRange(+new Date(event.start.dateTime), dayStart, dayEnd) && event);
  }
};
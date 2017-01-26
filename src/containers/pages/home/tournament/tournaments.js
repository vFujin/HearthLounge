import React, { Component } from 'react';
import { Link } from 'react-router';
export class TournamentsBlock extends Component {
  render() {
    return (
        <li className={'home__block tournaments block-width-1'}>
          <Link to={'/turnieje'}>
            <div className="header">Turnieje</div>
          </Link>
          <iframe src="https://www.google.com/calendar/embed?src=kvaverirkumds90dnen1jlmmq0dcvgom%40import.calendar.google.com&ctz=America/New_York"
                  style={{border: 'none', margin: '10px'}}
                  width="95%"
                  height="82%"
                  frameborder="0"
                  scrolling="no"></iframe>
        </li>
    );
  }
}
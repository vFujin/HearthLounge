import React from 'react';
import _ from 'lodash';

const TableOfContents = () =>{

  const ListIem = ({item}) =>{
    const kebabCasedItem = _.kebabCase(item);

    return (
      <li>
        <h3><a href={`#${kebabCasedItem}`}>{item}</a></h3>
      </li>
    )
  };

  return (
    <ul className="table-of-contents default-style">
      <ListIem item="Terms"/>
      <ListIem item="Access to Service"/>
      <ListIem item="Your Account"/>
      <ListIem item="Responsibility of Users"/>
      <ListIem item="Responsibility of Visitors"/>
      <ListIem item="Content Posted on Other Websites"/>
      <ListIem item="Intellectual Property"/>
      <ListIem item="Digital Milennium Copyright Act"/>
      <ListIem item="Feedback"/>
      <ListIem item="Termination"/>
      <ListIem item="Disclaimer of Warranties"/>
      <ListIem item="Limitation of Liability"/>
      <ListIem item="General Representation and Warranty"/>
      <ListIem item="Indemnification"/>
      <ListIem item="Translation"/>
      <ListIem item="Miscellaneous"/>
      <ListIem item="Terms of Service License"/>
    </ul>
  )
};

export default TableOfContents;
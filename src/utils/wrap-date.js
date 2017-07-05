import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';

/**
 * Writes date when created (https://date-fns.org/docs/format#examples)
 * @param created
 * @param createdFormatted
 * @param placement
 * @returns {XML}
 */
export const notEdited = (created, createdFormatted, placement) =>{
  return (
      <Tooltip title={`created ${createdFormatted}`} placement={placement || "bottom"}>
        {created}
      </Tooltip>
  )
};

/**
 * Adds '*' symbol to date when post was edited
 *
 * @param {number} created - The time of creation in UTC epoch-second format. (passing created_utc if it's from reddit json)
 * @param {number} createdFormatted - Formatted date into `DD-MM-YYYY HH:mm`
 * @param {special} edited - False if not edited, edit date in UTC epoch-seconds otherwise
 * @param {number} editedFormatted - Formatted date into `DD-MM-YYYY HH:mm`
 * @param {string} placement - Position of the tooltip (https://ant.design/components/tooltip/#Common-API)
 * @returns {XML}
 */
export const editedWrapper = (created, createdFormatted, edited, editedFormatted, placement) =>{
  return (
      <p>
        <Tooltip title={`created ${createdFormatted}`} placement={placement || "bottom"}>{created}</Tooltip>
        <Tooltip title={`last edited ${editedFormatted}`} placement={placement || "bottom"}>{' *'}</Tooltip>
      </p>
  )
};

/**
 * Converts time from miliseconds to seconds
 *
 * @param {number} time
 * @returns {number}
 */
export const toSeconds = (time) =>{
  return time * 1000;
};

/**
 * Wraps element into ant-design Tooltip to give more detailed date on hover.
 * @example Without any action: 42 minutes ago
 *          On hover: 01/07/2017 13:37
 *
 * @param {number} created - The time of creation in UTC epoch-second format. (passing created_utc if it's from reddit json)
 * @param {special} edited - False if not edited, edit date in UTC epoch-seconds otherwise
 * @param {string} placement - Position of the tooltip (https://ant.design/components/tooltip/#Common-API)
 * @returns {String}
 */
export const wrapDate = (created, edited, placement) => {
  const options = {includeSeconds: true, addSuffix: true};
  const dateFormat = 'DD-MM-YYYY HH:mm';

  let createdFormatted = format(toSeconds(created), dateFormat);
  let timeDifference = distanceInWordsToNow(toSeconds(created), options);
  let editedTimeFormatted = format(toSeconds(edited), dateFormat);

  return (
      edited === false
          ? notEdited(timeDifference, createdFormatted, placement)
          : editedWrapper(timeDifference, createdFormatted, toSeconds(edited), editedTimeFormatted, placement)
  )
};

wrapDate.propTypes = {
  created: PropTypes.number.isRequired,
  edited: PropTypes.number.isRequired,
  placement: PropTypes.string
};
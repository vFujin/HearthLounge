import React from 'react';

export const events = {

  showTooltip: function (e){
      let target = e.target.id;
      return this.setState({
        [`${target}_tooltip`]: true
      });
    },
  hideTooltip: function(e){
      let target = e.target.id;
      return this.setState({
        [`${target}_tooltip`]: false
      })
    },
  handleCheckboxClick: function (key){
    return this.setState({
      [key]: this.state[key] === false
    })
  }
};
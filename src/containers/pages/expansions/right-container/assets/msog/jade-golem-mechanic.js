import React, { Component } from 'react';
const JadeGolemMechanic = (props) =>{

    return (
        <div className={`jade-golem-mechanic ${(props.topbarActiveTabUrl === 'jade-golem-mechanic' && props.selectedExpansionClass === 'mean-streets-of-gadgetzan') && 'active'}-view`}>
          jade golem
        </div>
    );
};

export default JadeGolemMechanic;
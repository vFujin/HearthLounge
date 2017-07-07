import React, { Component } from 'react';
const MulticlassCards = (props) =>{
    return (
        <div className={`multiclass-cards ${(props.topbarActiveTabUrl === 'multiclass-cards' && props.selectedExpansionClass === 'mean-streets-of-gadgetzan') && 'active'}-view`}>
          multiclasstarg
        </div>
    );
}

export default MulticlassCards;
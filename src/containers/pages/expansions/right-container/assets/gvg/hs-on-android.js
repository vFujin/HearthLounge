import React from 'react';
const HearthstoneOnAndroid = (props) =>{
    return (
        <div className={`hs-android ${(props.topbarActiveTabUrl === 'hs-android' && props.selectedExpansionClass === 'goblins-vs-gnomes') && 'active'}-view`}>
          hs android
        </div>
    );
};

export default HearthstoneOnAndroid;
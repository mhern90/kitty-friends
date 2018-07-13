import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', borderTop: '1px solid #888', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
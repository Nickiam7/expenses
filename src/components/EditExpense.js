import React from 'react';

// const EditExpensePage = () => (
//     <div>
//         <h2>Edit!</h2>
//         Edit this expense
//     </div>
// );

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
            <h2>Edit!</h2>
            Edit expense {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;
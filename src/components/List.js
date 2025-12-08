import React from 'react';
function List() {
    const arr = ["Apple", "Banana", "Cherry"];
    return(
        <ul>
            {arr.map((item) => (
                <li >{item}</li>
            ))}
        </ul>
    );
}
export default List;
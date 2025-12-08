import React from 'react';
function List() {
    const arr = ["Html", "C++", "Java"];
    const li = arr.map((el)=>{
        return el
    })
    console.log(li);
    return(
        <ul>
            {arr.map((item) => (
                <li >{item}</li>
            ))}
        </ul>
    );
}
export default List;
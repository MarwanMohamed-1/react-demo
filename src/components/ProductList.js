import React from 'react';
import {products} from '../Products';
function ProductList() {
    const product = products.map((item)=>{
        return (
            <div key={item.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <img src={item.image} style={{height:'50%',width :'50%'}}/>
                <p>{item.description}</p>
            </div>
        );
    });
    return (
        <div>
            {product}
        </div>
    );
}
export default ProductList;

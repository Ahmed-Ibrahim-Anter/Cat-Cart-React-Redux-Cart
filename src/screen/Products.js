import React, { useEffect, useState } from 'react';
import Card from '../component/Card';
import Item from '../component/Item';


const Products = () => {
    const [product, setproduct] = useState([]);
     

    useEffect(() => {
        Item().then(data => {
            setproduct(data);

        });


    }, []);
    const ele = product.map(pro => {
        return (

            <Card
                key={pro.id}
                image={pro.image}
                name={pro.name}
                price={pro.price}
                discription={pro.discription}
                id={pro.id}
                add='Add to Cart'
                btn=' btn-primary'
            />
        )

    })
    return (
        <div className='d-flex flex-wrap '>
            {ele}
        </div>

    );
}

export default Products;
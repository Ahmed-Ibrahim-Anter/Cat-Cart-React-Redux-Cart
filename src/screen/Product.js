import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { GetItemById } from '../component/Item';
import { useDispatch } from 'react-redux'
import { add, updateProduct } from '../redux/productSlice';
import { incrementByAmount } from '../redux/quantitySlice';
import { productSelectors } from '../redux/productSlice';
import { useSelector } from 'react-redux';



const Product = (props) => {
    let pram = useParams();
    let id = parseInt(pram.id);
    const pstate = useSelector(productSelectors.selectAll);
    const [item, setitem] = useState();
    const [loading, setloading] = useState(true);
    const [quantity, setquantity] = useState(0);
    let num = parseInt(quantity);
    const dispatch = useDispatch();

    const handelclick = () => {
       
        let changess = pstate.map(pro => {

            let change = pro.value + num

            return (
                pro.id === item.id &&

                dispatch(updateProduct({ id: item.id, changes: { value: change } }))
            )
        });
        console.log('changess: ', changess);
        num===0&& num++;
        dispatch(add({ id: item.id, cart: item, value: num }));
       
        console.log('num: ', num);

        dispatch(incrementByAmount(num));

    }


    const handelChange = (e) => {

        let num = e.target.value;
        if (num <= 0) { return } else {
            setquantity(num);
        }

    }
    useEffect(() => {

        GetItemById(id).then(data =>
            setTimeout(() => {
                setitem(data);
                setloading(false);
            }, 2000)
        );


    }, [id]);



    return (
        loading ?
            <div>
                <h1>Loading....</h1>
            </div> :

            <div className="card mb-3 m-5 " >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={item.image} className="img-fluid rounded-start h-100 d-inline-block" alt={item.name} height='100%' />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p className="card-text">{item.discription}</p>
                            <h3 className="card-text">{`price:${item.price}$`}</h3>
                            <div className='m-3 col-md-4'>
                                <input type="number" required min='1' step="1" className='form-control' placeholder='add your Quantity' value={quantity || 1} onChange={handelChange} />
                                <p>Total:{quantity * item.price} $</p>
                            </div>
                            <div className='m-3 '>
                                < Link to="/cart">
                                    <button type="button" onClick={handelclick} className='p-2 px-5 btn btn-primary btn-lg'>Add To Cart</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Product;
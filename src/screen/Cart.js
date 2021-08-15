import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Card from '../component/Card';
import { deleteproduct, productSelectors,deleteAll } from '../redux/productSlice';
import { decrementByAmount,reset } from '../redux/quantitySlice';



const Cart = () => {
    const pstate = useSelector(productSelectors.selectAll);
    const vstate = useSelector(productSelectors.selectTotal);
    console.log('vstate: ', vstate);
    const dispatch = useDispatch();
    const qstate = useSelector(state => state.quantity.count);
    let total = 0;

    const handelClick = (e, id, val ,price) => {
        e.preventDefault();
        dispatch(deleteproduct(id));
        dispatch(decrementByAmount(val));
        total -= val * price;

    
    }
const handelpay=()=>{
dispatch(deleteAll());
dispatch(reset(0));
}

    const ele = pstate.map((item, index) => {
        console.log('item: ', item);
        let pro = item.cart;
        let val = item.value
        total += val * pro.price;
        let id = item.id;
        let price =pro.price;
        return (



            <Card

                key={index}
                image={pro.image}
                name={`Name: ${pro.name}`}
                price={`Price: ${pro.price}`}
                quantity={`quantity: (${val})`}
                total={` total: ${val * pro.price}$`}
                id={pro.id}
                add='Dlete'
                btn='btn-danger'
                handelclick={(e) => { handelClick(e, id, val,price) }}
            />
        )

    });
    return (
        vstate?
        <div className='row '>
            {ele}
            <h2>Quantity:({qstate})</h2>
            <h2>Total:{total}$</h2>
            <Link className="btn btn-primary d-md-block " to="/">
            <button type="button" onClick={handelpay} className="btn btn-primary d-md-block qq">Pay</button>
            </Link>
        </div>:<div className='mx-5 my-5'>
            <div class="alert alert-danger" role="alert">
           Cart is Empty
          </div>
        </div>
    );
}

export default Cart;
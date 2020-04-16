import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './checkoutSummary.css';


const checkoutSummary=(props)=>{
    return (
        <div className={classes.checkoutSummary}>
            <h1>We hope you like it!</h1>
            <div style={{width:'300px',height:'300px',margin:'auto'}}></div>
            <Burger  ingredients={props.ingredients}/>
            <button onClick={props.checkOutCancelled}>Cancel</button>
            <button onClick={props.checkOutHandler}>CheckOut</button>
        </div>
    );
}

export default checkoutSummary;


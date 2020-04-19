import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './checkoutSummary.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actionTypes from '../../../containers/store/burgerBuilderActions';


const checkoutSummary=(props)=>{
    const cancelOrder=()=>{
        props.resetPrice();
        props.history.goBack();
    }
    return (
        <div className={classes.checkoutSummary}>
            <h1>We hope you like it!</h1>
            <div style={{width:'300px',height:'300px',margin:'auto'}}></div>
            <Burger  ingredients={props.ingredients}/>
            <button onClick={cancelOrder}>Cancel</button>
            <button onClick={props.checkOutHandler}>CheckOut</button>
        </div>
    );
}

const mapStateToProps=state=>{
    return {

    }
}


const mapDispatchToProps=dispatch=>{
    return {
        resetPrice:()=>dispatch(actionTypes.resetPrice())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(checkoutSummary));


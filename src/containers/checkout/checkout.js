import React from 'react';
import CheckoutSummary from '../../components/order/checkoutSummary/checkoutSummary';
import ContactData from './contactData';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';

class CheckOut extends React.Component{
    // state={
    //     ingredients:{
    //         salad:0,
    //         meat:0,
    //         cheese:0,
    //         bacon:0,
    //     },
    // }

    // componentDidMount(){
    //     const query=new URLSearchParams(this.props.location.search);
    //     const ingredients={};
    //     for(let param of query.entries()){
    //         ingredients[param[0]]= +param[1];
    //     }
    //     this.setState({ingredients:ingredients});
    // }

    checkOutCancelled=()=>{
        this.props.history.goBack();
    }
    checkOutContinued=()=>{
        console.log('checkout');
        this.props.history.push('/checkout/contact');
    }
    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ings}
                checkOutCancelled={this.checkOutCancelled}
                checkOutHandler={this.checkOutContinued}
                />
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return {
        ings:state.ingredients
    }
}

const mapDispatchToProps=dispatch=>{
    return {}
}


export default connect(mapStateToProps,mapDispatchToProps)(CheckOut);


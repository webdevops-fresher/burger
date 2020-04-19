import React from 'react';
import classes from './allOrders.css';
import {connect} from 'react-redux';


import * as actionTypes from '../store/burgerBuilderActions';

class AllOrders extends React.Component{
    
    componentDidMount(){
        this.props.loadOrders();
    }


   


    render(){


        let content=this.props.orders!=null?
        (<div>
            {Object.values(this.props.orders).map((value,index)=>{
                return (<div key={index} 
                style={{border:'1px solid #ccc',boxShadow:'2px 3px #ccc',marginTop:'50px',display:'flex'}}>
                    <div style={{padding:'20px'}}>
                    <h6>{value.customer.email}</h6>
                    <h6>{value.customer.name}</h6>
                    <h6>{value.customer.street}</h6>
                    <h6>{value.customer.postalCode}</h6>
                    </div>
                    <div style={{padding:'20px'}}>
                        <h4>Ingredients</h4>
                        {Object.keys(value.ingredients).map((ing,index)=>{
                            return <span key={index} style={{display:'block'}}>{ing}:{value.ingredients[ing]}</span>
                        })}
                    </div>
                </div>);
            })}
        </div>) : <h3>Loading...</h3>

        return (
            <div className={classes.container}>
                <h1 className={classes.title}>All Orders</h1>
                {content}
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return {
        orders:state.orders
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        loadOrders:()=>dispatch(actionTypes.fetchOrders())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AllOrders);
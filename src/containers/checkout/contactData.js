import React from 'react';
import classes from './contactData.css';


import {connect} from 'react-redux';
import axios from '../../axios-orders';



class ContactData extends React.Component{
    state={
        name:'',
        email:'',
        street:'',
        postalCode:'',
    }
    orderHandler=(event)=>{
        event.preventDefault();
        const orders=this.props.ings;
        const totalPrice=this.props.price;
        const orderDetails={
            ingredients:orders,
            price:totalPrice,
            customer:{
                name:this.state.name,
                email:this.state.email,
                street:this.state.street,
                postalCode:this.state.postalCode
            }
        }
        axios.post('/orders.json',orderDetails).then(response=>{
                 console.log(response);
        })

            
    }
    onInputChanged=(event)=>{
        console.log(event.target.name);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return (
            <div className={classes.ContactData}>
                <h1>Enter your contact data</h1>
                <form>
                    <label className={classes.Label}>Name:</label>
                    <input type="text" name="name" 
                    className={classes.input} id="name"
                    value={this.state.name}
                    onChange={this.onInputChanged}/>
                    <label className={classes.Label}>Email:</label>
                    <input type="text" name="email" className={classes.input} id="email"
                    value={this.state.email}
                    onChange={this.onInputChanged} 
                    />
                    <label className={classes.Label}>street:</label>
                    <input type="text" name="street" className={classes.input} id="street"
                    value={this.state.street}
                    onChange={this.onInputChanged}
                    />
                    <label className={classes.Label}>Postal Code:</label>
                    <input type="text" name="postalCode" className={classes.input} id="postalcode"
                    value={this.state.postalCode}
                    onChange={this.onInputChanged}
                    />
                    <button 
                    onClick={this.orderHandler} 
                    className={classes.Button}
                    disabled={!(this.state.name!=''&&this.state.email!=''&&this.state.street!=''&&this.state.postalCode!='')}
                    >Order Now</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps=state=>{
    return {
        ings:state.ingredients,
        price:state.totalPrice
    }
}

const mapDispatchToProps=dispatch=>{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData);
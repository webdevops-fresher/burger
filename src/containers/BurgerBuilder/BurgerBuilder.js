import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler';
import {Route} from 'react-router-dom';
import ContactData from '../checkout/contactData';
import axios from '../../axios-orders';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';
import * as burgerBuilderActions from '../store/burgerBuilderActions';




class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        orderNowClicked:false,
        loading:false
    }

    // onIngredientAdded = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const newCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients,

    //     };
    //     updatedIngredients[type] = newCount;
    //     const priceAddition = INGREDIENTS_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     const oldQuantity = this.state.maximumCustomisable;
    //     const newQuantity = oldQuantity + 1;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients, maximumCustomisable: newQuantity });

    // }


    // onRemoveIngredient = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if (oldCount <= 0) {
    //         return;
    //     }
    //     const newCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients,

    //     };
    //     updatedIngredients[type] = newCount;
    //     const priceAddition = INGREDIENTS_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceAddition;
    //     const oldQuantity = this.state.maximumCustomisable;
    //     const newQuantity = oldQuantity - 1;
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients, maximumCustomisable: newQuantity });

    // }

    orderNowHandler=()=>{
        console.log('orderNowClicked');
        this.setState({orderNowClicked:true,loading:true});
        // const order={
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:"Vignesh",
        //         address:"Chennai"
        //     }
        // }
        // axios.post('/orders.json',order).then(response=>{
        //     console.log(response);
        //     this.setState({loading:false});
        // })
    }

    revertOrderHandler=()=>{
        this.setState({orderNowClicked:false});
    }

    proceedOrderhandler=()=>{
        // let ingredientParams=[]
        // for(let ingredient in this.state.ingredients){
        //     ingredientParams.push(encodeURIComponent(ingredient)+'='+encodeURIComponent(this.state.ingredients[ingredient]));
        // }
        // const ingredientParamString=ingredientParams.join('&');
        this.props.history.push('/checkout');
    }


    componentDidMount(){
        this.props.fetchIngredients();
    }

    render() {
        const disabledLessButtons = {
            ...this.props.ings
        }

        for (let key in disabledLessButtons) {
            disabledLessButtons[key] = disabledLessButtons[key] <= 0
        }
        let content=this.props.ings!=null?( <div><Modal show={this.state.orderNowClicked} revertOrder={this.revertOrderHandler}>
            <OrderSummary ingredients={this.props.ings} cancelOrder={this.revertOrderHandler} 
            proceedOrder={this.proceedOrderhandler}
            price={this.state.totalPrice}/>
        </Modal>
        <Burger ingredients={this.props.ings} />
        <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientsRemoved={this.props.onIngredientRemoved}
            disabled={disabledLessButtons}
            price={this.props.price}
            maximum={this.props.maxim}
            orderNow={this.orderNowHandler}
        /></div>):<h1>Loading...</h1>;

        return (
            <div>
               {content}
            </div>
        );
    }
}


const mapStateToProps=state=>{
    return {
        ings:state.ingredients,
        price:state.totalPrice,
        maxim:state.maximumCustomisable
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onIngredientAdded:(ingName)=>dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved:(ingName)=>dispatch(burgerBuilderActions.removeIngredient(ingName)),
        fetchIngredients:()=>dispatch(burgerBuilderActions.initIngredients())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));
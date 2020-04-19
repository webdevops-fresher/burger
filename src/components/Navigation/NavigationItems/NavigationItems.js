import React from 'react';
import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems=(props)=>{
    return (
        <div>
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/">Burger Builder</NavigationItem>
                <NavigationItem link="/checkout">Checkout</NavigationItem>
                <NavigationItem link="/orders">All orders</NavigationItem>
            </ul>
        </div>
    );
}


export default navigationItems;
import CartContext from "./Cart-context";
import { useReducer } from "react";

const initialCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state, action) => {
    if (action.type === "add"){
        // const updatedItems =  state.items.concat(action.item)
        // const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        let updatedItems
        const existingcartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingcartItem = state.items[existingcartItemIndex];
        if (existingcartItem){
            const updatedItem = {
                ...existingcartItem,
                amount: existingcartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingcartItemIndex] = updatedItem;
        } else {
            updatedItems =  state.items.concat(action.item);
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return initialCartState;
};


const CartProvider = props => {
    
    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

    const addItemToCartHandler = item => {
        dispatchCart({type:"add", item: item})
    };

    const removeItemToCartHandler = id => {
        dispatchCart({type:"remove", id: id})
    };

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }
    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider
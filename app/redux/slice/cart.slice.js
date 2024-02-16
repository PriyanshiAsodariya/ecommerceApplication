import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}

export const cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            console.log("payyyyyyyyyyyyyyyyyyyyyyy", action.payload);

            const itemAvilableindex = state.cart.findIndex((v) => v.id === action.payload);

            if (itemAvilableindex === -1) {
                state.cart.push({ id: action.payload, quantity: 1 })
            } else {
                state.cart[itemAvilableindex].quantity++;
            }

            console.log(itemAvilableindex);
            console.log(state.cart);
        },
    
        incrementCart : (state , action) =>{

            const itemAvilableindex = state.cart.findIndex((v)=> v.id === action.payload);
            state.cart[itemAvilableindex].quantity++ ;
            
        },

        decrementCart: (state, action) => {

            const itemAvilableindex = state.cart.findIndex((v) => v.id === action.payload);
            state.cart[itemAvilableindex].quantity-- ;
            
        },
        removeCart :(state , action) => {
            // console.log(action.payload,"payyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
            const itemAvilableindex = state.cart.findIndex((v) => v.id === action.payload);
            state.cart.splice(itemAvilableindex ,1)
        }
    }
})

export const { addtoCart, incrementCart, decrementCart, removeCart } = cartslice.actions;
export default cartslice.reducer
import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import SubCategorySlice from "../slice/SubCategorySlice";
import  productSlice  from "../slice/ProductSlice";
import CategorySlice from "../slice/CategorySlice";
import  cartslice  from "../slice/cart.slice";
import cartSlice from "../slice/cart.slice";
import favouriteSlice from "../slice/favourite.slice";
import crudSlice from "../slice/crud.slice";
import authslice from "../slice/auth.slice";



export const rootReducer = combineReducers({
    counter : counterReducer,
    subcategory : SubCategorySlice,
    Product : productSlice,
    Category : CategorySlice,
    cart : cartSlice,
    favourite : favouriteSlice,
    crud : crudSlice,
    auth: authslice
})
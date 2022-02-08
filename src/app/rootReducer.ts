import { combineReducers } from "redux";
import productReducer from "../features/product-deatil/productDetailReducer";

const rootReducer = combineReducers({
    product: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

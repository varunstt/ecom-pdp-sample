import constants from './productDetailConstants';
import { Action, ActionCreator, AnyAction, Reducer } from 'redux';
import { SizeType } from '../../utils/models';

type ActionType = { type: string; payload: number };

/* ProductState
    sizeIndex - to store seleccted size of a product
*/

export interface ProductState {
    sizeIndex: number;
}

const initialState: ProductState = {
    sizeIndex: 0,
};

/* productReducer
    constants.UPDATE_SIZE_INDEX - to modify ProductState.sizeIndex state
    RESET_STATE - to reset state
*/

const productReducer: Reducer<ProductState, AnyAction> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case constants.UPDATE_SIZE_INDEX:
            return {
                ...state,
                sizeIndex: action.payload,
            };
        case 'RESET_STATE':
            return { ...initialState };
        default:
            return state;
    }
};
export default productReducer;

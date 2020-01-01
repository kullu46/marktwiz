import { Types } from './../constants/main-types';
const initialState = {
    isAlreadyVisited: false
}
export default function mainReducer(state = initialState, action) {
    switch(action.type){
        case Types.PAGE_LOAD:
            return {
                ...state,
                isAlreadyVisited: action.payload
            }
    }
    return state;
}
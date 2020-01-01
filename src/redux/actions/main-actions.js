export function pageLoad() {
    return dispatch =>{
        dispatch({type: 'PAGE_LOAD', payload: true});
    }
}
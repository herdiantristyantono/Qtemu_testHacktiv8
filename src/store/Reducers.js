const myData={
    counter : 0,
    // title:'kosong'
    people:[],
    album:[]
}

const myReducers = (state={...myData},action)=>{
    switch(action.type){
        case 'INCREMENT':
        return ({
            ...state,
            counter:state.counter+1
        });
        case 'DECREMENT':
        return({
            ...state,
            counter:state.counter-1
        });
        case 'INSERT_PEOPLE':
        return({
            ...state,
            people: action.payload
        })
        default:
        return state
    }
}

export default myReducers
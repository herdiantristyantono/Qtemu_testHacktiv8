import axios from 'axios'

export const fetchUser = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch(inserPeople(res.data))
        })
    }
}


export const incrementAction = () => ({
    type: 'INCREMENT'
})

export const decrementAction = () => ({
    type: 'DECREMENT'
})

export const inserPeople = (data) => ({
    type: 'INSERT_PEOPLE',
    payload : data
})
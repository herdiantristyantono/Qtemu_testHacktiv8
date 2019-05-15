import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementAction, decrementAction, fetchUser} from './Action'


class Home extends Component{
    increment =()=>{
        this.props.incrementAction()
    }

    insert =()=>{
        this.props.fetchUser()
        console.log("xxx")
    }
    
    decrement =()=>{
        this.props.decrementAction()
        console.log(this.props)
    }
    render(){
        return(
    <div>    
        <h2>{this.props.angka}</h2>    
        <button onClick={this.increment}>increment</button>    
        <button onClick={this.decrement}>decrement</button>  
        <button onClick={this.fetchUser}>payload</button>  

    </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        angka:state.counter
    }
}
const mapDispatchToProps = {incrementAction,decrementAction,fetchUser}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
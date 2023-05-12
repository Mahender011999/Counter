import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  onIncrement = ()=>{
    this.setState(prevState =>{
      return {count:prevState.count+1}
    })
  }
  onDecrement = () =>{
    this.setState(prevState =>{
      return {count:prevState.count-1}
    })
  }
  state = {count:0}
  render() {
   const {count} = this.state
     
    return (
      <div className='container'>
         <h1 className='heading' >Counter</h1>
         <p className='count'>{count}</p>
         <div>
         <button onClick={this.onDecrement} className='button1'>Decrease</button>
         <button onClick={this.onIncrement} className='button1' >Increase</button>
         
         </div>
      </div>
    )
  }
}

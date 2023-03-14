import React, { Component } from 'react'
import user from "./user.json"
import Todat from './Todat';

 class Nanu extends Component {
  constructor()  
  {
    super()
    this.state={
        dc:user
    }
  }
  render() {
    return (
      <div>
       < Todat data={this.state.dc} />
      </div>
    )
  }
}
export default Nanu;
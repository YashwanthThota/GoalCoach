import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

 addGoal() {
   //getting props from store mapStateToProps
   console.log('this.state', this.state);
   const { title } = this.state;
   //get this from store ststetoMap
   const { email } = this.props.user;
   goalRef.push({email, title})
 }

  render(){
   return(
     <div className="form-inline">
     <div className="form-group">
     <input
      type="text"
      placeholder="Add a goal"
      className="form-control"
      style={{marginRigth: '5px'}}
      onChange={event => this.setState({title: event.target.value})}
     />
     <button
     className="btn btn-success"
     type="button"
     onClick={() => this.addGoal() }
     >
     Submit
     </button>
     </div>
     </div>
   )
  }
}

//we are geeting info from store and return to this component
function mapStateToProps(state) {
  const { user } = state;
  return{
    user
  }
}

//state to props import
export default connect(mapStateToProps, null)(AddGoal);

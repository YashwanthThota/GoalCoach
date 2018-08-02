import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {

//Lifecycle hook
//it is called afetr the rendering of component
componentDidMount() {
  //within our on listener, we use 'event' to trigger our promise
  // /stright up whenever something happens within our goal reference
  goalRef.on('value', snap => {
    //snap isa variable which listens to the promise

   //the goals array is used to store the data from db
    let goals = [];
    snap.forEach( goal => {
      //let goalObject = goal.val();
      //extracting email, title form goal object
      const { email, title } = goal.val();
      //this is used to store the random key generated for each goalObject
      //in the firbase to uniquely identify the object
      const serverKey = goal.key;
      goals.push({email, title, serverKey});
    })
      console.log('goals', goals);
      this.props.setGoals(goals);
  })
}


  render() {
    console.log('this.props.goals', this.props.goals);
    return (
      <div>
      {
        this.props.goals.map((goal,index) => {
          return(
            <GoalItem key={index} goal={goal} />
          )
        })
      }
      </div>
    )
  }
}

//map the state from store to prop to use it in this component
function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, {setGoals})(GoalList);

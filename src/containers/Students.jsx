import React, { Component } from 'react';

// connect method from react-redux will allow connection between Component/container to store (redux)
import { connect } from 'react-redux';

class Students extends Component{
    render(){
        console.log(this.props);
        var studentArray = this.props.students.map((student,index)=>{
            return(<li key={index}>{student.name} sits in seat {student.seat}</li>)
        })
        return(
            <div>
                <h1>This is the Student component</h1>
                {studentArray}
            </div>
            
        )
    }
}

// need a function to map redux state to this components props
function mapStatetoProps(state){
    // this function will return an object
    // property will be the props in this component
    // the value will be the piece of state from the reducer 
    return{
        students: state.students
    } 
}

// when using connect(), do not export this way
// export default Students;

// export this way, with higher order call back
export default connect(mapStatetoProps)(Students);
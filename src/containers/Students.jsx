import React, { Component } from 'react';

// connect method from react-redux will allow connection between Component/container to store (redux)
import { connect } from 'react-redux';
// bindActionCreators lets actions dispatch to reducers
import { bindActionCreators } from 'redux';
// get AddStudent action
import AddStudent from '../actions/AddStudent';

class Students extends Component{
    constructor(){
        super();
        this.addNewStudent = this.addNewStudent.bind(this);
    }

    addNewStudent(){
        const name = document.getElementById('student-name').value;
        this.props.addStudent(name);
    }
    render(){
        console.log();
        // this.props.addStudent();
        var studentArray = this.props.students.map((student,index)=>{
            return(<li key={index}>{student.name} sits in seat {student.seat}</li>)
        })
        return(
            <div>
                <input id="student-name" type="text" placeholder="Name of Student" />
                <button onClick={this.addNewStudent}>Add student</button>
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

function mapDispatchToProps(dispatch){
    // bind action Creators takes an object as first param, callback as second, the dispatcher;
    // property is local prop name (this.props.whatever)
    // value is the callback the action file.js
    return bindActionCreators(
        {
            addStudent: AddStudent
        }, 
        dispatch
    );
}

// *************** BASIC EXPORT
// when using connect(), do not export this way
// export default Students;

// *************** EXPORT CONNECT
// export this way, with higher order call back
// export default connect(mapStatetoProps)(Students);

// *************** EXPORT CONNECT WITH DISPATCH
// when exporting connect, state always come first,
// when exporting connected, action comes second
export default connect(mapStatetoProps,mapDispatchToProps)(Students)
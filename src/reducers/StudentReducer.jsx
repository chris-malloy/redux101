// reducers are function that return a peice of state
const students = [
    {
        name: "Jason",
        seat: 5
    }, {
        name: "Chris",
        seat: 6
    }, {
        name: "Saif",
        seat: 7
    }, {
        name: "Taylor",
        seat: 8
    }
];

// all reducer functions have 2 params
// 1: current state
// 1b: usually you will want to provide a default state
// 2: info that came from the action 
export default function(state = students, action){
    if(action.type === "ADD_STUDENT"){
        let newStudents = state.slice();
        newStudents.push({
            name: action.payload
        })
        return newStudents;
    }
    return state
}
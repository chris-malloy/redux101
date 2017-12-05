// an action exports a function
// that function must 
// that action must have a prop of type
export default function addStudents(studentName){
    console.log("Add Students aciton is running")
    return{
        type: 'ADD_STUDENT',
        payload: studentName,
    }
}
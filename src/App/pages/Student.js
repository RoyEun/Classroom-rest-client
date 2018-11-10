import React, { Component } from 'react';
import StudentTable from './StudentTable';


import './Student.css';

class Student extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      student: []
    }
    this.getStudentById = this.getStudentById.bind(this);
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getStudent();
  }

  // Retrieves the list of items from the Express app
  getStudent = () => {
    fetch('/api/student/all')
    .then(res => res.json())
    .then((student) => {
      let res = student.filter((item) => {
        return !!item["student_name"] ? true : false;
      })
      this.setState({student: res})
    });
  }

  getStudentById = (props) => {
    fetch('/api/student/:id', {
      method: 'GET',
      headers: {
        'id': props.id
      }
    })
  }

  render() {
    const { student } = this.state;

    return (
      <div className="App">
        <h1 className="list_header"> Student Schedules </h1>
        {student.length ?
          <StudentTable
            getStudentById={this.getStudentById}
            student={student}
          /> : (
          <div/>
        )}
      </div>
    );
  }
}

export default Student;

import React, { Component } from 'react';

class Student extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      student: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getStudent();
  }

  // Retrieves the list of items from the Express app
  getStudent = () => {
    fetch('/api/student')
    .then(res => res.json())
    .then((student) => {
      console.log(student);
      this.setState({student})
    });
  }

  render() {
    const { student } = this.state;

    console.log(student);

    return (
      <div className="App">
        <h1>List of Students with Courses</h1>
        {/* Check to see if any items are found*/}
        {student.length ? (
          <div>
            {/* Render the student of items */}
            {student.map((item) => {
              return(
                <div>
                  {`${item.id}, ${item.student_name}, ${item.classroom.classroom_id}, ${item.classroom.class_name}`}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Student;

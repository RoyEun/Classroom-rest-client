import React, { Component } from 'react';

class Course extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      course: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getCourse();
  }

  // Retrieves the list of items from the Express app
  getCourse = () => {
    fetch('/api/course')
    .then(res => res.json())
    .then((course) => {
      this.setState({course})
    });
  }

  render() {
    const { course } = this.state;

    return (
      <div className="App">
        <h1>List of Course with Lecturers</h1>
        {course.length ? (
          <div>
            {course.map((item) => {
              return(
                <div>
                  {`${item.id}, ${item.course_name}, ${item.lecturer_id}`}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>NList of Course with Lecturers</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Course;

import React, { Component } from 'react';

class Classroom extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      classroom: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getClassroom();
  }

  // Retrieves the list of items from the Express app
  getClassroom = () => {
    fetch('/api/classroom')
    .then(res => res.json())
    .then((classroom) => {
      this.setState({classroom})
    });
  }

  render() {
    const { classroom } = this.state;

    return (
      <div className="App">
        <h1>Classroom Assignments</h1>
        {/* Check to see if any items are found*/}
        {classroom.length ? (
          <div>
            {/* Render the classroom of items */}
            {classroom.map((item) => {
              return(
                <div>
                  {`${item.id}, ${item.class_name}, ${item.students[0].student_name}`}
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

export default Classroom;

import React, { Component } from 'react';

class Lecturer extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      lecturer: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getLecturer();
  }

  // Retrieves the list of items from the Express app
  getLecturer = () => {
    fetch('/api/lecturer')
    .then(res => res.json())
    .then((lecturer) => {
      console.log(lecturer);
      this.setState({lecturer})
    });
  }

  render() {
    const { lecturer } = this.state;

    console.log(lecturer);

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {lecturer.length ? (
          <div>
            {/* Render the lecturer of items */}
            {lecturer.map((item) => {
              return(
                <div>
                  {`${item.id}, ${item.lecturer_name}, ${item.course.course_name}`}
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

export default Lecturer;

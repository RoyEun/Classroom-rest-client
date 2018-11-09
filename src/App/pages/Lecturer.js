import React, { Component } from 'react';
import LecturerTable from './LecturerTable';


import './Lecturer.css';

class Lecturer extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      lecturer: []
    }
    this.getLecturerById = this.getLecturerById.bind(this);
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
      this.setState({lecturer})
    });
  }

  getLecturerById = (props) => {
    fetch('/api/lecturer/:id', {
      method: 'GET',
      headers: {
        'id': props.id
      }
    })
  }

  render() {
    const { lecturer } = this.state;

    return (
      <div className="App">
        <h1 className="list_header"> Lecturer Courses </h1>
        {lecturer.length ?
          <LecturerTable
            getLecturerById={this.getLecturerById}
            lecturer={lecturer}
          /> : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Lecturer;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1></h1>
      <Link to={'./classroom'}>
        <button variant="raised">
            Classroom List
        </button>
      </Link>
      <Link to={'./lecturer'}>
        <button variant="raised">
            Lecturer List
        </button>
      </Link>
      <Link to={'./student'}>
        <button variant="raised">
            Student List
        </button>
      </Link>
      <Link to={'./course'}>
        <button variant="raised">
            Course List
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;

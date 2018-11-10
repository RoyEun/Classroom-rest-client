import React from 'react';

const StudentTableRow = ({item, key, index}) => {
  return (
    <div className="table_row">
      <div className="table_small">
        <div className="table_cell">Student ID</div>
        <div id={item.id} className="table_cell">{item.id}</div>
      </div>
      <div className="table_small">
        <div className="table_cell">Student Name</div>
        <div className="table_cell">{item.student_name}</div>
      </div>
      <div className="table_small">
        <div className="table_cell">Classroom</div>
        <div id={item.classroom_name} className="table_cell">{item.classroom_name}</div>
      </div>
      <div className="table_small">
        <div className="table_cell">Course</div>
        <div className="table_cell">{item.courses[index].course_name}</div>
      </div>
      <div className="table_small">
        <div className="table_cell">Lecturer</div>
        <div className="table_cell">{item.courses[index].lecturer_name || `TBD`}</div>
      </div>
    </div>
  );
};

export default StudentTableRow;

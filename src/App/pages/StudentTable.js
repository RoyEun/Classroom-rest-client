import React from 'react';
import StudentTableHeader from './StudentTableHeader';
import StudentTableRow from './StudentTableRow';

const StudentTable = (props) => {
  const { student } = props;

  return (
    <div className="table" id="results">
      <StudentTableHeader />
      {student.map(item => <StudentTableRow key={item.id} id={item.key} item={item} />)}
    </div>
  );
};

export default StudentTable;

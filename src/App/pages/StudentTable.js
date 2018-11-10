import React from 'react';
import StudentTableHeader from './StudentTableHeader';
import StudentTableRow from './StudentTableRow';

const StudentTable = (props) => {
  const { student } = props;

  return (
    <div className="table" id="results">
      <StudentTableHeader />
      {student.map((item, i) => <StudentTableRow index={i} id={item.id} item={item} />)}
    </div>
  );
};

export default StudentTable;

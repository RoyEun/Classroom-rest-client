import React from 'react';
import LecturerTableHeader from './LecturerTableHeader';
import LecturerTableRow from './LecturerTableRow';

const LecturerTable = (props) => {
  const { lecturer } = props;

  return (
    <div className="table" id="results">
      <LecturerTableHeader />
      {lecturer.map(item => <LecturerTableRow key={item.id} id={item.key} item={item} />)}
    </div>
  );
};

export default LecturerTable;

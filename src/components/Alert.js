import React from 'react';
import '../styles/alert.css';

const Alert = () => {
  return (
      <div className='alert'>
        <strong>This user name does not exist!</strong> Please specify an
        existing user name!.
      </div>
  );
};

export default Alert;

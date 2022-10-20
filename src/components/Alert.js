import React from 'react';
import '../styles/alert.css';

const Alert = () => {
  return (
    <div>
      <div class='alert'>
        <strong>This user name does not exist!</strong> Please specify an
        existing user name!.
      </div>
    </div>
  );
};

export default Alert;

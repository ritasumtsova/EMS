import React from 'react';

import AddDepartment from '../AddDepartment';
import EditDepartment from '../EditDepartment';
import AddEmployee from '../AddEmployee';
import EditEmployee from '../EditEmployee';

function ModalManager({ closeFn, modal = '' }) {
  return (
    <>
      <AddDepartment closeFn={closeFn} open={modal === 'addDepartment'} />
      <AddEmployee closeFn={closeFn} open={modal === 'addEmployee'} />
      <EditDepartment closeFn={closeFn} open={modal === 'editDepartment'} />
      <EditEmployee closeFn={closeFn} open={modal === 'editEmployee'} />
    </>
  );
}

export default ModalManager;

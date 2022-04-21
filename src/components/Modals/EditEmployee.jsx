import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

import EmployeeForm from '../EmployeeForm/EmployeeForm';
import CommonModal from './common/CommonModal';

function EditEmployee({ closeFn = () => null, open = false }) {
  return (
    <CommonModal open={open}>
      <div className="ModalWindow">
        <Modal
          isOpen={open}
          centered
          backdrop
        >
          <ModalHeader>
            Edit employee
          </ModalHeader>
          <ModalBody>
            <EmployeeForm />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" disabled type="Submit">Save</Button>
            <Button onClick={closeFn} color="danger">Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </CommonModal>
  );
}

export default EditEmployee;

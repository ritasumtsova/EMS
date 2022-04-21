import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import CommonModal from './common/CommonModal';
import DepartmentForm from '../DepartmentForm/DepartmentForm';

function AddDepartment({ closeFn = () => null, open = false }) {
  return (
    <CommonModal open={open}>
      <div className="ModalWindow">
        <Modal
          isOpen={open}
          centered
          backdrop
        >
          <ModalHeader>
            Add new department
          </ModalHeader>
          <ModalBody>
            <DepartmentForm />
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

export default AddDepartment;

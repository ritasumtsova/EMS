import React from 'react';
import { Button } from 'reactstrap';
import './EditButton.scss';

function EditButton({ modal }) {
  return (
    <Button
      className="EditButton__btn"
      color="primary"
      onClick={modal}
      data-modal={modal}
    >
      Edit
    </Button>
  );
}

export default EditButton;

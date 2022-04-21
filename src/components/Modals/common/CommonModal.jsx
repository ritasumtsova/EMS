import ReactDOM from 'react-dom';

const modalRootEl = document.getElementById('modal-root');

function CommonModal({ children, open = false }) {
  console.log(children);
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
}

export default CommonModal;

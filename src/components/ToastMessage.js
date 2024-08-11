import React from 'react';
import { Toast } from 'react-bootstrap';

function ToastMessage({ show, onClose, title, body }) {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide>
      <Toast.Header>
        <strong className="mr-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{body}</Toast.Body>
    </Toast>
  );
}

export default ToastMessage;


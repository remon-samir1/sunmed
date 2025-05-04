import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

const Notification = () => {
  return (
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover={false}
    theme="colored"
    transition={Slide}
    />
  );
}

export default Notification;

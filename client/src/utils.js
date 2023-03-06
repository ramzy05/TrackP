import {toast } from 'react-toastify';

export const notify = (message, type)=>{
  toast.clearWaitingQueue();
  switch (type) {
    case 'success':
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER
      });
      break;
    case 'error':
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER
        // position: toast.POSITION.TOP_LEFT
      });
      break;
    case 'warning':
      toast.warn(message, {
        position: toast.POSITION.TOP_CENTER
        // position: toast.POSITION.BOTTOM_LEFT
      });
      break;
    default:
      toast.info(message, {
        position: toast.POSITION.TOP_CENTER
        // position: toast.POSITION.BOTTOM_CENTER
      });
      break;
  }
}
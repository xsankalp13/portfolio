import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const options = {
  autoClose: 2000,
  className: '',
  position: toast.POSITION.TOP_RIGHT,
};

export const toastSuccess = message => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

export const toastError = message => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

export const toastWarning = message => {
  toast.warn(message, options);
}

export const toastInformation = message => {
  toast.info(message, options);
}

export const toastDark = message => {
  toast.dark(message, options);
}

export const toastDefault = message => {
  toast(message, options);
}

// wherever in need that toast use like this 

// import { toastError, toastSuccess } from "./Toast";
// toastSuccess("User successfully registered");
// toastError("User is not created try again");
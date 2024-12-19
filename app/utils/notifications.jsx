import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (message) => {
    toast.success(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
};

export const showErrorToast = (message) => {
    toast.error(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
    });
};
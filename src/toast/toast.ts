import { toast } from 'react-hot-toast';
import { ToastVariant } from '../types/types';
export const showToast = (variant: ToastVariant, message: string): void => {
  switch (variant) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'loading':
      toast.loading(message);
      break;
    default:
      toast('Something wrong');
  }
};

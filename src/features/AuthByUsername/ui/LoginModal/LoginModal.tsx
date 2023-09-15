import { classNames } from 'shared/lib/className/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface ILoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);

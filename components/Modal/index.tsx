import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import {type FC, type PropsWithChildren, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import classes from './style.module.css';

interface ModalProps {
    onClose: (e?: MouseEvent<HTMLSpanElement>) => void;
    nodeId?: string;
    isOpen: boolean;
    className?: string;
}


const Modal: FC<PropsWithChildren & ModalProps> = ({
                                                       children,
                                                       isOpen,
                                                       nodeId,
                                                       onClose,
                                                       className,
                                                   }) => {
    const router = useRouter();

    const closeModalHandler = () => {
        onClose();
    };

    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <span onClick={closeModalHandler} className={classes.overlay} />
            )}
            <div
                className={`${classes.modal} ${
                    isOpen ? classes.active : ''
                } ${className}`}
            >
                <span onClick={closeModalHandler}>
                    X
                </span>
                {children}
            </div>
        </>,
        nodeId ? document.getElementById(nodeId)! : document.body
    );
};

export default dynamic(() => Promise.resolve(Modal), {
    ssr: false,
});

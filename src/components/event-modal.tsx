import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
};

const EventModal: React.FC<ModalProps> = ({isOpen, hasCloseBtn, onClose, children}) => {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [isModalOpen, setModalOpen] = useState(isOpen);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
                modalElement.classList.add('open');
            } else {
                modalElement.close();
                modalElement.classList.remove('open');
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    return (
        <dialog ref={modalRef} className="modal" onKeyDown={handleKeyDown}>
            {hasCloseBtn && (
                <button className="nes-btn modalClose" onClick={handleCloseModal}>X</button>
            )}
            {children}
        </dialog>
    )
}
export default EventModal;
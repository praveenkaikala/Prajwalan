import React from 'react';
import { MdClose } from 'react-icons/md';

const Modal = ({ isOpen, onClose, children,styleWidth=false }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-full z-40">
          <div className={`bg-white p-8 rounded-lg relative  ${styleWidth ? ' max-w-md':' modal-container lg:max-w-lg'}`}>
            <MdClose
              className="absolute top-4 right-4 cursor-pointer"
              size={24}
              onClick={onClose}
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

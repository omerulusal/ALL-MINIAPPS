"use client";
import React from "react";
import { GrClose } from "react-icons/gr";
import Button from "../Buttons/Button";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    btnLabel: string;
    title: string;
    bodyElement?: React.ReactElement;
    footerElement?: React.ReactElement;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    btnLabel,
    title,
    bodyElement,
    footerElement,
}) => {
    const closeFunc = () => {
        onClose();
    };
    const submitFunc = () => {
        onSubmit();
    };
    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed flex items-center justify-center w-full h-full  bg-black bg-opacity-70">
            <div className="bg-white p-5 rounded-lg w-1/2 ">
                <div className="flex items-center justify-between border-b pb-5">
                    <div className="text-2xl font-bold text-gray-800 mb-5">{title}</div>
                    <div onClick={closeFunc}>
                        <GrClose size={24} color="black" cursor="pointer" />
                    </div>
                </div>
                <div>{bodyElement}</div>
                <Button onSubmit={submitFunc} btnLabel={btnLabel} />
                {footerElement}
            </div>
        </div>
    );
};

export default Modal;

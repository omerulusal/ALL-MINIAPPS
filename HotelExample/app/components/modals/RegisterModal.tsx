"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Button from "../Buttons/Button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { registerModalFunc } from "@/app/redux/modalSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });
    const { registerModal } = useAppSelector((state) => state.modal);
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        axios.post("/api/register", data).then((res) => {
            dispatch(registerModalFunc());
            toast.success(`Register Islemi Başarılı`);
        }).catch((err) => {
            toast.error(`Register Islemi Başarısız`);
        });
    };

    const bodyElement = (
        <div>
            <Input
                id="name"
                type="text"
                placeholder="Name"
                register={register}
                errors={errors}
                required={true}
            />

            <Input
                id="email"
                type="email"
                placeholder="email"
                register={register}
                errors={errors}
                required={true}
            />

            <Input
                id="password"
                type="password"
                placeholder="password"
                register={register}
                errors={errors}
                required={true}
            />
        </div>
    );
    const footerElement = (
        <div className="mt-2 gap-2 flex flex-col items-center justify-center">
            <Button
                btnLabel="Google ile Giris Yap"
                onSubmit={() => { signIn('google'); }}
                icon={FaGoogle}
                outline
            />
            <Button
                btnLabel="Github ile Giris Yap"
                onSubmit={handleSubmit(onSubmit)}
                icon={FaGithub}
                outline
            />
        </div>
    );
    const dispatch = useAppDispatch();
    return (
        <div>
            <Modal
                footerElement={footerElement}
                bodyElement={bodyElement}
                isOpen={registerModal}
                onClose={() => {
                    dispatch(registerModalFunc());
                }}
                onSubmit={handleSubmit(onSubmit)}
                btnLabel="Register"
                title="Register"
            />
        </div>
    );
};

export default RegisterModal;

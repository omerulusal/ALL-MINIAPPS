"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
    id: string;
    type: string;
    placeholder: string;
    required: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
};
const Input: React.FC<InputProps> = ({
    id,
    type,
    placeholder,
    required,
    register,
    errors,
}) => {
    return (
        <div className="mb-3">
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                {...register(id, { required })}
                className={`outline-none ${errors[id] ? "border-red-500" : "border border-gray-500"
                    } w-full h-12 text-lg px-3  rounded-lg`}
            />
        </div>
    );
};

export default Input;

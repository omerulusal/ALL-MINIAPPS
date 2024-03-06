"use client";

import { IconType } from "react-icons";

type CategorySelectProps = {
    name: string;
    icon: IconType;
    selected: boolean;
    onClick: (value: string) => void;
};

const CategorySelect: React.FC<CategorySelectProps> = ({
    name,
    icon: Icon,
    selected,
    onClick,
}) => {
    return (
        <div
            onClick={() => onClick(name)}
            className={`${selected ? "bg-gray-200" : ""} flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 mr-10 w-32`}
        >
            <Icon size={24} color={selected ? "black" : "gray"} />
            <div>{name}</div>
        </div>
    );
};

export default CategorySelect;

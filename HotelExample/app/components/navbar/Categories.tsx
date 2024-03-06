"use client";
import { FaUmbrellaBeach } from "react-icons/fa";
import { LuHotel } from "react-icons/lu";
import CategoriesItem from "./CategoriesItem";
import { useSearchParams } from "next/navigation";

export const categories = [
    {
        name: "Tatil-Koyu",
        icon: FaUmbrellaBeach,
    },
    {
        name: "Kamp",
        icon: LuHotel,
    },
    {
        name: "Otel",
        icon: FaUmbrellaBeach,
    },
    {
        name: "Villa",
        icon: LuHotel,
    },
];

const Categories = () => {
    const params = useSearchParams();
    const urlItem = params.get("category");
    console.log(urlItem);
    return (
        <div className="grid grid-cols-4">
            {categories.map((category, i) => (
                <CategoriesItem
                    key={i}
                    name={category.name}
                    icon={category.icon}
                    selected={urlItem === category.name}
                />
            ))}
        </div>
    );
};

export default Categories;

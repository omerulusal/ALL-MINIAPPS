"use client"
import { IconType } from "react-icons"
import { useRouter } from "next/navigation"
type CategoriesItemProps = {
    name: string
    icon: IconType
    selected: boolean
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({ name, icon: Icon, selected }) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`?category=${name}`)} className="flex flex-col items-center justify-center cursor-pointer">
            <Icon size={24} color={selected ? "black" : "gray"} />
            <div>{name}</div>
        </div>
    )
}

export default CategoriesItem
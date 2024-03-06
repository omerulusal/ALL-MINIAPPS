"use client"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
interface CounterSelectProps {
    title: string;
    description: string;
    value: number;
    onChange: (value: number) => void;
}
const CounterSelect: React.FC<CounterSelectProps> = ({
    title,
    description,
    value,
    onChange
}) => {

    const azalt = () => {
        if (value == 1) return null;
        onChange(value - 1)
    }

    const arttir = () => {
        onChange(value + 1)
    }
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="text-2xl font-bold tracking-tight">{title}</div>
                <div className="text-2xl font-bold text-gray-500 mb-5 ml-5 mr-5">{description}</div>
            </div>
            <div className="flex items-center">
                <div onClick={azalt} className="text-2xl font-bold">
                    <AiOutlineMinus
                        size={24}
                        color="black"
                        cursor="pointer"
                    />
                </div>
                <div className="text-2xl font-bold mb-5 ml-5 mr-5">{value}</div>

                <div className="text-2xl font-bold" onClick={arttir}>
                    <AiOutlinePlus
                        size={24}
                        color="black"
                        cursor="pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default CounterSelect
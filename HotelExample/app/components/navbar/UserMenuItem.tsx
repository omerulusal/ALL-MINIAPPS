"use client"
interface UserMenuItemProps {
    name: string
    onClick: () => void
}
const UserMenuItem: React.FC<UserMenuItemProps> = ({ name, onClick }) => {
    return (
        <div className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-200 mr-10 w-32" onClick={onClick} role="button">
            {name}
        </div>
    )
}

export default UserMenuItem
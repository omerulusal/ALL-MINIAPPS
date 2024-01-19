import MenuList from "./MenuList";
import React from 'react'

function Menu() {
    return (
        <div className="menu">
            <h1 className="menu-title">Our Menu</h1>
            <div className="menuList">
                {
                    MenuList.map((menuItem, key) => {
                        return (
                            <div className="menuItem">
                                <div><img src={menuItem.image} alt="" className="img-fluid d-inline rounded" /></div>
                                <h3 className="fdName">{menuItem.name}</h3>
                                <h3 className="fdPrice">{menuItem.price} Tl</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu
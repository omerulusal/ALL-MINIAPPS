import { Button } from "@mui/material"
import { CartItemType } from "../App"
import { Wrapper } from "./cartItem.styled"

type Props = {
    item: CartItemType
    kartaEkle: (clickedItem: CartItemType) => void
    karttanSil: (id: number) => void
}

const CartItem: React.FC<Props> = ({ item, kartaEkle, karttanSil }) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className="information">
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button size="small" disableElevation variant="contained" onClick={() => kartaEkle(item)}>+</Button>
                    <p>{item.amount}</p>
                    <Button size="small" disableElevation variant="contained" onClick={() => karttanSil(item.id)}>-</Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} />
        </Wrapper>
    )
}

export default CartItem
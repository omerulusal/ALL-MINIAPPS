import { Wrapper } from "../App.styles"
import CartItem from "../CartItem/CartItem"
import { CartItemType } from "../App"

type Props = {
    cartItems: CartItemType[]
    kartaEkle: (clickedItem: CartItemType) => void
    karttanSil: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, kartaEkle, karttanSil }) => {

    const toplam = (items: CartItemType[]): number => {
        return items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
    }

    return (
        <Wrapper>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    kartaEkle={kartaEkle}
                    karttanSil={karttanSil}
                />
            ))}
            <h3>Toplam : {toplam(cartItems).toFixed(2)}</h3>
        </Wrapper>
    )
}

export default Cart
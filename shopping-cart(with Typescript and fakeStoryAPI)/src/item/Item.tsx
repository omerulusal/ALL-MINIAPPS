import { CartItemType } from "../App"
import { Wrapper } from "./item.sytles"
import { Button } from "@mui/material"
type Props = {
    item: CartItemType,
    kartaEkle: (item: CartItemType) => void 
}
const Item: React.FC<Props> = ({ item ,kartaEkle}) => {
    return (
        <Wrapper> 
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>{item.price}</h3>
                <p>{item.category}</p>
            </div>
            <Button onClick={() => kartaEkle(item)}>Karta Ekle</Button>
        </Wrapper>
    )
}

export default Item
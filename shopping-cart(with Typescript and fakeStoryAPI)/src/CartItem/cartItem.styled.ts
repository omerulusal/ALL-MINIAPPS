import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
font-size: 1.2rem;
border-bottom: 1px solid lightblue;
padding-bottom: 20px;

div {
    flex: 1;
}
.information, .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
}
img {
    max-height: 80px;
    object-fit: cover;
    margin-left: 40px;
}

`
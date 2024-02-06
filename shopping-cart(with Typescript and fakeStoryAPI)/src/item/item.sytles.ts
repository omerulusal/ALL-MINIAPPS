import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 1px solid black;
    border-radius: 20px;


    button {
        border-radius: 0;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 25px;
        padding: 1rem;
        height: 100%;
    }


`
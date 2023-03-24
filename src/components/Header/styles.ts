import styled from "styled-components";




export const  Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    background-color: black;
    color: grey;

    padding: 2rem 8rem;

    img{
        width: 40px;
        height: 40px;
    }
`

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

`

export const Button = styled.button`
    padding: 0.5rem;
    cursor: auto;

    background: transparent;
    border: 2px solid green;
    border-radius: 12px;
    color: grey;

    font-size: 15px;
    font-weight: bold;
    
`


import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    height: 90vh;

    background-color: grey;

`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    padding: 2rem;
    box-shadow: 3px 5px 0px 0px rgba(0,0,0,0.75);
    border-radius: 12px;
    border: 2px solid;

    input{
        width: 20rem;
        height: 1.7rem;
    }

`

export const ButtonCreate = styled.button`
    width: 100px;
    height: 27px;

    color: #ffff;
    background-color: #228B22;
    border: 0px;
    border-radius: 9px;

    cursor: pointer;
`


export const NoCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    color: green;

    margin-top: 0.8rem;

    font-size: 16px;
`

export const ButtonLogin = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   background: transparent;
   border: 0px;

   cursor: pointer;

   font-weight: bold;
   text-transform: uppercase;

`

export const InputCheck = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    width: 50%;

    input{
        cursor: pointer;
    }

    label{

        
        white-space: nowrap;
        font-size: 18px;
        font-weight: bold;
    }

`
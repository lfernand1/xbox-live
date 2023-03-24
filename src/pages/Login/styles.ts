import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: 90vh;

    background-color: gray;
    
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    padding: 3rem;
    box-shadow: 6px 3px 0px 0px rgba(0,0,0,0.75);
    border-radius: 8px;
    border: 2px solid;
   
    
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    input{
        width: 17rem;
        height: 2rem;
    }

   
`

export const ButtonLogin = styled.button`
    width: 130px;
    height: 30px;

    color: #ffff;
    background-color: #228B22;
    border: 3px;
    border-radius: 9px;

    cursor: pointer;
`

export const NoCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    margin-top: 0.8rem;

    font-size: 14px;
`

export const ButtonRegister = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   background: transparent;
   border: 0px;

   cursor: pointer;

   font-weight: bold;

`
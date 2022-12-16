import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;

    font-size: 1.2rem;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;


    &:disabled {
        opacity: 0.7;
        background-color: grey;
    }

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`
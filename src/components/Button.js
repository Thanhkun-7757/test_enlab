import styled from 'styled-components';


export const Button = styled.button`
    border: 1px solid #616A94;
    border-radius: 50px;
    padding: 15px 30px;
    text-decoration: none;
    color: white;
    background-color: red;
    transition: 0.3s;
    font-size: 1em;
    cursor: pointer;
    outline: none;

    &:hover {
        color: #616A94;
        background-color: red;
    }
`;

export default Button

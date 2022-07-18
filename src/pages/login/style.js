// .container-fluid {
//     height: 100vh;

// }

import styled from 'styled-components';

const LoginContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* color: #023373; */
    background-image: url("https://picsum.photos/1600/900");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
`;

export const Header = styled.h1`
    font-size: 35px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const Form = styled.form`
    background-color: rgba(80,173,191,0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 550px;
    height: 550px;
    border: 2px solid white;
`;

export const Input = styled.input`
padding:0.5rem;
font-size: 1.2rem;
background-color: rgb(50, 50, 50);
border: none;
border-radius: 4px;
color: white;
&::placeholder{
    color: rgb(150, 150, 150);
}
&.submit {
    cursor: pointer;
    color: white;
}
&.submit:hover {
    transform: scale(0.95);
}
`;



export default LoginContainer;

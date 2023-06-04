import React from 'react';
import styled, { css } from 'styled-components/macro';
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({ props }) => {

    const startQuiz = () => props(true)

    return (
        <Intro>
            <i class='fas fa-robot'></i>
            <br></br>
            <Button onClick={startQuiz} css={btnCSS}>Start Quiz !</Button>
        </Intro>
    )
}

export default Start

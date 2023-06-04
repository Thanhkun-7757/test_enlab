import styled from 'styled-components';
import { Button } from './Button';

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({ pts }) => {

    const refreshPage = () => window.location.reload();

    return (
        <>{pts >= 5 ? (<Title>Congratulations!!</Title>) : (<Title>Completed</Title>)}
            <Points>Better luck next time! {pts}/10 correct answer</Points>
            <Button onClick={refreshPage}>Play Again</Button>
        </>
    )
}

export default GameOver

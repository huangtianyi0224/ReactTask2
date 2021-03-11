import React, { useState, useEffect } from 'react';

import { StarsContainer,NumberContainer,GameContainer,Body,Timer, Help } from './styles';

import PlayNumber from '../PlayNumber/index';
import StarDisplay from '../StarDisplay/index';
import PlayAgain from '../PlayAgain/index';

const Game = (props) => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([])
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
      // setTimeout side effect
      if(secondsLeft > 0 && availableNums.length > 0 ) { 
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    });

    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    // const gameIsWon = availableNums.length;
    // const gameIsLost = secondsLeft === 0;
    const gameStatus = availableNums.length === 0
      ? 'won'
      : secondsLeft === 0 ? 'lost' : "active";

    const resetGame = () => {
      setStars(utils.random(1, 9));
      setAvailableNums(utils.range(1, 9));
      setCandidateNums([]);
    };
    
    const numberStatus = (number) => {
      if (!availableNums.includes(number)) {
        return 'used';
      }
      if (candidateNums.includes(number)) {
        return candidatesAreWrong ? 'wrong' : 'candidate'     
      }
      return 'available';
    }

    const onNumberClick = (number, currentStatus) => {
      // currentState => newState
      if (gameStatus !== 'active' || currentStatus == 'used') {
        return;
      }
      // candidateNums
      const newCandidateNums = 
        currentStatus === 'available'
          ? candidateNums.concat(number)
          : candidateNums.filter(cn => cn !== number);

      if (utils.sum(newCandidateNums) !== stars) {
        setCandidateNums(newCandidateNums);
      } else {
        const newAvailableNums = availableNums.filter(
          n => !newCandidateNums.includes(n)
        );
        // redraw stars(from stars' available)
        setStars(utils.randomSumIn(newAvailableNums, 9));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }

    }
    
    return (
        <GameContainer>
            <Help>
            Pick 1 or more numbers that sum to the number of stars
            </Help>
            <Body>
                <StarsContainer>
                    {gameStatus !== 'active' ?
                      (<PlayAgain 
                          onClick={props.startNewGame} 
                          content="Play Again" 
                          gameStatus={gameStatus} 
                        />) :
                      (<StarDisplay count={stars} utils={utils.range} />)
                    }
                </StarsContainer>
                <NumberContainer>
                    {utils.range(1, 9).map(number => 
                        <PlayNumber 
                          key={number} 
                          number={number}
                          status={numberStatus(number)}
                          colors={colors}
                          onClick={onNumberClick}
                        />
                    )}
                </NumberContainer>
            </Body>
            <Timer>Time Remaining: {secondsLeft}</Timer>
        </GameContainer>
    );
  };

  // Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
  
  // Math science
  const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  
    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
  
    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length - 1)];
    },
  };

export default Game;
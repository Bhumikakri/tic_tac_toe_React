import React, { useRef, useState } from 'react';
import "./tictoe.css";
import circle_I from './Images/circle.png';
import cross_I from './Images/cross.png';


let data = ["", "", "", "", "", "", "", "", ""];

const Tictactoe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let msgRef = useRef();

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let boxess = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2) {
            e.target.innerHTML = `<img src='${cross_I}'/>`;
            data[num] = "x";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src='${circle_I}'/>`;
            data[num] = "o";
            setCount(++count);
        }

        checkwins();
    }

    const checkwins = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            wins(data[2]);
        }
        else if(data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            wins(data[5]);
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            wins(data[8]);
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            wins(data[6]);
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            wins(data[7]);
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            wins(data[8]);
        }
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            wins(data[8]);
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            wins(data[6]);
        }
    }

    const wins = (winner) => {
        setLock(true);
        if(winner === "x"){
            msgRef.current.innerHTML = `Congratulation team  : <img src='${cross_I}'/> Wins`
        }else if(winner === "o"){
            msgRef.current.innerHTML = `Congratulation team  : <img src='${circle_I}'/> Wins`
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        msgRef.current.innerHTML = `Tic Tac Toe Game `
        boxess.map((e)=>{
            e.current.innerHTML="";
        })
    }

    return (
        <div className='Tictoe'>
            <h1 ref={msgRef} >Tic Tac Toe Game </h1>
            <div className='gamebox'>
                <div className='row1'>
                    <div className='boxes' ref={box1}  onClick={(e) => { toggle(e, 0) }}></div>
                    <div className='boxes' ref={box2} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className='boxes' ref={box3} onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' ref={box4} onClick={(e) => { toggle(e, 3) }}></div>
                    <div className='boxes' ref={box5} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className='boxes' ref={box6} onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className='boxes' ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className='boxes' ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Tictactoe
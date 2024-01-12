"use client";
import React, { useEffect, useState } from "react";
import Square from "./components/Square";
import Info from "./components/Info";
import Alert from "./components/Alert";

export type CellsType = string[];
export type TurnType = "circle" | "cross";


const random = (length: number) => {
  return Math.floor(Math.random() * length)
}

const compose: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


export default function Home() {
  const player: number = random(2);
  const [cells, setCells] = useState<CellsType>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turn, setTurn] = useState<TurnType>("circle");
  const [isWin, setIsWin] = useState<TurnType | null>(null)
  const [noWin, setNoWin] = useState<boolean>(false)

  useEffect(() => {
    setTurn(player === 0 ? "circle" : "cross");
  }, []);

  useEffect(() => {
    compose.map((combo) => {      
      const isCircleWins = combo.every(e => cells[e] === 'circle');
      const isCrossWins = combo.every(e => cells[e] === 'cross');
      if (isCircleWins) {
        setIsWin('circle')
      }
      if (isCrossWins) {
        setIsWin("cross")
      }
    })
  }, [cells]);

  useEffect(() => {
    if (cells.every(cell => cell !== '') && isWin === null) {
      setNoWin(true)
    }
  }, [cells, isWin])
  

  return (
    <main className="h-screen flex flex-col space-y-4 justify-center items-center">
      <div> 
        <h1 className="text-2xl font-semibold shadow">TIC TAC TOE</h1>
      </div>
      <div className="w-96 h-96 md:w-[30rem] md:h-[30rem] flex flex-wrap justify-center xo-panel p-10 border-none">
        {cells.map((cell, index) => (
          <Square
            key={index}
            id={index}
            turn={turn}
            setTurn={setTurn}
            cells={cells}
            setCells={setCells}
            isWin={isWin}
          />
        ))}
      </div>
      <div className="text-xl">
        {isWin === null && !noWin && <Alert className="bg-blue-700">It`&apos;s <span className="capitalize">{turn}</span>`&apos;s turn to play</Alert> }
        {isWin ? isWin && <Alert className="bg-green-700">{isWin + " wins!"}</Alert> : noWin && <p className="font-bold py-2 px-4 rounded text-white bg-blue-700">No winner</p> }
      </div>


      <Info />
    </main>
  );
}

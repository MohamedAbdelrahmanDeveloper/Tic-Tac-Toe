import Image from "next/image";
import { CellsType, TurnType } from "../page";

type SquareProps = {
  id: number;
  turn: TurnType;
  setTurn: React.Dispatch<React.SetStateAction<TurnType>>;
  cells: CellsType;
  setCells: React.Dispatch<React.SetStateAction<CellsType>>;
  isWin: TurnType | null;
  // els: number[]
};

export default function Square({id, turn, setTurn, cells, setCells, isWin}: SquareProps) {
  const handelClick = (e:React.MouseEvent<HTMLDivElement> ) => { 
    const isEmpty = !cells[id];
    if (isEmpty && !isWin) {
       changeCells(turn)
    }
  }

  const changeCells = (e: TurnType) => {
    setTurn(e === 'circle' ? 'cross' : 'circle')
    const newCells = [...cells];
    newCells[id] = e;
    setCells(newCells)
  }


  // const isElement = () => {
  //   if (isWin && els.findIndex(e => e === id) >= 0) {
  //     return true
  //   }
  //   return false
  // }
  return (
    <div className="w-2/6 h-2/6 text-7xl" onClick={handelClick}>
      <div className={`cursor-pointer w-full h-full flex justify-center items-center ${cells[id] === 'circle' && 'text-[#ff6169]'}`}>
        {cells[id] === 'circle' && <Image className="rounded-full" width={100} height={100} src="/o.png" alt="o" /> || cells[id] === 'cross' && <Image className="rounded-full" width={100} height={100} src="/x.png" alt="x" />}
      </div>
    </div>
  );
};

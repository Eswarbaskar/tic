import React, { useState } from 'react'
import "../components/Board.css"

function Board() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [player, setPlayer] = useState("X")
    const win =[[0,1,2],[4,5,6],[7,8,9],[0,4,7],[1,5,8],[2,6,9],[0,5,9],[2,5,7]]
    
    
    let currentPlayer = (idx) => {
        if(board[idx]!=="")return;
         let res = board.map((ele, i) => {
            if (i === idx) return player;
            return ele;
        });
        setBoard(res);
        setPlayer(player === "X" ? "O" : "X")
        checkwin(res)
    

    }
    
    let checkwin = (board)=>{
       for (let index = 0; index < win.length; index++) {
          const [x,y,z] = win[index]
        if(board[x] && board[x] === board[y] && board[y] === board[z] && board[z] ){
            console.log(board[x])  
            return alert(board[x])
           
        }
       }
    }
    return (
        <>
            <h4 className='player'>current player {player}</h4>
            <div className='board'>
                {
                    board.map((val, i) => {
                        return (
                            <div key={i} className='board_tiles' onClick={() =>{ currentPlayer(i) }}>
                                {val}
                            </div>
                        )
                    })
                }


            </div>
            
        </>
    )
}

export default Board
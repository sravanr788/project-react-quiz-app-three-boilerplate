import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
         <h1>Quiz App</h1>
         <Link to={"/quiz"}>
            <button className="play" onClick={()=>{props.setQno(0)}}>Play</button>
        </Link>
    </div>
  )
}

export default Home
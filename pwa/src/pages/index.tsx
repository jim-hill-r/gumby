import React, { useState } from "react"
import { Link } from "gatsby"

const MOVEMENT_OPTIONS:String[] = [
  "Climb",
  "Run",
  "Walk",
  "Bike",
  "Swim"
]

const randomMovement = () => {
  const m = MOVEMENT_OPTIONS[Math.floor(Math.random() * MOVEMENT_OPTIONS.length)]
  console.log(m)
  return m
}

export default function IndexPage () {
  const [ movement, setMovement ] = useState<String>(randomMovement())

  const updateMovement = () => {
    setMovement(randomMovement())
  }

  return (
    <>
      <button onClick={updateMovement}>
        Let's go!
      </button>
      <div>
        {movement}
      </div>
      <Link to="/plan">Make a plan</Link>
    </>
  )
}
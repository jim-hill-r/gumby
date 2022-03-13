import React, { useState } from "react"

const getWeek = (date:Date) => {
  return 17
}

export default function PlanPage () {
  const [ startWeek, setStartWeek ] = useState<number>(getWeek(new Date(Date.now())))
  const [ startDistance, setStartDistance ] = useState<number>(1)
  const [ startPace, setStartPace ] = useState<number>(10)

  const [ targetWeek, setTargetWeek ] = useState<number>(startWeek + 18)
  const [ targetDistance, setTargetDistance ] = useState<number>(startDistance + 2)
  const [ targetPace, setTargetPace ] = useState<number>(startPace - 1)

  const weeks = []
  const numWeeks = targetWeek - startWeek
  const gainsRate = (targetDistance/startDistance)**(1/numWeeks)
  for (let i = 0; i<=numWeeks; i++) {
    weeks.push({
      weekNumber: i + startWeek,
      distance: startDistance * (gainsRate**i),
      pace: "TODO",
      percentChange: gainsRate
    })
  }

  return (
    <>
      <h3>Start</h3>
      <div>
        <label>Week</label>
        <input type="number" value={startWeek} onChange={(event) => setStartWeek(parseInt(event.target.value))}></input>
      </div>
      <div>
        <label>Distance</label>
        <input type="number" value={startDistance} onChange={(event) => setStartDistance(event.target.value)}></input>
      </div>
      <div>
        <label>Pace</label>
        <input type="number" value={startPace} onChange={(event) => setStartPace(event.target.value)}></input>
      </div>
      
      <h3>Target</h3>
      <div>
        <label>Week</label>
        <input type="number" value={targetWeek} onChange={(event) => setTargetWeek(parseInt(event.target.value))}></input>
      </div>
      <div>
        <label>Distance</label>
        <input type="number" value={targetDistance} onChange={(event) => setTargetDistance(event.target.value)}></input>
      </div>
      <div>
        <label>Pace</label>
        <input type="number" value={targetPace} onChange={(event) => setTargetPace(event.target.value)}></input>
      </div>

      <h3>Plan</h3>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Distance</th>
            <th>Pace</th>
            <th>Gains</th>
          </tr>
        </thead>
        <tbody>
        {weeks.map((w,idx) => {
          return <tr key={idx}>
            <th>
              {w.weekNumber}
            </th>
            <th>
              {w.distance.toFixed(2)}
            </th>
            <th>
              {w.pace}
            </th>
            <th>
              {((w.percentChange - 1)*100).toFixed(2)} %
            </th>
          </tr>
        })}
        </tbody>
      </table>
    </>
  )
}
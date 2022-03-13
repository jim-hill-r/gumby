import React, { useState } from "react"
import  '../styles/grid.css'

const toPercent = (float:number) => {
  if (float > 1) {
    return `${((float - 1) * 100).toFixed(2)}%`
  } else {
    return `${((1 - float) * 100).toFixed(2)}%`
  }
}
const getWeek = (date:Date) => {
  return 17
}

const calculateGainRate = (start, target, iterations) => {
  return ( target / start ) ** ( 1 / iterations)
}

const getTriathlonPlan = (swimStart, swimTarget, bikeStart, bikeTarget, runStart, runTarget, weeks) => {
  const swimDistanceRate = calculateGainRate(swimStart.distance,swimTarget.distance,weeks)
  const swimPaceRate = calculateGainRate(swimStart.pace,swimTarget.pace,weeks)
  const bikeDistanceRate = calculateGainRate(bikeStart.distance,bikeTarget.distance,weeks)
  const bikePaceRate = calculateGainRate(bikeStart.pace,bikeTarget.pace,weeks)
  const runDistanceRate = calculateGainRate(runStart.distance,runTarget.distance,weeks)
  const runPaceRate = calculateGainRate(runStart.pace,runTarget.pace,weeks)

  const weeklyPlan = []
  for (let i=0; i<=weeks; i++) {
    const swim = {
      distance: swimStart.distance * (swimDistanceRate ** i),
      pace: swimStart.pace * (swimPaceRate ** i)
    }
    const bike = {
      distance: bikeStart.distance * (bikeDistanceRate ** i),
      pace: bikeStart.pace * (bikePaceRate ** i)
    }
    const run = {
      distance: runStart.distance * (runDistanceRate ** i),
      pace: runStart.pace * (runPaceRate ** i)
    }
    const brick = {

    }
    const strength = {

    }
    const cross = {

    }
    const gains = {
      swim: {
        distance: swimDistanceRate,
        pace: swimPaceRate
      },
      bike: {
        distance: bikeDistanceRate,
        pace: bikePaceRate
      },
      run: {
        distance: runDistanceRate,
        pace: runPaceRate
      }
    }
    weeklyPlan.push({
      swim,
      bike,
      run,
      brick,
      strength,
      cross,
      gains
    })
  }
  return weeklyPlan
}

export default function PlanPage () {
  const [ startWeek, setStartWeek ] = useState<number>(getWeek(new Date(Date.now())))
  const [ startSwimDistance, setStartSwimDistance ] = useState<number>(1)
  const [ startSwimPace, setStartSwimPace ] = useState<number>(10)
  const [ startBikeDistance, setStartBikeDistance ] = useState<number>(1)
  const [ startBikePace, setStartBikePace ] = useState<number>(10)
  const [ startRunDistance, setStartRunDistance ] = useState<number>(1)
  const [ startRunPace, setStartRunPace ] = useState<number>(10)

  const [ targetWeek, setTargetWeek ] = useState<number>(startWeek + 18)
  const [ targetSwimDistance, setTargetSwimDistance ] = useState<number>(1)
  const [ targetSwimPace, setTargetSwimPace ] = useState<number>(10)
  const [ targetBikeDistance, setTargetBikeDistance ] = useState<number>(1)
  const [ targetBikePace, setTargetBikePace ] = useState<number>(10)
  const [ targetRunDistance, setTargetRunDistance ] = useState<number>(1)
  const [ targetRunPace, setTargetRunPace ] = useState<number>(10)

  const weeks = targetWeek - startWeek
  let plan = getTriathlonPlan(
  {
    distance: startSwimDistance,
    pace: startSwimPace
  },
  {
    distance: targetSwimDistance,
    pace: targetSwimPace
  },
  {
    distance: startBikeDistance,
    pace: startBikePace
  },
  {
    distance: targetBikeDistance,
    pace: targetBikePace
  },
  {
    distance: startRunDistance,
    pace: startRunPace
  },
  {
    distance: targetRunDistance,
    pace: targetRunPace
  },
  weeks
  )

  return (
    <>
      <div className="row">
        <div className="column">
          <h3>Start</h3>
          <div>
            <label>Week</label>
            <input type="number" value={startWeek} onChange={(event) => setStartWeek(parseInt(event.target.value))}></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h4>Swim</h4>
          <div>
            <label>Distance</label>
            <input type="number" value={startSwimDistance} onChange={(event) => setStartSwimDistance(parseFloat(event.target.value))}></input>
          </div>
          <div>
            <label>Pace</label>
            <input type="number" value={startSwimPace} onChange={(event) => setStartSwimPace(parseFloat(event.target.value))}></input>
          </div>
        </div>
        <div className="column">
        <h4>Bike</h4>
          <div>
            <label>Distance</label>
            <input type="number" value={startBikeDistance} onChange={(event) => setStartBikeDistance(parseFloat(event.target.value))}></input>
          </div>
          <div>
            <label>Pace</label>
            <input type="number" value={startBikePace} onChange={(event) => setStartBikePace(parseFloat(event.target.value))}></input>
          </div>
        </div>
        <div className="column">
        <h4>Run</h4>
          <div>
            <label>Distance</label>
            <input type="number" value={startRunDistance} onChange={(event) => setStartRunDistance(parseFloat(event.target.value))}></input>
          </div>
          <div>
            <label>Pace</label>
            <input type="number" value={startRunPace} onChange={(event) => setStartRunPace(parseFloat(event.target.value))}></input>
          </div>
        </div>
      </div> 
      
      <div className="row">
        <div className="column">
          <h3>Target</h3>
          <div>
            <label>Week</label>
            <input type="number" value={targetWeek} onChange={(event) => setTargetWeek(parseInt(event.target.value))}></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h4>Swim</h4>
          <div>
            <label>Distance</label>
            <input type="number" value={targetSwimDistance} onChange={(event) => setTargetSwimDistance(parseFloat(event.target.value))}></input>
          </div>
          <div>
            <label>Pace</label>
            <input type="number" value={targetSwimPace} onChange={(event) => setTargetSwimPace(parseFloat(event.target.value))}></input>
          </div>
        </div>
        <div className="column">
        <h4>Bike</h4>
          <div>
            <label>Distance</label>
            <input type="number" value={targetBikeDistance} onChange={(event) => setTargetBikeDistance(parseFloat(event.target.value))}></input>
          </div>
          <div>
            <label>Pace</label>
            <input type="number" value={targetBikePace} onChange={(event) => setTargetBikePace(parseFloat(event.target.value))}></input>
          </div>
        </div>
        <div className="column">
        <h4>Run</h4>
          <div>
            <label>Distance</label>
            <input type="number" value={targetRunDistance} onChange={(event) => setTargetRunDistance(parseFloat(event.target.value))}></input>
          </div>
          <div>
            <label>Pace</label>
            <input type="number" value={targetRunPace} onChange={(event) => setTargetRunPace(parseFloat(event.target.value))}></input>
          </div>
        </div>
      </div> 

      <h3>Plan</h3>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th colSpan={4}>Swim</th>
            <th colSpan={4}>Bike</th>
            <th colSpan={4}>Run</th>
            <th colSpan={4}>Bonus</th>
          </tr>
          <tr>
            <th></th>
            <th colSpan={2}>Distance</th>
            <th colSpan={2}>Pace</th>
            <th colSpan={2}>Distance</th>
            <th colSpan={2}>Pace</th>
            <th colSpan={2}>Distance</th>
            <th colSpan={2}>Pace</th>
            <th colSpan={2}>Distance</th>
            <th colSpan={2}>Pace</th>
          </tr>
        </thead>
        <tbody>
        {plan.map((w,idx) => {
          return <tr key={idx}>
            <td>
              {idx + startWeek}
            </td>
            <td>
              {w.swim.distance.toFixed(2)}
            </td>
            <td>
              {toPercent(w.gains.swim.distance)}
            </td>
            <td>
              {w.swim.pace.toFixed(2)}
            </td>
            <td>
              {toPercent(w.gains.swim.pace)}
            </td>
            <td>
              {w.bike.distance.toFixed(2)}
            </td>
            <td>
              {toPercent(w.gains.bike.distance)}
            </td>
            <td>
              {w.bike.pace.toFixed(2)}
            </td>
            <td>
              {toPercent(w.gains.bike.pace)}
            </td>
            <td>
              {w.run.distance.toFixed(2)}
            </td>
            <td>
              {toPercent(w.gains.run.distance)}
            </td>
            <td>
              {w.run.pace.toFixed(2)}
            </td>
            <td>
              {toPercent(w.gains.run.pace)}
            </td>
            <td>
            </td>
          </tr>
        })}
        </tbody>
      </table>
    </>
  )
}
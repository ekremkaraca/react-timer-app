import React, { useState, useEffect } from 'react'

const App = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const toggle = () => setIsActive(!isActive)

  const reset = () => {
    setSeconds(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[isActive, seconds])

  return(
    <div>
      <div>
        Seconds: {seconds}
      </div>
      <div>
        <button onClick={toggle}>
          { isActive ? 'Pause' : 'Start' }
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App

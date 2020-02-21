import React, { useState, useEffect } from 'react'
import { Button, Grid, Statistic } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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
    <Grid container centered columns={4}>
      <Grid.Row centered columns={2}>
        <Statistic>
          <Statistic.Value>
            {seconds}
          </Statistic.Value>
          <Statistic.Label>
            Seconds
          </Statistic.Label>
        </Statistic>
      </Grid.Row>
      <Grid.Row centered columns={2}>
        <Button primary onClick={toggle}>
          { isActive ? 'Pause' : 'Start' }
        </Button>
        <Button secondary onClick={reset}>
          Reset
        </Button>
      </Grid.Row>
    </Grid>
  )
}

export default App

import React, { useState } from 'react'

import { Box } from '@mui/material'
import Exercies from '../components/Exercies'
import HeroBanner from '../components/HeroBanner'
import SearchExercies from '../components/SearchExercies'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <HeroBanner />
      <SearchExercies
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercies
        exercises={exercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  )
}

export default Home

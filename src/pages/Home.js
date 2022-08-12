import React, { useState } from 'react'

import { Box } from '@mui/material'
import Exercies from '../components/Exercies'
import HeroBanner from '../components/HeroBanner'
import SearchExercies from '../components/SearchExercies'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercies />
      <Exercies />
    </Box>
  )
}

export default Home

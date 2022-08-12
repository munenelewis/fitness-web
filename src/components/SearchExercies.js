import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { excericesOptions, fetchData } from '../utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercies = ({ setExercises ,bodyPart , setBodyPart}) => {
  const [search, setSearch] = useState('')
  
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        excericesOptions,
      )
      console.log(data)
      setCategories(['All', ...data])
    }
    fetchCategories()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        excericesOptions,
      )

      const searchEcercies = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search),
      )
      setSearch('')
      setExercises(searchEcercies)
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xs: '30px',
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excerices you <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: {
              lg: '1000px',
              xs: '350px',
            },
            backgroundColor: '#FFFFFF',
            borderRadius: '40px',
          }}
          height="76px"
          placeholder="Search Exercies"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#FFF',
            textTransform: 'none',
            width: {
              lg: '175px',
              xs: '80px',
            },
            fontSize: {
              lg: '20px',
              xs: ',24',
            },
            height: '50px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p:"20px"}}>
          <HorizontalScrollbar data={categories}  categories bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercies

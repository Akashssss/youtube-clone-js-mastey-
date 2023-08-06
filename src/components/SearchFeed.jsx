import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import {   Videos } from './index.js'
import { fetchFromAPI } from '../utils/fetchFromApi.js'
import { useParams } from 'react-router-dom'



export default function SearchFeed() {
  const [videos, setVideos] = useState([])
   const {searchTerm} =useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=50`).then((data) => { setVideos(data.items) })
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', overflowY: "scroll", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>Search Result for 
        <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

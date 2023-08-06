import React from 'react'
import { useState,useEffect } from 'react'
import { Box ,Typography ,Stack} from '@mui/material'
import { SideBar ,Videos  } from './index.js'
import { fetchFromAPI } from '../utils/fetchFromApi.js'
export default function Feed() {
  const [videos,setVideos] =useState([])
  const [selectedCategory ,setSelectedCategory] = useState('New')
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=50`).then((data)=>{setVideos(data.items)})
  } ,[selectedCategory])
  return (
   <Stack sx= {{flexDirection : {sx :"column" , md: "row"}}}> 
        <Box sx = {{height:{sx:"auto" ,md :'92vh'} ,
                     borderRight :"1px solid #3d3d3d" ,px:{sx:0 ,md:2}}}>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory ={setSelectedCategory} />
            <Typography className='copyright' variant = "body2"
            sx ={{mt:1.5 ,color :'#fff'  }}>
                     Clone ak 
            </Typography>
        </Box>
        <Box p={2} sx={{overflowY:'auto' , height:'90vh'  ,overflowY:"scroll",flex:2}}>
          <Typography variant = "h4" fontWeight="bold" mb={2} sx={{color:'white'}}>{selectedCategory} 
            <span style={{color:'#F31503'}}> videos</span>
          </Typography>
          <Videos videos ={videos}/>
        </Box>
   </Stack>
  )
}

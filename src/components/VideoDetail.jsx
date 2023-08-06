import React, { useEffect, useState } from 'react'
import {Link ,useParams} from 'react-router-dom'  ; 
import ReactPlayer from 'react-player' ;
import {Box, Stack,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import {Video} from './'
import { fetchFromAPI } from '../utils/fetchFromApi';
export default function VideoDetail() {
  const {id} =useParams() ;
  const[videoDetail ,setVideoDetail] = useState(null)
  useEffect(()=>{
    fetchFromAPI( `videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]))
  },[id]) ; 
  if(!videoDetail?.snippet)
  return 'loading...'

  const {snippet:{title ,channelId ,channelTitle} ,statistics:{viewCount, likeCount}}= videoDetail
  return (
    <Box minHeight='95vh'>
   <Stack direction={{xs:'column' ,md:'row'}}>
      <Box flex={1}>
        <Box sx= {{width:'100%' ,position:'sticky' ,top:'86px'}}>
             <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls
             />
             <Typography color="#fff" variant= "h5" fontWeight="bold" p={2}>
              {title}  
               </Typography>
             <Stack direction="row" justifyContent="space-between" sx= {{color:"#fff"}} py={1} px= {1}>
              <Link to = {`/channel/${channelId}`}>
                 <Typography variant={{sm:'subtitle1' ,md:'h6'}} color ="#fff">
                  {channelTitle}
                  <CheckCircle sx= {{fontSize:'12px' ,color:'gray' ,ml:'5px'}}/>
                 </Typography>
              </Link>
              <Stack direction="row" gap ="20px" alignItems="center">
                <Typography variant="body1" sx= {{opacity:"0.7"  }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
             </Stack>
          
        </Box>
      </Box>
   </Stack>
    </Box>
  )
}

import React from 'react'
import { Stack ,Box } from '@mui/material'
import {VideoCard ,ChannelCard} from './index'


export default function Videos({videos}) {
    console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {videos.map((item ,idx)=>(
            <Box key={idx}>
              {item.id.videoId && <VideoCard video ={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item} marginTop="0px" />}
            </Box>
        ))}
    </Stack>

  )
}

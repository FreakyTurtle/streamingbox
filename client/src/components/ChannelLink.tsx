import { Backdrop, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Typography, Zoom } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Category, IChannel } from '../utils'

export const ChannelLink: React.FC<{Channel: IChannel, delay?: number}> = ({Channel, delay = 0}) => {
  const [loading, setloading] = useState(false)
  const makeCall = async () => {
    setloading(true)
    const path = Channel.categories.includes(Category.american) ? "connect" : "disconnect"
    const response = await axios.get(`http://localhost:8080/${path}`)
    if(response.status === 200) {
      return window.location.href = Channel.link
    }
    alert('There was an error, please contact support')
    setloading(false)
  }
  
  return (
    <>
    <Zoom in={true} style={{ transitionDelay: `${delay}ms` }}>
      <Grid item xs="auto">
        <Card sx={{ width: 260 }}>
          <CardActionArea
            onClick={() => {
              makeCall()
            }}
          >
            <CardMedia
              component="img"
              height={260}
              src={Channel.logo}
              alt={Channel.name}
              sx={{objectFit: 'contain', padding: 4}}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {Channel.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Zoom>
    <Backdrop
      sx={{backgroundColor:(theme) => `${theme.palette.primary.main}DB`,zIndex: (theme) => theme.zIndex.drawer + 1, flexDirection: 'column' }}
      open={loading}
    >
      <CircularProgress color="inherit" />
      <br/>
      <Typography variant="h4" sx={{fontWeight: 800}}>
        One moment. {Channel.categories.includes(Category.american) ? "Connecting to" : "Disconnecting from"} the Virtual Private Network
      </Typography>
    </Backdrop>
    </>
  )
}

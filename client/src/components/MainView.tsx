
import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { Category, ChannelList } from '../utils'
import { ChannelLink } from './ChannelLink'

export const MainView: React.FC<{searchTerm: string}> = ({searchTerm}) => {
  if(!searchTerm){
    return (
      <Grid container spacing={2}>
        {
          Object.values(Category).map((category) => {
            const channels = ChannelList.filter(chan => chan.categories.includes(category))
            return (
              <>
                <Grid item xs={12} sx={{borderBottom: 1, borderColor: "secondary.main"}}>
                  <Typography variant="h5">{category}</Typography>
                </Grid>
                {
                  channels.map((c, i) => <ChannelLink Channel={c} delay={i * 100} />)
                }
              </>
            )
          })
        }
      </Grid>
    )
  }

  const channels = ChannelList.filter(chan => {
    if(chan.name.toUpperCase().includes(searchTerm.toUpperCase())) return true
    if(chan.categories.find((c) => c.toUpperCase().includes(searchTerm.toUpperCase()))) return true
    return false
  })
  return (
    <Grid container spacing={2}>
      {
        channels.map((c, i) => <ChannelLink Channel={c} delay={i * 100} />)
      }
    </Grid>
  )
}

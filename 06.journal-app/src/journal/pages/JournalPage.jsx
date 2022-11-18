import React from 'react'
import { Typography } from '@mui/material'
import JournalLayout from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'

const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* NoteView */}
    </JournalLayout>
  )
}

export default JournalPage
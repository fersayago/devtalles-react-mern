import React from 'react'
import JournalLayout from '../layout/JournalLayout'
import { NothingSelectedView, NoteView } from '../views'

const JournalPage = () => {
  return (
    <JournalLayout>
      <NoteView />
    </JournalLayout>
  )
}

export default JournalPage
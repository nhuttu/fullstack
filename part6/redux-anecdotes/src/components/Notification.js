
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notififaction = useSelector(state => state  )
  console.log(notififaction)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notififaction}
    </div>

  )
}

export default Notification
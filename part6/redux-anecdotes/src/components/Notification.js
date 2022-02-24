import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification
  if (!notification){
    return null 
  }
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>

  )
}

const mapStatetoProps = state => {
  return {
    notification: state.notification
  }
} 

const ConnNoti = connect(mapStatetoProps)(Notification)

export default ConnNoti
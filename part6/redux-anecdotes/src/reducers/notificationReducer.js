const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'NEW_VOTE':
            return `you voted ${action.notification}`
        case 'NEW_ADD':
            return `you added ${action.notification}`
        case 'REMOVE_NOTI':
            return state = ''
        default:
            return state
    }
}

export const newVote = notification => {
    return {
        type: 'NEW_VOTE',
        notification
    }
}

export const newAdd = notification => {
    return {
        type: 'NEW_ADD', 
        notification
    }
}
export const removeNoti = () => {
    return {
        type: 'REMOVE_NOTI'
    }
}

export default notificationReducer                  
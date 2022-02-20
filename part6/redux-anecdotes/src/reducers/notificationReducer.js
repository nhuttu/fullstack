const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'NEW_VOTE':
            return `you voted ${action.notification}`
    }
}

export const newVote = notification => {
    return {
        type: 'NEW_VOTE',
        notification
    }
}
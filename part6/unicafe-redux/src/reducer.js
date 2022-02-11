const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      console.log(state)
      let newState1 = {
        good: state.good + 1,
        ok: state.ok,
        bad: state.bad
      }
      return newState1
    case 'OK':
      let newState2 = {
        good: state.good,
        ok: state.ok + 1,
        bad: state.bad
      }
      return newState2
    case 'BAD':
      let newState3 = {
        good: state.good,
        ok: state.ok,
        bad: state.bad + 1
      }
      return newState3

    case 'ZERO':
      const newState4 = {
        good: 0,
        ok: 0,
        bad: 0
      }
      return newState4

    default: return state
  }

}

export default counterReducer
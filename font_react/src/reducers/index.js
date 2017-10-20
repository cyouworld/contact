const open = (state=false, action) => {
  switch (action.type) {
    case 'IS_OPEN':
      return !state
    default:
      return state
  }
}
export default open
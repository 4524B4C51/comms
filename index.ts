const success = (payload: string|object) => {
  return {
    success: true,
    payload
  }
}
  
const failure = (message: string|object) => {
  return {
    success: false,
    message
  }
}

export {
  success,
  failure
}
const success = (payload: any) => {
    return {
        success: true,
        payload
    }
  }
  
const failure = (message: any) => {
  return {
      success: false,
      message
  }
}

export {
  success,
  failure
}
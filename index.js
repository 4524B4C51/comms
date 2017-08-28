const success = (payload) => {
  success: true,
  payload
}

const failure = (message) => {
  success: false,
  message
}

module.exports = {
  success,
  failure
}
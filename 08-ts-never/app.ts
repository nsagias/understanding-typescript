function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}
// utility function
generateError('Error', 500);
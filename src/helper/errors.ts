class DefaultError extends Error {
    public status: number
    public message: string
    constructor(status: number, message: string) {
      super(message)
      this.status = status
      this.message = message
    }
  }

class ValidationError extends DefaultError{
    constructor(message: string = "Invalid Params") {
        super(400, `${message}`)
    }
}
class NotFoundError extends DefaultError{
    constructor(message: string = "No existe el producto") {
        super(404, `${message}`)
    }
}

export { ValidationError, NotFoundError }
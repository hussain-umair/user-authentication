class FormattableError extends Error {
  constructor({ name, statusCode, message, data }) {
    if (!message) {
      throw new Error(
        'InsufficientArguments: "message" is required to instantiate FormattableError',
      )
    }

    if (!name) {
      throw new Error(
        'InsufficientArguments: "name" is required to instantiate FormattableError',
      )
    }

    if (!statusCode) {
      throw new Error(
        'InsufficientArguments: "statusCode" is required to instantiate FormattableError',
      )
    }

    super(message)
    this.name = name
    this.message = message
    this.statusCode = statusCode
    this.data = data
  }

  serialize() {
    const { name, statusCode, message, data } = this

    return {
      name,
      statusCode,
      message,
      data,
    }
  }
}

export default FormattableError

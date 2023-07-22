import FormattableError from './Formattable-error'

const createError = ({ name, statusCode }) => {
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

  return class extends FormattableError {
    constructor(message, data = {}) {
      super({
        name,
        statusCode,
        message,
        data,
      })
    }
  }
}

export default createError

import createError from './create-error'

export const BadRequestError = createError({
  name: 'BadRequestError',
  statusCode: 400,
})
export const AuthenticationError = createError({
  name: 'AuthenticationError',
  statusCode: 401,
})

import { LOGIN } from './types'

export const login = (email, password) => {
  const token = 'aksdjfaoidsfj12308rfa0fn23fna'

  return {
    type: LOGIN,
    token
  }
}

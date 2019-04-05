import { LOGIN } from './actionTypes'

export const login = (email, password) => {
  const token = 'aksdjfaoidsfj12308rfa0fn23fna'

  return {
    type: LOGIN,
    payload: token
  }
}

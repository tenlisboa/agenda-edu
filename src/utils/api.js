import axios from 'axios'

export default axios.create({
  baseURL: 'https://frontend-test.agendaedu.com/api',
  headers: { 'Content-Type': 'application/json' }
})

import { STORAGE_KEY } from './store'
import createLogger from '../middlewares/logger'

const localStorageMiddleware = {
  onMutation (mutation, { notes }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStorageMiddleware]
  : [localStorageMiddleware]

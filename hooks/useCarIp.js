import createPersistedState from 'use-persisted-state'
const usePersistedState = createPersistedState('car-ip')

export default function useCarIp() {
  return usePersistedState('')
}

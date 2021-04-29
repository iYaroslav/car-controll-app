import createPersistedState from 'use-persisted-state'
const useCounterState = createPersistedState('car-ip')

const useCarIp = initialCount => {
  return useCounterState(initialCount)
}

export default useCarIp

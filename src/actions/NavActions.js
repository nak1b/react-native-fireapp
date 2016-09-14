// Action Types

export const NAV_PUSH = 'NAV_PUSH'
export const NAV_POP = 'NAV_POP'
export const NAV_RESET = 'NAV_RESET'
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY'
export const NAV_JUMP_TO_KEY = 'NAV_JUMP_TO_KEY'


//Action Creators

export function navigatePush(state) {
  state = typeof state === 'string' ? { key: state, title: state } : state
  return {
    type: NAV_PUSH,
    state
  }
}

export function navigatePop() {
  return {
    type: NAV_POP
  }
}

export function navigateReset(routes, index) {
  return {
    type: NAV_RESET,
    index,
    routes
  }
}

export function navigateJumpToKey(key) {
  return {
    type: NAV_JUMP_TO_KEY,
    key
  }
}

export function navigateJumpToIndex(index) {
  return {
    type: NAV_JUMP_TO_INDEX,
    index
  }
}

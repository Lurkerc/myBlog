export const state = {
  lock: false /* 是否被锁定 */
}

export const mutations = {
  lock (state, status) {
    state.lock = status
  }
}

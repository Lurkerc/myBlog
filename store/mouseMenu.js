export const state = {
  open: false /* 右键菜单打开状态 */
}

export const mutations = {
  open (state, status) {
    state.open = status
  }
}

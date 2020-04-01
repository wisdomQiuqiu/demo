export default (authCore: { checkAuth: any }) => {
  return {
    inserted: (el: { remove: any }, binding: { [key: string]: any }) => {
      const { value } = binding
      const hasAuth = authCore.checkAuth(value)
      if (!hasAuth) {
        el.remove()
      }
    }
  }
}

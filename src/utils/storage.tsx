export default {
  /**
   * Set a value to local storage
   *
   * @param {string} key
   * @param {*} value
   */
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * Get a value from local storage
   *
   * @param {string} key
   * @returns {*}
   */
  get(key: string) {
    const value = localStorage.getItem(key)
    if (!value) return ""
    try {
      return JSON.parse(value)
    } catch (error) {
      return error
    }
  },
  /**
   * Remove a value from local storage
   *
   * @param {string} key
   */
  remove(key: string) {
    localStorage.removeItem(key)
  },
  /**
   * Clear all values from local storage
   */
  clear() {
    localStorage.clear()
  },

  /**
   * Set mobile to local storage
   *
   * @param {string} mobile
   */
  setMobile(mobile: string) {
    this.set("mobile", mobile)
  },
  /**
   * Get mobile from local storage
   *
   * @returns {string | null}
   */
  getMobile() {
    return this.get("mobile")
  },
  /**
   * Remove mobile from local storage
   */
  removeMobile() {
    this.remove("mobile")
  },
}

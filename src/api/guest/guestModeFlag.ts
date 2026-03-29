let _isGuestMode = false

export const setGuestModeFlag = (v: boolean) => {
  _isGuestMode = v
}

export const getGuestModeFlag = () => _isGuestMode

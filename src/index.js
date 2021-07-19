const jsonParse = (str) => {
  let res = null
  try {
    res = JSON.parse(str)
  } catch (e) {
    res = null
  }
  return res
}

const setItem = (key, data, useSession = false) => {
  if (useSession) {
    sessionStorage.setItem(key, JSON.stringify(data))
  } else {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

const removeItem = (key, useSession = false) => {
  if (useSession) {
    sessionStorage.removeItem(key)
  } else {
    localStorage.removeItem(key)
  }
}

const getItem = (key, useSession = false) => {
  const localStr = useSession ? sessionStorage.getItem(key) : localStorage.getItem(key)
  return jsonParse(localStr)
}

const jsonStorage = {
  setItem, getItem, removeItem
}

export default jsonStorage

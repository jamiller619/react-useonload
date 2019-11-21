import { useState, useEffect } from 'react'

const handleLoad = handleLoadCallback => Promise.resolve(handleLoadCallback())

const useOnload = handleLoadCallback => {
  const [{ isLoaded }, setState] = useState({
    isLoaded: false
  })

  useEffect(() => {
    if (isLoaded === false) {
      handleLoad(handleLoadCallback).then(() => {
        setState({
          isLoaded: true
        })
      })
    }
  }, [isLoaded])
}

export default useOnload

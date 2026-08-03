import { useEffect, useState } from 'react'
import { getVideos } from '../api/youtube'

const initialState = {
  videos: [],
  isLoading: true,
  error: null,
}

function useVideos(options) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const controller = new AbortController()

    async function loadVideos() {
      setState((current) => ({ ...current, isLoading: true, error: null }))

      try {
        const videos = await getVideos({ ...options, signal: controller.signal })

        setState({ videos, isLoading: false, error: null })
      } catch (error) {
        if (error.name === 'CanceledError' || error.code === 'ERR_CANCELED') return

        setState({ videos: [], isLoading: false, error })
        console.error(error)
      }
    }

    loadVideos()

    return () => {
      controller.abort()
    }
  }, [options])

  return state
}

export default useVideos

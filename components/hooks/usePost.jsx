import axios from "axios"
import { useEffect, useState } from "react"

export default function usePost(url, data, posted) {
  const [isPosted, setIsPosted] = useState(false)
  const [isPosting, setIsPosting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (posted){
      setIsPosting(true)
      axios.post(url, data)
      .then(res => {
        setIsPosted(true)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsPosting(false)
      })
    }
  }, [posted])
  
  return { isPosted, isPosting, error }
}
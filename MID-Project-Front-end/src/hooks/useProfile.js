import { useEffect, useState } from 'react'
import profilePhoto from '../assets/kyran.jpg'

const photoAssets = {
  profilePhoto,
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const useProfile = () => {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true)
        setError('')
        
        const response = await fetch(`${API_URL}/profile`)
        
        if (!response.ok) {
          throw new Error('Gagal memuat data profil.')
        }
        
        const data = await response.json()
        
        setProfile({
          ...data,
          photo: photoAssets[data.photoKey] ?? data.photo,
        })
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return { profile, error, loading }
}

export default useProfile


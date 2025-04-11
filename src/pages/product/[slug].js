import { useRouter } from 'next/router'
import React from 'react'

const Slug = () => {
    const router = useRouter()
    const { slug } = router.query
  return (
    <div>
        <p>the slug is: {slug}</p>
    </div>
  )
}

export default Slug
import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Feed from '../components/Feed'

function Home() {
  return (
    <div className="home">
      <Stories/>
      {/* Feed */}
      <Feed/>
    </div>
  )
}

export default Home
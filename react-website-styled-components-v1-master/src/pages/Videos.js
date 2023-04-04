import React from 'react'

const Videos = () => {
  return (
    <div style={{ backgroundColor: '#ffd500', padding: '10px 0 30px' }}>
      <h1 align='center'>Videos</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qQGn-DbkSWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/InMsQsNS3cE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
  )
}

export default Videos
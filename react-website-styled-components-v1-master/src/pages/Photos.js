import React from 'react'
import images from "../photos_gankpo"
// import image from ''

const Photos = () => {
  const AllImages=Object.values(images);
  return (
    <div style={{ backgroundColor: '#ffd500', padding: '10px 0 30px' }}>
    {console.log(images)}
    <h1 align='center'>Photos</h1>
    {/* <img src={images["./1.jpg"]}/>
    <img src={images["./2.jpg"]}/> */}
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "space-evenly"}}>
    {AllImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          style={{width:'auto', height:'300px',marginRight: '10px', marginBottom: '10px' }}
           />
      ))}
    </div>
    {/* {Object.keys(images).forEach(element => {
      console.log(element)
      return <img src={images[element]}/>
      {for (let j)}
      // return <img src={images[element]}/>
    })} */}
    {/* {images.map((img,index) => (
      <img key={index} src={img} alt={img} />
    ))} */}
    {/* <img src="/../../public/photos gankpo/1.jpg"/> */}
    {/* {images.array.forEach(element => {
     console.log(element)})} */}
    {/* {for (let j=1; j<=43; j++) {
    <img src={images["./"+j+".jpg"}/>
    }} */}
    </div>
    
  )
}

export default Photos
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function ImageCard({image}) {
  const tags =  image.tags.split(",")
  return (
    <div className="card bg-base-100 w-96 shadow-sm border-2 border-white-200 outline-2 outline-offset-2 outline-solid ">
  <figure>
    <img
      src={image.webformatURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h1 className="card-title font-sans text-lg font-bold">
      By, {image.user}
    </h1>
    <div className="card-actions justify-end">
      <div className="badge badge-soft badge-secondary">Likes<div className="badge badge-sm badge-secondary">{image.likes}</div></div>
      <div className="badge badge-soft badge-info">Views<div className="badge badge-sm badge-info">{image.views}</div></div>
    </div>
    <div className="card-actions justify-end">
      <div>
        {tags.map((tag)=>{
        return(<span key={nanoid()} className="badge badge-soft badge-accent m-1">#{tag}</span>)
        })}
        
      </div>
    </div>
  </div>
</div>
  )
}

export default ImageCard

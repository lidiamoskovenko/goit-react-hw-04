import css from "./ImageCard.module.css"

const ImageCard =({image})=> {
  return (
    <div>
    <img src={image.urls.small} alt={image.alt_description} className={css.image}/>
    <p className={css.text}><b>About image</b>:{image.alt_description}</p> 
    <p className={css.text}><b>Likes</b>:{image.likes}</p>
    {/* <p>Link:<a href={image.links.download} rel="noreferrer" target="_blank" >{image.links.download}</a> </p> */}
    </div>
      );
}

export default ImageCard;
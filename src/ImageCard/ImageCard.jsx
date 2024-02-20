// import css from "./ImageCard.module.css"

const ImageCard =({image})=> {
      return (
        <div>
        <img src={image.urls.small} alt={image.alt_description} />
        <p>About image:{image.alt_description}</p> 
        <p>Likes:{image.likes}</p>
        <p>Link:<a href={image.links.download} rel="noreferrer" target="_blank" >{image.links.download}</a> </p>
        </div>
          );
    }
  
    export default ImageCard;

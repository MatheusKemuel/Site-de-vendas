export const ImageDisplay = ({ imageName }) => {
    const imageUrl = '/images/' + imageName;
  
    return (
      <div>
        <img src={imageUrl} alt="Imagem" className="rounded-t-xl"/>
      </div>
    );
  };
  
  export default ImageDisplay;
export const ImageDisplay = ({ image }) => {
  
    return (
      <div className="flex items-center justify-center h-72 w-80 bg-white rounded-t-xl">
        <img src={image} alt="Imagem" className=" h-72 w-80 object-contain  hover:scale-95 duration-150"/>
      </div>
    );
  };
  
  export default ImageDisplay;
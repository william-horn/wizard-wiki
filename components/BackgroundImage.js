

/*
  <div className="relative background-container">
    <BackgroundImage>
  </div>
*/

const BackgroundImage = ({ src, image, frame }) => {
  return (
    <div className={`background-frame w-full h-full absolute ` + frame}>
      <img src={src} alt="background image" className={`background-image w-full h-full absolute object-cover pointer-events-none select-none ` + image}/>
    </div>
  );
};

export default BackgroundImage;




/*
  <div className="relative background-container">
    <BackgroundImage>
  </div>
*/

const BackgroundImage = ({ image, bgColor="", opacity="1" }) => {
  return (
    <div className={`custom-background-container w-full h-full absolute bg-[${bgColor}]`}>
      <img src={image} alt="background image" className={`custom-background w-full h-full absolute object-cover opacity-[${opacity}] pointer-events-none select-none`}/>
    </div>
  );
};

export default BackgroundImage;


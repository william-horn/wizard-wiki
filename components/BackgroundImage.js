

/*
  <div className="relative background-container">
    <BackgroundImage>
  </div>
*/
import Image from "next/image";

const BackgroundImage = ({ src, image, frame }) => {
  return (
    <div className={`background-frame w-full h-full absolute ` + frame}>
      <Image src={src} alt="background image" fill className={`background-image absolute object-cover pointer-events-none select-none ` + image}/>
    </div>
  );
};

BackgroundImage.displayName = "BackgroundImage";
export default BackgroundImage;


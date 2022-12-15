
import Container from "../containers/Container";
import constructClassName from "../../lib/helpers/constructClassName";
import Image from "next/image";

const Button = ({ 
  children, 
  className, 
  containerClassName, 
  containerRemove,
  remove, 
  leftIcon, 
  rightIcon, 
  iconSize='25px',
  onClick 
}) => {
  console.log('icon size: ', iconSize);
  return (
    <Container onClick={onClick} className={constructClassName("flex items-center mx-2 my-2 px-2 rounded cursor-pointer", {className: containerClassName, remove: containerRemove})}>
      {
        leftIcon ? 
          <Container className={`icon-frame relative w-[${iconSize}] h-[${iconSize}]`}>
            <Image alt="icon" className="custom-icon filter invert" src={leftIcon} fill sizes="48px"/>
          </Container> 
        : <></>
      }

      <button
      className={constructClassName("flex-auto p-2 text-left text-white rounded text-md", {className, remove})}>
        {children}
      </button>
      
      {
        rightIcon ?
          <Container className={`icon-frame relative w-[${iconSize}] h-[${iconSize}]`}>
            <Image alt="icon" className="custom-icon filter invert" src={rightIcon} fill sizes="48px"/>
          </Container>
        : <></>
      }
    </Container>
  );
};

export default Button;
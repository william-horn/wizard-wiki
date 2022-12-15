
import Container from "../containers/Container";
import constructClassName from "../../lib/helpers/constructClassName";
import Image from "next/image";

const iconSizes = "48px";

const Button = ({ 
  children, 
  className, 
  containerClassName, 
  containerRemove,
  remove, 
  leftIcon, 
  rightIcon, 
  onClick 
}) => {
  return (
    <Container onClick={onClick} className={constructClassName("flex items-center mx-2 my-2 px-2 rounded cursor-pointer", {className: containerClassName, remove: containerRemove})}>
      {
        leftIcon ? 
          <Container className="icon-frame relative w-[25px] h-[25px]">
            <Image alt="icon" className="custom-icon filter invert" src={leftIcon} fill sizes={iconSizes}/>
          </Container> 
        : <></>
      }

      <button
      className={constructClassName("flex-auto p-2 text-left text-white rounded text-md", {className, remove})}>
        {children}
      </button>
      
      {
        rightIcon ?
          <Container className="icon-frame relative w-[25px] h-[25px]">
            <Image alt="icon" className="custom-icon filter invert" src={rightIcon} fill sizes={iconSizes}/>
          </Container>
        : <></>
      }
    </Container>
  );
};

export default Button;
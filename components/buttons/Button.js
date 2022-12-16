
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
  const iconContaierClass = "icon-frame relative";
  const iconClass = "custom-icon filter invert";

  return (
    <Container onClick={onClick} className={constructClassName("flex min-w-fit items-center mx-2 my-2 px-2 rounded cursor-pointer", {className: containerClassName, remove: containerRemove})}>
      {
        leftIcon ? 
          <Container className={iconContaierClass} style={{'min-width': iconSize, height: iconSize}}>
            <Image alt="icon" className={iconClass} src={leftIcon} fill sizes="48px"/>
          </Container> 
        : <></>
      }

      <button
      className={constructClassName("flex-auto p-2 text-left text-white rounded text-md", {className, remove})}>
        {children}
      </button>
      
      {
        rightIcon ?
          <Container className={iconContaierClass} style={{'min-width': iconSize, height: iconSize}}>
            <Image alt="icon" className={iconClass} src={rightIcon} fill sizes="48px"/>
          </Container>
        : <></>
      }
    </Container>
  );
};

export default Button;
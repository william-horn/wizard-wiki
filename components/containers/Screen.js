
import Container from "./Container";

const Screen = ({ children, className="" }) => {
  return (
    <Container className={'screen-container w-screen h-screen ' + className}>
      {children}
    </Container>
  );
};

export default Screen;
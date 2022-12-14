
// !deprecated and needs updating

import Container from "./Container";

const Screen = ({ children, className="" }) => {
  return (
    <Container add={'screen-container w-screen h-screen ' + className}>
      {children}
    </Container>
  );
};

Screen.displayName = "Screen";
export default Screen;
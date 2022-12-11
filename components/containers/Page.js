
import Container from "./Container";

const Page = ({ children, className="" }) => {
  return (
    <Container className={'page-container w-full h-full overflow-auto ' + className}>
      {children}
    </Container>
  );
};

export default Page;
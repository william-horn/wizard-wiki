
import Container from '../Container';
import { useAppContext } from '../../providers/AppProvider';

const MainLayout = ({ children }) => {
  const { theme } = useAppContext();

  return (
    <Container className={`w-screen h-screen bg-skin-primary ${theme}`}>
      {children}
    </Container>
  );
};

export default MainLayout;
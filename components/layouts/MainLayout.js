
import Screen from '../containers/Screen';
import { useAppContext } from '../../providers/AppProvider';

const MainLayout = ({ children }) => {
  return (
    <Screen className="bg-skin-primary">
      {children}
    </Screen>
  );
};

export default MainLayout;
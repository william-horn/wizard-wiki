
import Screen from '../containers/Screen';
import { useAppContext } from '../../providers/AppProvider';

const MainLayout = ({ children }) => {
  return (
    <Screen>
      {children}
    </Screen>
  );
};

MainLayout.displayName = "MainLayout";
export default MainLayout;
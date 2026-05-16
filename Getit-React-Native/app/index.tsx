import { NavigationIndependentTree } from '@react-navigation/native';
import AppNavigator from '../src/navigation/AppNavigator';

export default function Index() {
  return (
    <NavigationIndependentTree>
      <AppNavigator />
    </NavigationIndependentTree>
  );
}

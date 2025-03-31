import 'react-native-gesture-handler/jestSetup';

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: ({ children }) => children,
  PanGestureHandler: ({ children }) => children,
  Swipeable: jest.fn(),
  DrawerLayout: jest.fn(),
}));

// Mock Animated Native Helper (fixes react-native-reanimated errors)
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => jest.fn());

// Mock @react-navigation/native
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
  }),
  NavigationContainer: ({ children }) => children,
  createNavigationContainerRef: jest.fn(),
}));

// Mock @react-navigation/stack (if you're using stack navigation)
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));

// Mock Platform
jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual('react-native/Libraries/Utilities/Platform');
  Platform.OS = 'android';
  return Platform;
});

jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: jest.fn(() => ({
    Navigator: ({ children }) => children,
    Screen: ({ children }) => children,
  })),
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn(() => ({
    Navigator: ({ children }) => children,
    Screen: ({ children }) => children,
  })),
}));








































// import 'react-native-gesture-handler/jestSetup';

// // Mock react-native-reanimated
// jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// // Mock react-native-gesture-handler
// jest.mock('react-native-gesture-handler', () => ({
//   GestureHandlerRootView: ({ children }) => children,
//   PanGestureHandler: ({ children }) => children,
//   Swipeable: jest.fn(),
//   DrawerLayout: jest.fn(),
// }));

// // Mock Animated Native Helper (fixes react-native-reanimated errors)
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => jest.fn());

// // Mock @react-navigation/native
// jest.mock('@react-navigation/native', () => ({
//   useNavigation: () => ({
//     navigate: jest.fn(),
//     goBack: jest.fn(),
//   }),
//   useRoute: () => ({
//     params: {},
//   }),
//   NavigationContainer: ({ children }) => children,
//   createNavigationContainerRef: jest.fn(),
// }));

// // Mock @react-navigation/stack (if you're using stack navigation)
// jest.mock('@react-navigation/stack', () => ({
//   createStackNavigator: jest.fn(),
// }));

// // Mock Platform
// jest.mock('react-native/Libraries/Utilities/Platform', () => {
//   const Platform = jest.requireActual('react-native/Libraries/Utilities/Platform');
//   Platform.OS = 'android';
//   return Platform;
// });

// jest.mock('@react-navigation/drawer', () => ({
//   createDrawerNavigator: jest.fn(() => ({
//     Navigator: ({ children }) => children,
//     Screen: ({ children }) => children,
//   })),
// }));

// jest.mock('@react-navigation/bottom-tabs', () => ({
//   createBottomTabNavigator: jest.fn(() => ({
//     Navigator: ({ children }) => children,
//     Screen: ({ children }) => children,
//   })),
// }));

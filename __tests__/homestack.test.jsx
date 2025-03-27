import React from "react";
import HomeStack from "../src/Navigation/HomeStack";
import { render } from '@testing-library/react-native';
import { NavigationContainer } from "@react-navigation/native";

describe('Stack Screen',()=>{
    test('renders',()=>{
        expect(true).toBeTruthy();
    });
    test('renders Stack Navigation correctly', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <HomeStack/>
            </NavigationContainer>
        )
        expect(getByTestId('stack-screen')).toBeTruthy();
      });
})

import 'react-native-gesture-handler';
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: ({ children }) => children,
  PanGestureHandler: ({ children }) => children,
}));

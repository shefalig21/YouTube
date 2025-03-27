import React from "react";
import { render } from '@testing-library/react-native';
import BottomTabNav from "../src/Navigation/BottomTabNav";
import { NavigationContainer } from "@react-navigation/native";

describe('Bottom Tab Navigation', () => {
    it('renders', () => {
        expect(true).toBeTruthy();
    });

    it('renders bottom tab navigation correctly', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        )
        expect(getByTestId('bottom-tab')).toBeTruthy();
    });
    it('renders home icon',()=>{
        const {findByTestId}=render(
            <NavigationContainer>
                <BottomTabNav/>
            </NavigationContainer>
        )
        expect(findByTestId('home-icon')).toBeTruthy();
    });
    it('renders shorts icon',()=>{
        const {findByTestId}=render(
            <NavigationContainer>
                <BottomTabNav/>
            </NavigationContainer>
        )
        expect(findByTestId('shorts-icon')).toBeTruthy();
    });
    it('renders subscriptions icon',()=>{
        const {findByTestId}=render(
            <NavigationContainer>
                <BottomTabNav/>
            </NavigationContainer>
        )
        expect(findByTestId('subscriptions-icon')).toBeTruthy();
    });
    it('renders you-icon',()=>{
        const {findByTestId}=render(
            <NavigationContainer>
                <BottomTabNav/>
            </NavigationContainer>
    )
    expect(findByTestId('you-icon')).toBeTruthy();
}); 
});

import 'react-native-gesture-handler';
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: ({ children }) => children,
  PanGestureHandler: ({ children }) => children,
}));




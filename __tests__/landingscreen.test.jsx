import React from "react";
import { render } from '@testing-library/react-native';
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "../src/Screens/LandingScreen";

describe('Landing Screen',()=>{
    it('renders Landing Screen',()=>{
        expect(true).toBeTruthy();
    }),
    it('renders Landing Screen correctly',()=>{
        const {getByTestId}=render(
            <NavigationContainer>
                <LandingScreen/>
            </NavigationContainer>
        )
        expect(getByTestId("landing-screen")).toBeTruthy();
    });
})
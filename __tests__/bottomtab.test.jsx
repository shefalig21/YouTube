import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "../src/Navigation/BottomTabNavigation/BottomTabNav";

describe('Bottom Tab Navigation', () => {
    it('renders bottom tab navigation correctly', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(getByTestId('bottom-tab')).toBeTruthy();
    });
    it('renders home icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('home-icon')).toBeTruthy();
    });
    it('renders shorts icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('shorts-icon')).toBeTruthy();
    });
    it('renders Upload icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('upload-icon')).toBeTruthy();
    });
    it('renders subscriptions icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('subscriptions-icon')).toBeTruthy();
    });
    it('renders profile icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('profile-icon')).toBeTruthy();
    });
    it('renders home screen by default', () => {
                const { findByTestId } = render(
                    <NavigationContainer>
                        <BottomTabNav />
                    </NavigationContainer>
                )
                expect(findByTestId("stack-screen")).toBeTruthy();
            }); 
            it("navigates to Shorts screen when shorts tab is pressed",() => {
                const { findByTestId , getByLabelText } = render(
                  <NavigationContainer>
                    <BottomTabNav />
                  </NavigationContainer>
                );
            
                const shortsTab =waitFor(() => getByLabelText("shorts-icon"));
                fireEvent.press(shortsTab);
            
                const shortsScreen =waitFor(() => findByTestId("shorts-screen"));
                expect(shortsScreen).toBeTruthy();
              });
            it("navigates to upload screen when upload tab is pressed",() => {
                const { findByTestId , getByLabelText } = render(
                  <NavigationContainer>
                    <BottomTabNav />
                  </NavigationContainer>
                );
            
                const uploadTab =waitFor(() => getByLabelText("upload-icon"));
                fireEvent.press(uploadTab);
            
                const uploadScreen =waitFor(() => findByTestId("upload-screen"));
                expect(uploadScreen).toBeTruthy();
              });
              it("navigates to subscription screen when subscription tab is pressed",() => {
                const { findByTestId , getByLabelText } = render(
                  <NavigationContainer>
                    <BottomTabNav />
                  </NavigationContainer>
                );
            
                const subscriptionTab =waitFor(() => getByLabelText("subscriptions-icon"));
                fireEvent.press(subscriptionTab);
            
                const subscriptionScreen =waitFor(() => findByTestId("subscriptions-screen"));
                expect(subscriptionScreen).toBeTruthy();
              });
              it("navigates to profile screen when profile tab is pressed",() => {
                const { findByTestId , getByLabelText } = render(
                  <NavigationContainer>
                    <BottomTabNav />
                  </NavigationContainer>
                );
            
                const profileTab =waitFor(() => getByLabelText("profile-icon"));
                fireEvent.press(profileTab);
            
                const profileScreen =waitFor(() => findByTestId("profile-screen"));
                expect(profileScreen).toBeTruthy();
              });
});







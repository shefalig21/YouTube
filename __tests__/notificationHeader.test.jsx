import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import NotificationHeader from "../src/Components/NotificationHeader";


describe('Notification Header',()=>{
    it('renders',()=>{
        expect(true).toBeTruthy();
    })
    it('renders notification screen correctly',()=>{
        const {getByTestId}=render(
            <NavigationContainer>
                <NotificationHeader/>
            </NavigationContainer>
        )
        expect(getByTestId('notification')).toBeTruthy();
    })
    it('renders back arrow correctly',()=>{
        const {getByTestId}=render(
            <NavigationContainer>
                <NotificationHeader/>
            </NavigationContainer>
        )
        expect(getByTestId('arrow-icon')).toBeTruthy();
    })
    it('renders cast arrow correctly',()=>{
        const {getByTestId}=render(
            <NavigationContainer>
                <NotificationHeader/>
            </NavigationContainer>
        )
        expect(getByTestId('cast-icon')).toBeTruthy();
    })
    it('renders notification arrow correctly',()=>{
        const {getByTestId}=render(
            <NavigationContainer>
                <NotificationHeader/>
            </NavigationContainer>
        )
        expect(getByTestId('notification-icon')).toBeTruthy();
    })
    it('renders notification arrow correctly',()=>{
        const {getByTestId}=render(
            <NavigationContainer>
                <NotificationHeader/>
            </NavigationContainer>
        )
        expect(getByTestId('more-icon')).toBeTruthy();
    })


})



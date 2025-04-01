import React from "react";
import { render,fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import NotificationHeader from "../src/Components/NotificationHeader";

describe('Notification Header',()=>{
    const mockNavigation = { goBack: jest.fn() };

    it('renders notification component and all icons correctly',()=>{
        const {getByTestId}=render(
            <NavigationContainer>
                <NotificationHeader/>
            </NavigationContainer>
        )
        expect(getByTestId('notification')).toBeTruthy();
        expect(getByTestId('arrow-icon')).toBeTruthy();
        expect(getByTestId('cast-icon')).toBeTruthy();
        expect(getByTestId('notification-icon')).toBeTruthy();
        expect(getByTestId('more-icon')).toBeTruthy();
    })
    it('when back icon is pressed,should go back to previous screen', () => {
        const { getByTestId } = render(
        <NotificationHeader navigation={mockNavigation} />);
        
        fireEvent.press(getByTestId('arrow-icon'));
        expect(mockNavigation.goBack).toHaveBeenCalled();
      });
    
})



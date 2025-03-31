import React from "react";
import { render } from "@testing-library/react-native";
import Subscriptions from "../src/Navigation/BottomTabNavigation/Subscriptions";

describe('Subscription Screen',()=>{
    it('renders subscription screen correctly',()=>{
        const {getByTestId}=render(<Subscriptions/>)

        expect(getByTestId('subscriptions-screen')).toBeTruthy();
    })
})
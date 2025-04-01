import React from "react"
import { render } from "@testing-library/react-native"
import Subscriptions from "../src/Navigation/BottomTabNavigation/Subscriptions"

describe("Profile Screen",()=>{
    it('renders profile screen completely',()=>{
        const {getByTestId}=render(<Subscriptions/>)

        expect(getByTestId('subscriptions-screen')).toBeTruthy();
    })
})
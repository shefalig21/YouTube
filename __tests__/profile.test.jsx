import React from "react"
import Profile from "../src/Navigation/BottomTabNavigation/Profile"
import { render } from "@testing-library/react-native"

describe("Profile Screen",()=>{
    it('renders profile screen completely',()=>{
        const {getByTestId}=render(<Profile/>)

        expect(getByTestId('profile-screen')).toBeTruthy();
    })
})
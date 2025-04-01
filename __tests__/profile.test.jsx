import React from "react"
import { render } from "@testing-library/react-native"
import Profile from "../src/Navigation/BottomTabNavigation/Profile"

describe('Profile Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Profile/>)

        expect(getByTestId("profile-screen")).toBeTruthy();
    })
})
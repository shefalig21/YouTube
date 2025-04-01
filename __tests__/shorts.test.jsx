import React from "react"
import { render } from "@testing-library/react-native"
import Shorts from "../src/Navigation/BottomTabNavigation/Shorts"

describe("Profile Screen",()=>{
    it('renders profile screen completely',()=>{
        const {getByTestId}=render(<Shorts/>)

        expect(getByTestId('shorts-screen')).toBeTruthy();
    })
})
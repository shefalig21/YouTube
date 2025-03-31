import React from "react"
import { render } from "@testing-library/react-native"
import Shopping from "../src/Navigation/DrawerNavigation/Shopping"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Shopping/>)

        expect(getByTestId("shopping")).toBeTruthy();
    })
})
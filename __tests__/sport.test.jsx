import React from "react"
import { render } from "@testing-library/react-native"
import Sport from "../src/Navigation/DrawerNavigation/Sport"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Sport/>)

        expect(getByTestId("sport")).toBeTruthy();
    })
})
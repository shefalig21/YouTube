import React from "react"
import { render } from "@testing-library/react-native"
import Live from "../src/Navigation/DrawerNavigation/Live"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Live/>)

        expect(getByTestId("live")).toBeTruthy();
    })
})
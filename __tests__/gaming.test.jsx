import React from "react"
import { render } from "@testing-library/react-native"
import Gaming from "../src/Navigation/DrawerNavigation/Gaming"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Gaming/>)

        expect(getByTestId("gaming")).toBeTruthy();
    })
})
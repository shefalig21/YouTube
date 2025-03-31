import React from "react"
import { render } from "@testing-library/react-native"
import Music from "../src/Navigation/DrawerNavigation/Music"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Music/>)

        expect(getByTestId("music")).toBeTruthy();
    })
})
import React from "react"
import { render } from "@testing-library/react-native"
import News from "../src/Navigation/DrawerNavigation/News"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<News/>)

        expect(getByTestId("news")).toBeTruthy();
    })
})
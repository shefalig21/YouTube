import React from "react"
import { render } from "@testing-library/react-native"
import Films from "../src/Navigation/DrawerNavigation/Films"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Films/>)

        expect(getByTestId("films")).toBeTruthy();
    })
})
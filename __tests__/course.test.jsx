import React from "react"
import { render } from "@testing-library/react-native"
import Courses from "../src/Navigation/DrawerNavigation/Courses"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Courses/>)

        expect(getByTestId("course")).toBeTruthy();
    })
})
import React from "react"
import { render } from "@testing-library/react-native"
import Podcast from "../src/Navigation/DrawerNavigation/Podcast"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<Podcast/>)

        expect(getByTestId("podcast")).toBeTruthy();
    })
})
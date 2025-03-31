import React from "react"
import { render } from "@testing-library/react-native"
import Shorts from "../src/Navigation/BottomTabNavigation/Shorts"

describe("Shorts Screen",()=>{
    it("renders shorts screen correctly",()=>{
        const {getByTestId}=render(<Shorts/>)

        expect(getByTestId("shorts-screen")).toBeTruthy();
    })
})
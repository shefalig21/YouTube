import React from "react"
import { render } from "@testing-library/react-native"
import Upload from "../src/Navigation/BottomTabNavigation/Upload"

describe("Profile Screen",()=>{
    it('renders profile screen completely',()=>{
        const {getByTestId}=render(<Upload/>)

        expect(getByTestId('upload-screen')).toBeTruthy();
    })
})
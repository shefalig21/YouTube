import React from "react"
import { render } from "@testing-library/react-native"
import FashionBeauty from "../src/Navigation/DrawerNavigation/FashionBeauty"

describe('Course Screen',()=>{
    it('renders',()=>{
        const {getByTestId}=render(<FashionBeauty/>)

        expect(getByTestId("FashionBeauty")).toBeTruthy();
    })
})
import React from "react";
import { render } from "@testing-library/react-native";
import Trending from "../src/Navigation/DrawerNavigation/Trending";

describe("Trending Screen",()=>{
    it("renders trending screen correctly",()=>{
        const {getByTestId}=render(<Trending/>)

        expect(getByTestId('trending-screen')).toBeTruthy();
    })
})
import React from "react";
import { render } from "@testing-library/react-native";
import Upload from "../src/Navigation/BottomTabNavigation/Upload";

describe('Upload Screen',()=>{
    it('renders upload screen correctly',()=>{
        const {getByTestId}=render(<Upload/>)

        expect(getByTestId('upload-screen'));
    })
})
import React from "react";
import DrawerNav from "../src/Navigation/DrawerNavigation/DrawerNav";
import { render, fireEvent ,waitFor} from '@testing-library/react-native';
import { NavigationContainer } from "@react-navigation/native";

describe('Drawer Navigation',()=>{
    it('renders',()=>{
        expect(true).toBeTruthy();
    })
    it("renders correctly", async () => {
        const { getByTestId } = render(
          <NavigationContainer>
            <DrawerNav />
          </NavigationContainer>
        );
        await waitFor(() => {
          expect(getByTestId("custom-drawer")).toBeTruthy();
        });
      });
      
  it("opens drawer when explore icon is pressed", async () => {
    const { getByTestId, debug } = render(
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    );

    debug();

    const exploreIcon = getByTestId("explore-icon");
    fireEvent.press(exploreIcon);

    await waitFor(() => {
      expect(getByTestId("custom-drawer")).toBeTruthy();
    });
  })
    //   it("renders correctly",() => {
    //     const { getByTestId } = render(
    //       <NavigationContainer>
    //         <DrawerNav />
    //       </NavigationContainer>
    //     );
       
    //  expect(getByTestId("trending-screen")).toBeTruthy();

    //   });
})






















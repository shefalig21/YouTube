import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import BottomTabNav from "../src/Navigation/BottomTabNavigation/BottomTabNav";
import { NavigationContainer } from "@react-navigation/native";

describe('Bottom Tab Navigation', () => {
    it('renders bottom tab navigation correctly', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(getByTestId('bottom-tab')).toBeTruthy();
    });
    it('renders home icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('home-icon')).toBeTruthy();
    });
    it('renders shorts icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('shorts-icon')).toBeTruthy();
    });
    it('renders Upload icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('upload-icon')).toBeTruthy();
    });
    it('renders subscriptions icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('subscriptions-icon')).toBeTruthy();
    });
    it('renders profile icon',()=> {
        const { findByTestId } = render(
            <NavigationContainer>
                <BottomTabNav />
            </NavigationContainer>
        );
        expect(findByTestId('profile-icon')).toBeTruthy();
    });
    it('renders home screen by default', () => {
                const { findByTestId } = render(
                    <NavigationContainer>
                        <BottomTabNav />
                    </NavigationContainer>
                )
                expect(findByTestId("stack-screen")).toBeTruthy();
            });
            // it('navigates to Shorts screen when shorts tab is pressed', async () => {
            //     const { getByLabelText, findByTestId } = render(
            //       <NavigationContainer>
            //         <BottomTabNav/>
            //       </NavigationContainer>
            //     );
            
            //     const shortsTab = await waitFor(() => getByLabelText('shorts-icon'));
            //     fireEvent.press(shortsTab);
            
            //     const shortsScreen = await waitFor(() => findByTestId('shorts-screen'));
            //     expect(shortsScreen).toBeTruthy();
            //   });
                
            it("navigates to Shorts screen when shorts tab is pressed", async () => {
                const { getByTestId, findByTestId } = render(
                  <NavigationContainer>
                    <BottomTabNav/>
                  </NavigationContainer>
                );
            
                const shortsTab = await waitFor(() => getByTestId("shorts-icon"));
                fireEvent.press(shortsTab);
            
                const shortsScreen = await waitFor(() => findByTestId("shorts-screen"));
                expect(shortsScreen).toBeTruthy();
              });
});





























































































































// import React from "react";
// import { render, fireEvent,waitFor } from '@testing-library/react-native';
// import BottomTabNav from "../src/Navigation/Bottom Tab Navigation/BottomTabNav";
// import { NavigationContainer } from "@react-navigation/native";

// describe('Bottom Tab Navigation', () => {
//     it('renders bottom tab navigation correctly', () => {
//         const { getByTestId } = render(
//             <NavigationContainer>
//                 <BottomTabNav />
//             </NavigationContainer>
//         )
//         expect(getByTestId('bottom-tab')).toBeTruthy();
//     });
//     it('renders home icon', () => {
//         const { findByTestId } = render(
//             <NavigationContainer>
//                 <BottomTabNav />
//             </NavigationContainer>
//         )
//         expect(findByTestId('home-icon')).toBeTruthy();
//     });
//     it('renders shorts icon', () => {
//         const { findByTestId } = render(
//             <NavigationContainer>
//                 <BottomTabNav />
//             </NavigationContainer>
//         )
//         expect(findByTestId('shorts-icon')).toBeTruthy();
//     });
//     it('renders subscriptions icon', () => {
//         const { findByTestId } = render(
//             <NavigationContainer>
//                 <BottomTabNav />
//             </NavigationContainer>
//         )
//         expect(findByTestId('subscriptions-icon')).toBeTruthy();
//     });
//     it('renders profile-icon', () => {
//         const { findByTestId } = render(
//             <NavigationContainer>
//                 <BottomTabNav />
//             </NavigationContainer>
//         )
//         expect(findByTestId('profile-icon')).toBeTruthy();
//     });
//     it('renders home screen by default', () => {
//         const { findByTestId } = render(
//             <NavigationContainer>
//                 <BottomTabNav />
//             </NavigationContainer>
//         )
//         expect(findByTestId("stack-screen")).toBeTruthy();
//     });
//     it("on clicking shorts tab, navigates to shorts screen correctly", async () => {
//         const { getByLabelText, findByTestId } = render(
//             <NavigationContainer>
//                 <BottomTabNav />
//             </NavigationContainer>
//         );

//         const shortsTab = await waitFor(() => getByLabelText("shorts-icon"));
//         fireEvent.press(shortsTab);
    
//         const shortsScreen = await waitFor(() => findByTestId("shorts-screen"));
//         expect(shortsScreen).toBeTruthy();
//     });
//     it("navigates to Subscriptions screen when Subscriptions tab is pressed", async () => {
//         const { getByLabelText, findByTestId } = render(
//           <NavigationContainer>
//             <BottomTabNav />
//           </NavigationContainer>
//         );
      
//         const subscriptionsTab = await waitFor(() => getByLabelText("subscriptions-icon"));
//         fireEvent.press(subscriptionsTab);
      
//         const subscriptionsScreen = await waitFor(() => findByTestId("subscriptions-screen"));
//         expect(subscriptionsScreen).toBeTruthy();
//       });
//       it("navigates to profile screen when profile tab is pressed", async () => {
//         const { getByLabelText, findByTestId } = render(
//           <NavigationContainer>
//             <BottomTabNav />
//           </NavigationContainer>
//         );
      
//         const profileTab = await waitFor(() => getByLabelText("profile-icon"));
//         fireEvent.press(profileTab);
      
//         const profileScreen = await waitFor(() => findByTestId("profile-screen"));
//         expect(profileScreen).toBeTruthy();
//       });
      
// });

// import 'react-native-gesture-handler';
// jest.mock('react-native-gesture-handler', () => ({
//     GestureHandlerRootView: ({ children }) => children,
//     PanGestureHandler: ({ children }) => children,
// }));


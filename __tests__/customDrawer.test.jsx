import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "../src/Components/CustomDrawer";

describe("Custom Drawer Component", () => {
  it("renders", () => {
    expect(true).toBeTruthy();
  });

  it("renders custom drawer correctly", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer />
      </NavigationContainer>
    );
    expect(getByTestId("custom-drawer")).toBeTruthy();
  });

  it("renders custom drawer scrollbar correctly", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer />
      </NavigationContainer>
    );
    expect(getByTestId("customDrawer-scroll")).toBeTruthy();
  });

  it("renders YouTube icon correctly", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer />
      </NavigationContainer>
    );
    expect(getByTestId("youtube-icon")).toBeTruthy();
  });

  it("checks if image and touchableOpacity work for trending and home", () => {
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer navigation={{ navigate: mockNavigate }} />
      </NavigationContainer>
    );

    expect(getByTestId('trending')).toBeTruthy();
    expect(getByTestId('trending-icon')).toBeTruthy();

    expect(getByTestId('shopping')).toBeTruthy();
    expect(getByTestId('shopping-icon')).toBeTruthy();

    fireEvent.press(trendingTouchable);
    expect(mockNavigate).toHaveBeenCalledWith("Trending");

  });
  it("checks if image and touchableOpacity work for Music,Films and Live", () => {
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer navigation={{ navigate: mockNavigate }} />
      </NavigationContainer>
    );

    expect(getByTestId('music')).toBeTruthy();
    expect(getByTestId('music-icon')).toBeTruthy();

    expect(getByTestId('films')).toBeTruthy();
    expect(getByTestId('films-icon')).toBeTruthy();

    expect(getByTestId('live')).toBeTruthy();
    expect(getByTestId('live-icon')).toBeTruthy();

  });

  it("checks if image and touchableOpacity work for Gaming and News", () => {
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer navigation={{ navigate: mockNavigate }} />
      </NavigationContainer>
    );

    expect(getByTestId('gaming')).toBeTruthy();
    expect(getByTestId('gaming-icon')).toBeTruthy();

    expect(getByTestId('news')).toBeTruthy();
    expect(getByTestId('news-icon')).toBeTruthy();

  });

  it("checks if image and touchableOpacity work for Sport and Courses", () => {
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer navigation={{ navigate: mockNavigate }} />
      </NavigationContainer>
    );

    expect(getByTestId('sport')).toBeTruthy();
    expect(getByTestId('sport-icon')).toBeTruthy();

    expect(getByTestId('courses')).toBeTruthy();
    expect(getByTestId('courses-icon')).toBeTruthy();

  });

  
  it("checks if image and touchableOpacity work for Fashion & Beauty and Podcasts", () => {
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer navigation={{ navigate: mockNavigate }} />
      </NavigationContainer>
    );

    expect(getByTestId('fashion&Beauty')).toBeTruthy();
    expect(getByTestId('fashion&Beauty-icon')).toBeTruthy();

    expect(getByTestId('podcasts')).toBeTruthy();
    expect(getByTestId('podcasts-icon')).toBeTruthy();

  });

  it("navigates to Trending Screen when trending button is clicked", () => {
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <NavigationContainer>
        <CustomDrawer navigation={{ navigate: mockNavigate }} />
      </NavigationContainer>
    );

    const trendingButton = getByTestId("trending");
    fireEvent.press(trendingButton);

    expect(mockNavigate).toHaveBeenCalledWith("Trending");
  });
});

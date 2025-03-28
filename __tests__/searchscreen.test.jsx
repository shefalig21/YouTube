import React from "react";
import SearchScreen from "../src/Screens/SearchScreen";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from "@react-navigation/native";

describe('Search screen', () => {
  it('renders', () => {
    expect(true).toBeTruthy();
  });
  test('renders SearchScreen correctly', () => {
    const { getByTestId } = render(<SearchScreen />);
    expect(getByTestId('search-render')).toBeTruthy();
  });
  test('renders back icon correctly', () => {
    const { getByTestId } = render(<SearchScreen />);
    expect(getByTestId('back-icon')).toBeTruthy();
  });
  test('renders mic icon correctly', () => {
    const { getByTestId } = render(<SearchScreen />);
    expect(getByTestId('mic-icon')).toBeTruthy();
  });
  test('renders search input field correctly', () => {
    const { getByTestId } = render(<SearchScreen />);
    expect(getByTestId('search-input')).toBeTruthy();
  });
  test('renders search placeholder text correctly', () => {
    const { getByPlaceholderText } = render(<SearchScreen />);
    expect(getByPlaceholderText('Search YouTube')).toBeTruthy();
  });
})

describe('SearchScreen Integration Tests', () => {
  it('on clicking back arrow,navigates to previous screen', () => {
    const mock = { goBack: jest.fn() };

    const { getByTestId } = render(
      <NavigationContainer>
        <SearchScreen navigation={mock} />
      </NavigationContainer>
    );
    fireEvent.press(getByTestId('back-icon'));

    expect(mock.goBack).toHaveBeenCalled();
  });
});
test('displays matching video titles when searching', () => {
  const { getByPlaceholderText, getByText } = render(<SearchScreen />);

  const searchInput = getByPlaceholderText('Search YouTube');
  fireEvent.changeText(searchInput, 'Travel');

  expect(getByText('Italy Travel Vlog: exploring Florence, Tuscany and Venice (2022)')).toBeTruthy();
});
test('displays matching video when searching for text', () => {
  const { getByPlaceholderText, getByText } = render(<SearchScreen />);

  const searchInput = getByPlaceholderText('Search YouTube');
  fireEvent.changeText(searchInput, 'Travel');

  expect(getByText('Stuck in Venice for 7 days | Travel Nightmare turned into a dream come true! Italy w/ Tanya Khanijow')).toBeTruthy();
});
test('displays matching video when searching for each input correctly', () => {
  const { getByPlaceholderText, getByText } = render(<SearchScreen />);

  const searchInput = getByPlaceholderText('Search YouTube');
  fireEvent.changeText(searchInput, 'Trailer');

  expect(getByText('TAYLOR SWIFT | THE ERAS TOUR Concert Film Official Trailer')).toBeTruthy();
  expect(getByText('Final Destination Bloodlines | Official Trailer')).toBeTruthy();
  expect(getByText('Jurassic World Rebirth | Official Trailer')).toBeTruthy();
});

test('checks if searched video titles exist in results', async () => {
  const { getByPlaceholderText, queryByText } = render(<SearchScreen />);

  const searchInput = getByPlaceholderText('Search YouTube');
  fireEvent.changeText(searchInput, 'Video');

  await waitFor(() => {
    expect(queryByText('O Rangrez - Lyrical Video | Bhaag Milkha Bhaag | Farhan, Sonam | Shreya Ghoshal, Javed Bashir')).not.toBeNull();
    expect(queryByText('Mind Blowing Trick | Unreal Miniature Magic | AI video | God Videos')).not.toBeNull();
    expect(queryByText('ROSÉ & Bruno Mars - APT. (Official Music Video)')).not.toBeNull();

  });
});





import React from "react";
import SearchScreen from "../src/Screens/SearchScreen";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from "@react-navigation/native";

describe('Search screen', () => {
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

  expect(getByText('Italy Travel Vlog: exploring Florence, Tuscany and Venice (2022) Series')).toBeTruthy();
});
test('displays matching video when searching for text', () => {
  const { getByPlaceholderText, getByText } = render(<SearchScreen />);

  const searchInput = getByPlaceholderText('Search YouTube');
  fireEvent.changeText(searchInput, 'ROSE');

  expect(getByText('ROSÉ & Bruno Mars - APT. (Official Music Video)')).toBeTruthy();
});
test('displays matching video when searching for each input correctly', () => {
  const { getByPlaceholderText, getByText } = render(<SearchScreen />);

  const searchInput = getByPlaceholderText('Search YouTube');
  fireEvent.changeText(searchInput, 'Series');

  expect(getByText('Italy Travel Vlog: exploring Florence, Tuscany and Venice (2022) Series')).toBeTruthy();
  expect(getByText('Express.js - Learn What Matters: Mastering the Framework | Backend (Node JS) Series')).toBeTruthy();
});

test('checks if searched video titles exist in results', async () => {
  const { getByPlaceholderText, queryByText } = render(<SearchScreen />);

  const searchInput = getByPlaceholderText('Search YouTube');
  fireEvent.changeText(searchInput, 'Video');

  await waitFor(() => {
    expect(queryByText('Nish Hairs Owner Parul Gulati Wows the Sharks Video| Shark Tank India 2 | Pitches')).not.toBeNull();
    expect(queryByText('ROSÉ & Bruno Mars - APT. (Official Music Video)')).not.toBeNull();

  });
});
























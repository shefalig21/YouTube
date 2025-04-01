import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Header from '../src/components/Header';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

describe('Header Component', () => {
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ navigate: mockNavigate });
  });

  const renderWithNavigation = (component) => {
    return render(<NavigationContainer>{component}</NavigationContainer>);
  };
  test('renders Header', () => {
    const { getByTestId } = renderWithNavigation(<Header />);
    expect(getByTestId('header-component')).toBeTruthy();
  });
  test('renders youtubeIcon', () => {
    const { getByTestId } = renderWithNavigation(<Header />);
    expect(getByTestId('youtube-icon')).toBeTruthy();
  });
  test('renders castIcon', () => {
    const { getByTestId } = renderWithNavigation(<Header />);
    expect(getByTestId('cast-icon')).toBeTruthy();
  });
  test('renders notificationIcon', () => {
    const { getByTestId } = renderWithNavigation(<Header />);
    expect(getByTestId('notification-icon')).toBeTruthy();
  });
  test('renders searchIcon', () => {
    const { getByTestId } = renderWithNavigation(<Header />);
    expect(getByTestId('search-icon')).toBeTruthy();
  });
  test('on clicking search icon, Search Screen opens', () => {
    const { getByTestId } = renderWithNavigation(<Header />);
    fireEvent.press(getByTestId('search-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('SearchScreen');
  });
  test('on clicking notification icon, Notification Screen opens', () => {
    const { getByTestId } = renderWithNavigation(<Header />);
    fireEvent.press(getByTestId('notification-icon'));
    expect(mockNavigate).toHaveBeenCalledWith('Notification');
  });
});








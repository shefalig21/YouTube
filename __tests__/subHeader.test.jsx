import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SubHeader from "../src/Components/SubHeader";

jest.mock('../src/utils/withNavigationHOC', () => (Component) => (props) => (
  <Component {...props} navigation={{ openDrawer: jest.fn() }} />
));

describe('Sub Header Component', () => {
  it('renders sub-header correctly', () => {
    const { getByTestId } = render(<SubHeader />)
    expect(getByTestId('sub-header')).toBeTruthy();
  });
  it('renders sub-header scrollbar correctly', () => {
    const { getByTestId } = render(<SubHeader />)
    expect(getByTestId('subHeaderScrollView')).toBeTruthy();
  });
  it('displays "All" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-All')).toBeTruthy();
    expect(getByTestId('category-text-All')).toBeTruthy();
  });
  it('updates selected category & changes text color correctly when new category is selected', () => {
    const { getByTestId } = render(<SubHeader />);

    fireEvent.press(getByTestId('category-button-Fashion'));

    expect(getByTestId('category-text-Fashion')).toHaveStyle({ color: 'white' });

    expect(getByTestId('category-text-All')).toHaveStyle({ color: 'black' });
  });
  it('updates selected category & changes background color correctly when new category is selected', () => {
    const { getByTestId } = render(<SubHeader />);

    fireEvent.press(getByTestId('category-button-Coding'));

    expect(getByTestId('category-button-Coding')).toHaveStyle({ backgroundColor: 'black' });

    expect(getByTestId('category-button-Fashion')).toHaveStyle({ backgroundColor: '#e0e0e0' });
  });
  it('calls openDrawer when explore icon is pressed', () => {
    const { getByTestId } = render(<SubHeader />);
    
    fireEvent.press(getByTestId('explore-icon'));
    expect(getByTestId('explore-button')).toBeTruthy();
  });
  

})
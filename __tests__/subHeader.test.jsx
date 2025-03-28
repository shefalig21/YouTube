import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SubHeader from "../src/Components/SubHeader";

describe('Sub Header Component', () => {
  it('renders', () => {
    expect(true).toBeTruthy();
  });
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
  it('displays "News" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-News')).toBeTruthy();
    expect(getByTestId('category-text-News')).toBeTruthy();
  });
  it('displays "Gaming" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Gaming')).toBeTruthy();
    expect(getByTestId('category-text-Gaming')).toBeTruthy();
  });
  it('displays "Comedy" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Comedy')).toBeTruthy();
    expect(getByTestId('category-text-Comedy')).toBeTruthy();
  });
  it('displays "Music" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Music')).toBeTruthy();
    expect(getByTestId('category-text-Music')).toBeTruthy();
  });
  it('displays "Web Series" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Web Series')).toBeTruthy();
    expect(getByTestId('category-text-Web Series')).toBeTruthy();
  });
  it('displays "Coding" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Coding')).toBeTruthy();
    expect(getByTestId('category-text-Coding')).toBeTruthy();
  });
  it('displays "Mixes" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Mixes')).toBeTruthy();
    expect(getByTestId('category-text-Mixes')).toBeTruthy();
  });
  it('displays "Web Development" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Web Development')).toBeTruthy();
    expect(getByTestId('category-text-Web Development')).toBeTruthy();
  });
  it('displays "Fashion" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Fashion')).toBeTruthy();
    expect(getByTestId('category-text-Fashion')).toBeTruthy();
  });
  it('displays "Gaming" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Gaming')).toBeTruthy();
    expect(getByTestId('category-text-Gaming')).toBeTruthy();
  });
  it('displays "Destinations" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Destinations')).toBeTruthy();
    expect(getByTestId('category-text-Destinations')).toBeTruthy();
  });
  it('displays "Data Structures" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Data Structures')).toBeTruthy();
    expect(getByTestId('category-text-Data Structures')).toBeTruthy();
  });
  it('displays "Asian Music" category correctly', () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId('category-button-Asian Music')).toBeTruthy();
    expect(getByTestId('category-text-Asian Music')).toBeTruthy();
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

})
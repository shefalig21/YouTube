import React from 'react';
import { render } from '@testing-library/react-native';
import Notification from '../src/Screens/Notification';
import videos from '../src/Data/videos';

jest.mock('../src/Components/NotificationHeader.jsx', () => 'NotificationHeader');
jest.mock('../src/Components/NotificationItem.jsx', () => 'NotificationItem');

describe('Notification Screen', () => {
    const mockNavigation = { navigate: jest.fn() };

    it('renders the Notification screen', () => {
        const { getByTestId } = render(<Notification navigation={mockNavigation} />);
        expect(getByTestId('notification-screen')).toBeTruthy();
    });

    it('renders the NotificationHeader component', () => {
        const { getByTestId } = render(<Notification navigation={mockNavigation} />);
        expect(getByTestId('notification-header')).toBeTruthy();
    });

    it('renders the correct number of NotificationItems', () => {
        const { getByTestId, getAllByTestId } = render(<Notification navigation={mockNavigation} />);
        expect(getByTestId('notification-list')).toBeTruthy();
        expect(getAllByTestId(/^notification-item-/)).toHaveLength(videos.length);
    });
});

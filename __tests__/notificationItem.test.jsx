import React from 'react';
import { render } from '@testing-library/react-native';
import NotificationItem from '../src/Components/NotificationItem';

describe('NotificationItem Component', () => {
    const testProps = {
        title: "ROSÉ & Bruno Mars - APT. (Official Music Video)",
        channel: "ROSÉ",
        time: "5 months ago",
    };

    it('renders the NotificationItem component correctly', () => {
        const { getByTestId } = render(<NotificationItem {...testProps} />);
        expect(getByTestId('notification-item')).toBeTruthy();
    });

    it('displays the correct title, channel, and time', () => {
        const { getByTestId } = render(<NotificationItem {...testProps} />);
        
        expect(getByTestId('notification-title').props.children).toBe(testProps.title);
        expect(getByTestId('notification-channel').props.children).toBe(testProps.channel);
        expect(getByTestId('notification-time').props.children).toBe(testProps.time);
    });

    it('renders the user avatar', () => {
        const { getByTestId } = render(<NotificationItem {...testProps} />);
        expect(getByTestId('notification-avatar')).toBeTruthy();
    });
});

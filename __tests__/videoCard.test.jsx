import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from "@react-navigation/native";
import VideoCard from "../src/Components/VideoCard";

describe('Video Card Component',()=>{
    it('renders',()=>{
        expect(true).toBeTruthy();
    })
    it('renders video card component correctly', () => {
        const { getByTestId } = render(<VideoCard/>)
        expect(getByTestId('video-card')).toBeTruthy();
      });
      it('renders video play and video touchable correctly', () => {
        const { getByTestId } = render(<VideoCard/>)
        expect(getByTestId('video-play')).toBeTruthy();
        expect(getByTestId('videoCard-touchable')).toBeTruthy();
      });
      it('renders avatar icon correctly', () => {
        const { getByTestId } = render(<VideoCard/>)
        expect(getByTestId('channel-avatar')).toBeTruthy();
      });
      it('renders video title,channel name,views and video time correctly', () => {
        const { getByTestId } = render(<VideoCard/>)
        expect(getByTestId('video-title')).toBeTruthy();
        expect(getByTestId('video-channel')).toBeTruthy();
        expect(getByTestId('video-views')).toBeTruthy();
        expect(getByTestId('video-time')).toBeTruthy();
      });
      it('renders all details correctly', () => {
        const { getByTestId } = render(
          <VideoCard
            title="Italy Travel Vlog"
            channel="Morgan Venn"
            views="2.9M views"
            time="2 years ago"
          />
        );
    
        expect(getByTestId('video-card')).toBeTruthy();
        expect(getByTestId('videoCard-touchable')).toBeTruthy();
        expect(getByTestId('channel-avatar')).toBeTruthy();
        expect(getByTestId('video-title')).toBeTruthy();
        expect(getByTestId('video-channel')).toBeTruthy();
        expect(getByTestId('video-views')).toBeTruthy();
        expect(getByTestId('video-time')).toBeTruthy();
      });
      it('rendering multiple video cards', () => {
        const { getAllByTestId } = render(<VideoCard/>);
    
        const videoCards = getAllByTestId('video-card');
        expect(videoCards.length).toBeGreaterThan(0); //(basically ceheck if vidoe card exist)
      });
      it('to check if each video card has a video', () => {
        const { getAllByTestId } = render(<VideoCard/>);
        
        const videos = getAllByTestId('video-play');
        expect(videos.length).toBeGreaterThan(0);
      });
})
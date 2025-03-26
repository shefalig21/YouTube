import React from "react";
import { render } from '@testing-library/react-native';
import Header from "../src/Components/Header";

describe('Header Component',()=>{
    it('renders youtubeIcon',()=>{

        const page=render(<Header/>);
        expect(page.getByTestId('youtube-icon')).toBeTruthy();
    }),
    it('renders castIcon',()=>{

        const page=render(<Header/>);

        expect(page.getByTestId('cast-icon')).toBeTruthy();    
    }),
    it('renders notificationIcon',()=>{

        const page=render(<Header/>);

        expect(page.getByTestId('notification-icon')).toBeTruthy();  
    }),
    it('renders searchIcon',()=>{

        const page=render(<Header/>);

        expect(page.getByTestId('search-icon')).toBeTruthy();     
    })
})
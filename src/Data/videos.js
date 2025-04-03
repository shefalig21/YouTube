const videos = [
    {
        id: 1,
        title: 'Italy Travel Vlog: exploring Florence, Tuscany and Venice (2022) Series',
        channel: 'Morgan Venn',
        views: '2.9M views',
        time: '2 years ago',
        thumbnail: require('../assets/videos/video1.mp4')
    },
    {
        id: 2,
        title: 'JavaScript Tips for Beginners',
        channel: 'Code Academy',
        views: '567K views',
        time: '5 months ago',
        thumbnail: require('../assets/videos/video2.mp4')
    },
    {
        id: 3,
        title: 'ROSÉ & Bruno Mars - APT. (Official Music Video)',
        channel: 'ROSÉ ',
        views: '1.3B views',
        time: '5 months ago',
        thumbnail: require('../assets/videos/video3.mp4')
    },
    {
      id: 4,
      title: 'Express.js - Learn What Matters: Mastering the Framework | Backend (Node JS) Series',
      channel: 'Sheryians Coding School',
      views: '303K views',
      time: '1 year ago',
      thumbnail: require('../assets/videos/video4.mp4')
    },
    {
      id: 5,
      title: 'Scariest Car Driving Horror Game (AM Demo)',
      channel: 'Live Insaan',
      views: '1.5M views',
      time: '8 days ago',
      thumbnail: require('../assets/videos/video5.mp4')
      },
      {
      id: 6,
      title: 'Nish Hairs Owner Parul Gulati Wows the Sharks Video| Shark Tank India 2 | Pitches',
      channel: 'SET India',
      views: '6.6M views',
      time: '1 year ago',
      thumbnail: require('../assets/videos/video6.mp4')
      },
      {
      id: 7,
      title: 'Jurassic World Rebirth | Official Trailer',
      channel: 'Universal Pictures',
      views: '37M views',
      time: '1 month ago',
      thumbnail: require('../assets/videos/video7.mp4')
      },
      // {
      // id: 8,
      // title: '3 Idiots: All Best Comedy Scenes | Amir Khan, Sharman Joshi, R. Madhavan, Hindi Comedy Scenes',
      // channel: 'Bollywood Cuts',
      // views: '12M views',
      // time: '4 months ago',
      // thumbnail: require('../assets/videos/video8.mp4')
      // },
      // {
      // id: 9,
      // title: 'OTP Input (Flipkart, Swiggy, Myntra) - Machine Coding Interview using React',
      // channel: 'Akshay Saini',
      // views: '9.4K views',
      // time: '1 day ago',
      // thumbnail: require('../assets/videos/video9.mp4')
      // },
      // {
      //   id: 10,
      //   title: 'Aakash Gupta | Angry Young Man | Full Stand-up Comedy Special',
      //   channel: 'Aakash Gupta',
      //   views: '6.2M views',
      //   time: '2 weeks ago',
      //   thumbnail: require('../assets/videos/video10.mp4')
      // },
      // {
      //   id: 11,
      //   title: 'New Lincoln Model L100 Concept has a Cinema Floor',
      //   channel: 'Supercar Blondie',
      //   views: '5.5M views',
      //   time: '2 years ago',
      //   thumbnail: require('../assets/videos/video11.mp4')
      // },
      // {
      // id: 12,
      // title: 'O Rangrez - Lyrical Video | Bhaag Milkha Bhaag | Farhan, Sonam | Shreya Ghoshal, Javed Bashir',
      // channel: 'Sony Music India',
      // views: '35M views',
      // time: '6 months ago',
      // thumbnail: require('../assets/videos/video12.mp4')
      // },
      // {
      //   id: 13,
      //   title: 'Most-Watched Games - Season 10: The Tonight Show',
      //   channel: 'The Tonight Show',
      //   views: '1M views',
      //   time: '1 year ago',
      //   thumbnail: require('../assets/videos/video13.mp4')
      //   },
      //   {
      //     id: 14,
      //     title: 'Why are DEEP SEA Creatures Coming to Surface? | Leviathan Mystery | Dhruv Rathee',
      //     channel: 'Dhruv Rathee',
      //     views: '45K views',
      //     time: '13 days ago',
      //     thumbnail: require('../assets/videos/video14.mp4')
      //     },
      //     {
      //       id: 15,
      //       title: 'Starlink vs India Controversy | Why Banned in India ?',
      //       channel: 'Tech Burner',
      //       views: '38.5K views',
      //       time: '2 hours ago',
      //       thumbnail: require('../assets/videos/video15.mp4')
      //       },
      //       {
      //         id: 16,
      //         title: 'Mind Blowing Trick | Unreal Miniature Magic | AI video | God Videos',
      //         channel: 'Ijju Hemanth kumar',
      //         views: '14.2K views',
      //         time: '2 weeks ago',
      //         thumbnail: require('../assets/videos/video16.mp4')
      //         },
      //         {
      //           id: 17,
      //           title: 'India-China News: New Army Division To Defend Eastern Ladakh, LAC Rehaul Despite Truce | India Today',
      //           channel: 'India Today',
      //           views: '12K views',
      //           time: '9 hours ago',
      //           thumbnail: require('../assets/videos/video17.mp4')
      //           },
      //           {
      //             id: 18,
      //             title: 'I made 60 YouTube shorts in 60 mins with just 2 AI tools',
      //             channel: 'InVideo For Content Creators',
      //             views: '2M views',
      //             time: '2 years ago',
      //             thumbnail: require('../assets/videos/video18.mp4')
      //             },
      //             {
      //               id: 19,
      //               title: 'Final Destination Bloodlines | Official Trailer',
      //               channel: 'Warner Bros.',
      //               views: '11M views',
      //               time: '2 days ago',
      //               thumbnail: require('../assets/videos/video19.mp4')
      //               },
      //               {
      //                 id: 20,
      //                 title: 'Stuck in Venice for 7 days | Travel Nightmare turned into a dream come true! Italy w/ Tanya Khanijow',
      //                 channel: 'Tanya Khanijow',
      //                 views: '448K views',
      //                 time: '11 months ago',
      //                 thumbnail: require('../assets/videos/video20.mp4')
      //                 },
      //                 {
      //                   id: 21,
      //                   title: 'Front-end web development is changing, quickly',
      //                   channel: 'Fireship',
      //                   views: '1.5M views',
      //                   time: '6 months ago',
      //                   thumbnail: require('../assets/videos/video21.mp4')
      //                   },
      //                 {
      //                   id: 22,
      //                   title: 'TAYLOR SWIFT | THE ERAS TOUR Concert Film Official Trailer',
      //                   channel: 'Taylor Swift',
      //                   views: '15M views',
      //                   time: '1 year ago',
      //                   thumbnail: require('../assets/videos/video22.mp4')
      //                   },
  ];
  
  export default videos;























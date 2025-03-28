import React from 'react';
import { useNavigation } from '@react-navigation/native';

const withNavigationHOC = (WrappedComponent) => {
  return (props) => {
    const navigation = useNavigation();
    return <WrappedComponent {...props} navigation={navigation} />;
  };
};

export default withNavigationHOC;

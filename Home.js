import * as React from 'react';
import { Button } from 'react-native';


function HomeScreen({navigation}){
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('PgAlim')
            }
        />
    );
};

export default HomeScreen

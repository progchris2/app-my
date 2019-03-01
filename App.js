import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import {Provider} from "react-redux";

import store from './store/config/conf'
import Main from "./main/Main";


const App = () => {
    return <Provider store={store}>
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Main/>
        </View>
    </Provider>
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

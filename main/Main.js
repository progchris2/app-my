import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import LoginPages from "../containers/loginPage/LoginPages";


export default class Main extends Component {
   render () {
       return <LoginPages/>
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

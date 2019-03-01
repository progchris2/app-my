import React, { Component } from 'react'
import { ImageBackground, View, Image, StyleSheet, Modal } from 'react-native';
import { Overlay, Button, Icon} from 'react-native-elements';

import FormLogin from '../../components/form/FormLogin';

export default class LoginPages extends Component {
    state = {
        modalVisible: false,
        closeModal: false
    };

    handleVisible = () => {
        this.setState({modalVisible: true})
    };

    handleClose = () => {
        console.log("ok")
        this.setState({modalVisible: false})
    };

    handleSubmit = values => {
        console.log(values)
    }

    render() {
        return (
            <ImageBackground style={{flex: 1}} source={require("../../assets/images/ophrys-min.jpg")}>
                <Image source={require("../../assets/images/getra.jpg")} style={styles.logo} />
                <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
                    <Button title="Connexion"
                        textStyle={{ fontWeight: "300", color: "#ffffff" }}
                        buttonStyle={{
                            backgroundColor: "#841584",
                            width: 250,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 20
                        }}
                       onPress={this.handleVisible}>
                    </Button>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => null}
                > 
                   <Overlay isVisible={this.state.modalVisible}>
                       <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
                           <View style={{position: 'absolute', top: 0, right: 0, zIndex: 2000}}>
                               <Icon
                                   name='ios-close'
                                   type='ionicon'
                                   color='#00A6FB'
                                   onPress={this.handleClose}
                               />
                           </View>
                           <View><FormLogin onSubmit={this.handleSubmit} /></View>
                       </View>
                   </Overlay>
                </Modal>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        position: "absolute",
        top: 70,
        left: 100,
        width: 200,
        height: 40
    },
    btn: {
       width: 200,
       position: "absolute",
       top: 500,
       left: 100
    }
})

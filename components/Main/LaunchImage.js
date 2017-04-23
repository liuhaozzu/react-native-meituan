/**
 * Created by Administrator on 2017/4/13 0013 22:24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Main=require('../Main/Main');

var Launch = React.createClass({
    render(){
        return (
            <Image source={{uri:'launch_image'}} style={styles.launchImageStyle}/>
        );
    },
    componentDidMount(){
        //定时器 隔两秒钟切换到Main
        setTimeout(() => {
            this.props.navigator.replace({
                component:Main
            });
        },2000);
    }
});

const styles=StyleSheet.create({
    launchImageStyle:{
        flex:1
    }
});

module.exports=Launch;
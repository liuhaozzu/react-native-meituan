/**
 * Created by Administrator on 2017/4/13 0013 22:24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width}=Dimensions.get('window');
var BottomCommonCell = React.createClass({
    getDefaultProps(){
        return {
            leftIcon: '',
            leftTitle: '',
            rightTitle: '',
            rightIcon: ''
        }
    },
    render(){
        return (
            <View style={styles.container}>
                {/*左边*/}
                <TouchableOpacity>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIcon}} style={{width:23,height:23,marginRight:6}}/>
                        <Text style={{fontSize:16}}>{this.props.leftTitle}</Text>
                    </View>
                </TouchableOpacity>

                {/*右边*/}
                <TouchableOpacity>
                    <View style={styles.rightViewStyle}>
                        <Text>{this.props.rightTitle}</Text>
                        <Image source={{uri:'icon_common_cell_right_arrow'}}
                               style={{width:11,height:16, marginRight:6,marginLeft:6}}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        justifyContent:'space-between'
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 6
        //width: width / 2
    },
    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8
        //width: width / 2
    }
});

module.exports = BottomCommonCell;
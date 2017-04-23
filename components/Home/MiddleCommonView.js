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
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');
var MiddleCommonView = React.createClass({
    getDefaultProps(){
        return {
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:'',
            tplurl:'',
            callbackClickCell:null
        }
    },
    render(){
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={()=>{this.clickCell(this.props.title)}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View>
                        <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    {/*右边*/}
                    <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43,resizeMode:Image.resizeMode.contain}}/>
                </View>
            </TouchableOpacity>
        );
    },
    clickCell(title){
        alert(title);
    }
});

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:width*0.5-1,
        height:69,
        marginBottom:1,
        marginRight:1,

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    },
    subTitleStyle:{
        color:'gray',
        opacity:0.7
    }
});

module.exports=MiddleCommonView;
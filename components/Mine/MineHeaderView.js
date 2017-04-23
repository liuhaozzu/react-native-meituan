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

var MineHeaderView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                {this.renderBottomView()}
            </View>
        );
    },
    renderTopView(){
        return (
            <View style={styles.topViewStyle}>
                <Image source={{uri:'order'}} style={styles.leftIconStyle}></Image>
                <View style={styles.centerViewStyle}>
                    <Text style={{fontSize:18,color:'#FFFFFF',fontWeight:'bold'}}>我的App</Text>
                    <Image style={{width:17,height:17}} source={{uri:'icon_homepage_life_service_category'}}></Image>
                </View>
                <Image style={{width:8,height:16}} source={{uri:'icon_homepage_life_service_category'}}></Image>
            </View>
        );
    },
    renderBottomView(){
        return (
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        );
    },
    renderBottomItem(){
        var itemArr=[];
        var data=[{'number':'100','title':'抵扣券'},{'number':'100','title':'抵扣券'},{'number':'100','title':'抵扣券'}];
        //
        for(var i=0;i<data.length;i++){
            var item=data[i];
            itemArr.push(
                <TouchableOpacity key={i} activeOpacity={0.5}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                        <Text style={{color:'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }
});

const styles=StyleSheet.create({
    container:{
        height:200,
        backgroundColor:'rgba(255,96,0,1.0)'
    },
    centerViewStyle:{
        flexDirection:'row',
        width:width*0.72
    },
    topViewStyle:{
        flexDirection:'row',
        marginTop:80,
        alignItems:'center',
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)'
    },
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0
    },
    bottomInnerViewStyle:{
        width:(width/3)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderRightColor:'#FFFFFF'
    }
});

module.exports=MineHeaderView;
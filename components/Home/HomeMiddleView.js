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

var MiddleCommonView=require('./MiddleCommonView');
var TopMiddleData=require('../../LocalData/HomeTopMiddleLeft.json');
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');
var HomeMiddleView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>

            </View>
        );
    },
    renderLeftView(){
        //拿到对应的数据
        var data=TopMiddleData.dataLeft[0];
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('1')}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
                    <Image source={{uri:data.img2}} style={styles.leftImageStyle}/>
                    <Text style={{color:'gray'}}>{data.title}</Text>
                    <View style={{flexDirection:'row',marginTop:6}}>
                        <Text style={{color:'lightblue',opacity:0.9}}>{data.price}</Text>
                        <Text style={{color:'orange',backgroundColor:'yellow',marginLeft:6}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    renderRightView(){
        var itemArr=[];
        var rightData=TopMiddleData.dataRight;
        for(var i=0;i<rightData.length;i++){
            var itemData=rightData[i];
            itemArr.push(
                <MiddleCommonView key={i}
                                  title={itemData.title}
                                  subTitle={itemData.subTitle}
                                  rightIcon={itemData.rightImage}
                                  titleColor={itemData.titleColor}/>
            );
        }
        return itemArr;
    }
});

const styles=StyleSheet.create({
    container:{
        marginTop:11,
        flexDirection:'row'
    },
    leftImageStyle:{
        width:120,
        height:30,
        //内容模式
        resizeMode:'contain'
    },
    leftViewStyle:{
        width:width/2-1,
        height:139,
        backgroundColor:'white',
        marginRight:1,
        //flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
});

module.exports=HomeMiddleView;
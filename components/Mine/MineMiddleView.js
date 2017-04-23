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

var MiddleData=require('./MiddleData.json');

var MineMiddleView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    },
    renderAllItem(){
        var itemArr=[];
        for(var i=0;i<MiddleData.length;i++){
            var data=MiddleData[i];
            itemArr.push(<InnerView key={i} iconName={data.iconName} title={data.title}/>);
        }
        return itemArr;
    }
});

var InnerView = React.createClass({
    getDefaultProps(){
        return {
            iconName:'',
            title:''
        }
    },
    render(){
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                    <Image source={{uri:this.props.iconName}} style={{width:30,height:20,marginBottom:6}}/>
                    <Text style={{textAlign:'center',fontSize:13, opacity:0.5}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
})

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:80
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
});

module.exports=MineMiddleView;
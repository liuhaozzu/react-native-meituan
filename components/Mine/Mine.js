/**
 * Created by Administrator on 2017/4/13 0013 22:24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var CommonMineCell=require('./CommonMineCell');
var MineMiddleView=require('./MineMiddleView');
var MineHeaderView=require('./MineHeaderView');

var Mine = React.createClass({
    render(){
        return (
            <ScrollView style={styles.scrollViewStyle}
                contentInset={{top:-200}}>
                <MineHeaderView/>
                <View>
                    <CommonMineCell
                        leftIconName='icon_mine_draft'
                        leftTitle='我的订单'
                        rightTitle='查看全部订单'/>
                    <MineMiddleView/>
                </View>
                <View style={{marginTop:20}}>
                    <CommonMineCell
                        leftIconName='icon_mine_draft'
                        leftTitle='我的钱包'
                        rightTitle='账户余额：￥666'/>
                    <CommonMineCell
                        leftIconName='icon_mine_draft'
                        leftTitle='抵用券'
                        rightTitle='10 张'/>
                </View>
                <View style={{marginTop:20}}>
                    <CommonMineCell
                        leftIconName='icon_mine_draft'
                        leftTitle='积分商城'/>
                </View>
                <View style={{marginTop:20}}>
                    <CommonMineCell
                        leftIconName='icon_mine_draft'
                        leftTitle='今日推荐'
                        rightIconName='icon_mine_new'/>
                </View>
                <View style={{marginTop:20}}>
                    <CommonMineCell
                        leftIconName='icon_mine_draft'
                        leftTitle='我要合作'
                        rightTitle='招财进宝'/>
                </View>
            </ScrollView>
        );
    }
});

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    },
    scrollViewStyle:{
        backgroundColor:'#e8e8e8'
    }
});

module.exports=Mine;
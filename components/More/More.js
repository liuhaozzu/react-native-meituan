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
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions =require('Dimensions');
var {width, height}=Dimensions.get('window');
var CommonCell=require('./CommonCell');
var More = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:10}}>
                        <CommonCell title='扫一扫'/>
                    </View>
                    <View style={{marginTop:10}}>
                        <CommonCell title='省流量模式' isSwitch={true}/>
                        <CommonCell title='消息提醒'/>
                        <CommonCell title='邀请好友'/>
                        <CommonCell title='清空缓存' rightTitle='191.1M'/>
                    </View>
                    <View style={{marginTop:10}}>
                        <CommonCell title='问卷调查'/>
                        <CommonCell title='支付帮助'/>
                        <CommonCell title='网络诊断'/>
                        <CommonCell title='关于我们'/>
                        <CommonCell title='我要应聘'/>
                    </View>
                    <View style={{marginTop:10}}>
                        <CommonCell title='精品应用'/>
                    </View>
                </ScrollView>

            </View>
        );
    },
    renderNavBar(){
        return (
            <View style={styles.navOutViewStyle}>
                <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_settings'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        );
    }
});

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#e8e8e8'
    },
    rightViewStyle:{
        position:'absolute',
        right:10,
        bottom:10
    },
    navOutViewStyle:{
        height: Platform.OS==='ios'?height*0.07:46,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    navImageStyle:{
        height: Platform.OS==='ios'?height*0.07:30,
        width: Platform.OS==='ios'?height*0.07:30
    }
});

module.exports=More;
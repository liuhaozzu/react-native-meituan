/**
 * Created by Administrator on 2017/4/13 0013 22:24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height}=Dimensions.get('window');
/*导入外部组件类*/
var HomeDetail=require('./HomeDetail');
var TopView=require('./TopView');
var HomeMiddleView=require('./HomeMiddleView');
var MiddleBottomView=require('./MiddleBottomView');
var ShopCenter=require('./ShopCenter');
var ShopCenterDetail=require('./ShopCenterDetail');
var GuessYouLike=require('./GuessYouLike');

var Home = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*首页的导航条*/}
                {this.renderNavBar()}
                {/*首页的主要内容*/}
                <ScrollView>
                    {/*头部的view*/}
                    <TopView />
                    {/*中间的内容*/}
                    <HomeMiddleView/>
                    {/*中下部分*/}
                    <MiddleBottomView
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView={(url)=>{this.pushToShopCenterDetail(url)}}
                    />
                    {/*猜你喜欢*/}
                    <GuessYouLike/>
                </ScrollView>
            </View>
        );
    },
    pushToDetail(){
        this.props.navigator.push(
            {
                component:HomeDetail,//要跳转的组件
                title:'详情页'
            }
        )
    },
    pushToShopCenterDetail(url){
        //跳转到购物中心
        url=this.dealWithUrl(url);
        //alert(url);
        this.props.navigator.push(
            {
                component:ShopCenterDetail,//要跳转的组件
                passProps:{'url':url}
            }
        )
    },
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=','');
    },
    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushToDetail()}}>
                    <Text style={{color:'white',fontSize:15}}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    placeholder='输入商家,品类,商圈'
                    style={styles.topInputStyle}
                    underlineColorAndroid="transparent"
                />
                {/*右边*/}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={{uri:'icon_homepage_map'}} style={[styles.navRightImgStyle,{backgroundColor:'white'}]}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
});

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    },
    topInputStyle:{
        width:width*0.73,
        height:36,
        backgroundColor:'white',
        padding:0,
        borderRadius:18,
        paddingLeft:9
    },
    navBarStyle:{
        height: Platform.OS==='ios'?height*0.07:46,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    rightNavViewStyle:{
        flexDirection:'row',
        //backgroundColor:'red',
        alignItems:'center',
        height:40
    },
    navRightImgStyle:{
        width:30,
        height:30,
        marginRight:5,
        borderRadius:3
    }
});

module.exports=Home;
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
    Platform, //判断当前运行的系统
    Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');
var Main = React.createClass({
    //初始化函数
    getInitialState(){
        return {
            selectedTab:'home'
        }
    },
    render(){
        return (
            <TabNavigator>
                {/*Home*/}
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home,10)}
                {/*Shop*/}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/*Mine*/}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
                {/*More*/}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}

            </TabNavigator>
        );
    },
    //每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component,badgeText){
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={()=><Image source={{uri:iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={()=><Image source={{uri:selectedIconName}} style={styles.iconStyle}/>}
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab===selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderBadge={this.renderBadge}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                    renderScene={(route, navigator)=>{
                            let Component=route.component;
                            return <Component {...route.passProps} navigator={navigator}></Component>
                        }}
                />
            </TabNavigator.Item>
        );
    },
    renderBadge(){
        return (
            <View style={styles.badgeTextStyle}>
                <Text style={{fontSize:11}}>10</Text>
            </View>
        );
    }
});

const styles=StyleSheet.create({
    iconStyle:{
        width: Platform.OS==='ios' ? 30:25,
        height: Platform.OS ==='ios' ? 30:25
    },
    selectedTitleStyle:{
        color:'orange'
    },
    badgeTextStyle:{
        marginTop:3,
        width:16,
        height:16,
        backgroundColor:'lightblue',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }
});

module.exports=Main;
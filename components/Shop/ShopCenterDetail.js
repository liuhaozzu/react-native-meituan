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
    Image,
    Platform,
    WebView
} from 'react-native';

var ShopCenterDetail = React.createClass({
    getInitialState(){
        return {
            detailUrl:this.props.url
        }
    },
    render(){
        //alert(this.props.url);
        return (
            <View style={styles.container}>
                {/*导航*/}
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri:this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate='normal'
                    startInLoadingState={true}
                />
            </View>
        );
    },
    renderNavBar(){
        return (
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle}>
                    <Image style={styles.navImageStyle} source={{uri:'node_modules_reactnative_libraries_customcomponents_navigationexperimental_assets_backicon'}}/>
                </TouchableOpacity>
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
        flex:1
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
    },
    leftViewStyle:{
        position:'absolute',
        left:10,
        bottom:10,
        flexDirection:'row',
        alignItems:'center'
    }
});

module.exports=ShopCenterDetail;
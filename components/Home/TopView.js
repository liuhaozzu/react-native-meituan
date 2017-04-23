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
    ScrollView,
    ListView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width}=Dimensions.get('window');

var TopMenuJson=require('../../LocalData/TopMenu.json');
var TopListView=require('./TopListView');

var TopView = React.createClass({
    getInitialState(){
        return {
            activePage:0
        }
    },
    render(){
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd}>
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    onScrollAnimationEnd(e){
        //求出当前页码
        console.log(e.nativeEvent.contentOffset.x+':'+width);
        var currentPage=Math.ceil(e.nativeEvent.contentOffset.x/width);
        //alert(currentPage);
        this.setState({
            activePage:currentPage
        });
    },
    //ScrollView内部的组件
    renderScrollItem(){
        var itemArr=[];
        //数据数组
        var dataArr=TopMenuJson.data;
        for(var i=0;i<dataArr.length;i++){
            itemArr.push(
                <TopListView key={i}
                    dataArr={dataArr[i]}
                />
            );
            //alert(itemArr.length);
        }
        return itemArr;
    },
    renderIndicator(){
        var indicatorArr=[];
        var style;
        //遍历创建数组
        for(var i=0;i<2;i++){
            //设置圆点样式
            style=(i===this.state.activePage)?{color:'orange'}:{color:'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize:26,textAlign:'center'},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }
});

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    indicatorViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:19
    }
});

module.exports=TopView;
/**
 * Created by Administrator on 2017/4/13 0013 22:24.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Home_D4=require('../../LocalData/Home_D4.json');
var MiddleCommonView=require('./MiddleCommonView');

var MiddleBottomView = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>

                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },
    renderBottomItem(){
        var itemArr=[];
        var dataArr=Home_D4.data;
        for(var i=0;i<dataArr.length;i++){
            var itemData=dataArr[i];
            //创建组件
            itemArr.push(
                <MiddleCommonView key={i}
                                  title={itemData.maintitle}
                                  subTitle={itemData.deputytitle}
                                  rightIcon={itemData.imageurl}
                                  titleColor={itemData.typeface_color}
                                  tplurl={itemData.tplurl}
                                  callbackClickCell={(data)=>{this.pop2TopView(data)}}/>
            );
        }
        return itemArr;
    },
    pop2TopView(data){
        this.props.popTopHome(data);
    }
});

const styles=StyleSheet.create({
    container:{
        marginTop:15
    },
    topViewStyle:{

    },
    bottomViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
});

module.exports=MiddleBottomView;
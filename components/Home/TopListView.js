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
    ListView,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width}=Dimensions.get('window');

var TopListView = React.createClass({
    getDefaultProps(){
        return {
            dataArr:[]
        }
    },
    getInitialState(){
        //创建数据源
        var ds=new ListView.DataSource({rowHasChanged:(row1,row2)=>{row1!=row2}})
        return {
            dataSource:ds.cloneWithRows(this.props.dataArr)
        }
    },
    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}/>
        );
    },
    renderRow(rowdata){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowdata.image}} style={{width:52,height:52}}/>
                    <Text style={{color:'gray',opacity:0.6}}>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles=StyleSheet.create({
    contentViewStyle:{
        flexWrap:'wrap',
        flexDirection:'row',
        width:width
    },
    cellStyle:{
        //backgroundColor:'red',
        width:70,
        height:70,
        flexDirection:'column',
        alignItems:'center',
        marginTop:10,
        marginLeft:(width-70*5)/6
    }
});

module.exports=TopListView;
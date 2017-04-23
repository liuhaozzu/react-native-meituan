/**
 * Created by Administrator on 2017/4/18 0018 20:38.
 */
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
    Image
} from 'react-native';

var MineCell = React.createClass({
    getDefaultProps(){
        return {
            leftIconName:'',
            leftTitle:'',
            rightIconName:'',
            rightTitle:''
        }
    },
    render(){
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle}></Image>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    rightSubView(){
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image source={{uri:'icon_common_cell_right_arrow'}} style={{width:11,height:16, marginRight:6,marginLeft:6}}/>
            </View>
        );
    },
    renderRightContent(){//右边具体返回的值
        if(this.props.rightIconName.length==0){
            return (
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            );
        }else {
            return (
                <Image source={{uri:this.props.rightIconName}} style={{width:86,height:86,marginRight:-19}}></Image>
            );
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height:50,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:6
    },
    rightViewStyle:{
        marginRight:6
    },
    leftImageStyle:{//左边的图片
        width:32,
        height:32,
        marginRight:6,
        borderRadius:16
    },
    leftTitleStyle:{
        fontSize:16,
        fontWeight:'bold'
    }
});

module.exports = MineCell;
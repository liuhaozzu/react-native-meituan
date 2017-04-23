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
    Switch
} from 'react-native';

var CommonCell = React.createClass({
    getDefaultProps(){
        return {
            title:'',
            isSwitch:false,
            rightTitle:''
        };
    },
    getInitialState(){
        return {
            isOn:false
        }
    },
    render(){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('abc')}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{fontWeight:'bold'}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>

        );
    },
    renderRightView(){
        if(this.props.isSwitch){
            return (
                <Switch value={this.state.isOn==true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} style={styles.switchStyle}/>
            );
        }else {
            return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.rightTitle()}
                <Image source={{uri:'icon_common_cell_right_arrow'}} style={{width:12,height:18, marginRight:6}}/>
            </View>
            );
        }

    },
    rightTitle(){
        if(this.props.rightTitle.length>0){
            return (
                <Text style={{color:'gray',marginRight:6}}>{this.props.rightTitle}</Text>
            )
        }
    }
});

const styles=StyleSheet.create({
    container:{
        height:44,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:8
    },
    switchStyle:{
        marginRight:8
    }
});

module.exports=CommonCell;
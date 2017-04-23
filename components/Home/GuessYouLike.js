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

var CommonCell=require('./BottomCommonCell');
var GuessYouLikeJson=require('../../LocalData/HomeGeustYouLike.json');

var GuessYouLike = React.createClass({
    getInitialState(){
        let ds=new ListView.DataSource({rowHasChanged:(row1,row2)=>{row1!=row2}});
        //初始化数据
        return {
            dataSource:ds
        }
    },
    render(){
        return (
            <View style={styles.container}>
                <CommonCell
                    leftIcon='cnxh'
                    leftTitle='猜你喜欢'
                />
                {/*列表*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },
    renderRow(rowData){
        return (
            <TouchableOpacity onPress={()=>{alert('aaa')}}>
                <View style={styles.listViewStyle}>
                    {/*左边*/}
                    <Image style={styles.imageViewStyle} source={{uri:this.dealWithImgUrl(rowData.imageUrl)}}/>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        <View style={styles.rightTopViewStyle}>
                            <Text>{rowData.title}</Text>
                            <Text>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
                        <View style={styles.rightBottomViewStyle}>
                            <Text style={{color:'red'}}>{rowData.subMessage}</Text>
                            <Text>{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },
    dealWithImgUrl(url){
        return url.replace('w.h','120.90');
    },
    componentDidMount(){
        this.loadDataFromNet();
    },
    loadDataFromNet(){
        /*fetch(this.props.apiUrl)
            .then((response)=>{response.json()})
            .then((response)=>{
                //console.log(response);
                this.setState({
                    dataSource:this.state.dataSource
                })
            })
            .catch((error)=>{alert(error)});*/
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(GuessYouLikeJson.data)
        });
    }
});

const styles=StyleSheet.create({
    container:{
        marginTop:15
    },
    imageViewStyle:{
        width:120,
        height:90
    },
    listViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    rightViewStyle:{
        marginLeft:11,
        width:220,
        justifyContent:'center'
    },
    rightTopViewStyle:{
        flexDirection:'row',
        marginBottom:6,
        justifyContent:'space-between'
    },
    rightBottomViewStyle:{
        flexDirection:'row',
        marginTop:6,
        justifyContent:'space-between'
    }
});

module.exports=GuessYouLike;
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
    TouchableOpacity
} from 'react-native';

var BottomCommonCell=require('./BottomCommonCell');
var Home_D5=require('../../LocalData/Home_D5.json');

var ShopCenter = React.createClass({
    getDefaultProps(){
        return {
            popToHomeView:null
        }
    },
    render(){
        return (
            <View style={styles.container}>
                {/*标题*/}
                <BottomCommonCell
                    leftIcon='gw'
                    leftTitle='购物中心'
                    rightTitle={Home_D5.tips}/>
                {/*content*/}
                <ScrollView style={styles.scrollViewStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
                {/*<View>
                    <Text>abc</Text>
                    {this.renderBase64Image()}
                </View>*/}
            </View>
        );
    },
    renderAllItem(){
        var itemArr=[];
        var itemData=Home_D5.data;
        //alert(itemData[0].img);
        for(let i=0;i<itemData.length;i++){
            let item=itemData[i];
            let base64Icon=item.img;
            //alert(item.detailurl);
            itemArr.push(
                <ShopCenterItem
                    shopImage={base64Icon}
                    shopSale={item.showtext.text}
                    shopName={item.name}
                    detailurl={item.detailurl}
                    key={i}
                    popTopShopCenter={(url)=>{this.popTopHome(url)}}
                />
            );
        }
        return itemArr;
    },
    renderBase64Image(){
        var base64Icon=Home_D5.data[0].img;
        //alert(base64Icon);
        return (
            <Image style={{width:100,height:100}} source={{uri:Home_D5.data[0].img}}/>
        )
    },
    popTopHome(url){
        //alert(url);
        if(this.props.popToHomeView==null){
            return;
        }
        this.props.popToHomeView(url);
    }
});
//每一个商场
var ShopCenterItem=React.createClass({
    getDefaultProps(){
        return {
            shopImage:'',
            shopSale:'',
            shopName:'',
            detailurl:'',
            popTopShopCenter:null
        }
    },
    render(){
        //alert(this.props.shopImage);
        return (
            <TouchableOpacity onPress={()=>{this.clickItem(this.props.detailurl)}}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },
    clickItem(url){
        //alert('clickItem>>>'+url);
        //判断
        if(this.props.detailurl==null){
            return;
        }
        //执行回调函数
        this.props.popTopShopCenter(url);
    }
});

const styles=StyleSheet.create({
    container:{
        marginTop:15
    },
    imageStyle:{
        width:120,
        height:100,
        borderRadius:8
    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        marginTop:1,
        padding:6
    },
    itemViewStyle:{
        flexDirection:'column',
        margin:6,
        alignItems:'center'
    },
    shopSaleStyle:{
        position:'absolute',
        left:8,
        bottom:30,
        backgroundColor:'orange',
        color:'white',
        padding:3,
        borderTopRightRadius:6,
        borderBottomRightRadius:6
    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:3
    }
});

module.exports=ShopCenter;
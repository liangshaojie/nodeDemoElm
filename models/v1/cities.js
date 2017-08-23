'use strict';

import mongoose from 'mongoose';
import cityData from '../../InitData/cities'
//创建模型
const citySchema = new mongoose.Schema({
    data: {}
});
//扩展几个静态方法,可以让model和实例调用
citySchema.statics.cityGuess = function(name){
    return new Promise(async (resolve, reject) => {
        const firtWord = name.substr(0,1).toUpperCase();
        try{
            const city = await this.findOne();
            Object.entries(city.data).forEach(item => {
                if(item[0] == firtWord){
                    item[1].forEach(cityItem => {
                        if (cityItem.pinyin == name) {
                            resolve(cityItem)
                        }
                    })
                }
            })
        }catch(err){
            reject({
                name: 'ERROR_DATA',
                message: '查找数据失败',
            });
            console.error(err);
        }
    })
}

citySchema.statics.cityHot = function (){
    return new Promise(async (resolve, reject) => {
        console.log(this);
        try{
            const city = await this.findOne();
            resolve(city.data.hotCities)
        }catch(err){
            reject({
                name: 'ERROR_DATA',
                message: '查找数据失败',
            });
            console.error(err);
        }
    })
}

citySchema.statics.cityGroup = function (){
    return new Promise(async (resolve, reject) => {
        try{
            const city = await this.findOne();
            const cityObj = city.data;

            delete(cityObj._id)
            delete(cityObj.hotCities)
            resolve(cityObj)
        }catch(err){
            reject({
                name: 'ERROR_DATA',
                message: '查找数据失败',
            });
            console.error(err);
        }
    })
}

citySchema.statics.getCityById = function(id){
    return new Promise(async (resolve, reject) => {
        try{
            const city = await this.findOne();
            // Object.entries 对象转成数组
            Object.entries(city.data).forEach(item => {
                if(item[0] !== '_id' && item[0] !== 'hotCities'){
                    item[1].forEach(cityItem => {
                        if (cityItem.id == id) {
                            resolve(cityItem)
                        }
                    })
                }
            })
        }catch(err){
            reject({
                name: 'ERROR_DATA',
                message: '查找数据失败',
            });
            console.error(err);
        }
    })
}

//用模型创建一个model
const Cities = mongoose.model('Cities', citySchema);

//模型可以调用findOne查找
Cities.findOne((err, data) => {
    if (!data) {
        //如果是Entity，使用save方法，如果是Model，使用create方法
        Cities.create({data: cityData});
    }
});
//导出模型
export default Cities
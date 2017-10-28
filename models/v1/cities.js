'use strict';

import mongoose from 'mongoose';
import cityData from '../../InitData/cities'

const citySchema = new mongoose.Schema({
	data: {}
});

citySchema.statics.cityHot = function (){
	return new Promise(async (resolve, reject) => {
		try{
			//操作数据库是异步操作，所以用async await
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
			//删除对象的一个键值对（key:value）
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


const Cities = mongoose.model('Cities', citySchema);

Cities.findOne((err, data) => {
	//第一次进入如果数据库没有数据，那么就去插入数据，根据本地文件
	if (!data) {
		Cities.create({data: cityData});
	}
});

export default Cities
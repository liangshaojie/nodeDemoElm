'use strict';
import BaseComponent from '../../prototype/baseComponent'
import CategoryModel from '../../models/shopping/category'
import DeliveryModel from '../../models/shopping/delivery'
import ActivityModel from '../../models/shopping/activity'

class Category extends BaseComponent{
	constructor(){
		super()
	}
	//获取所有餐馆分类和数量
	async getCategories(req, res, next){
		try{
			const categories = await CategoryModel.find({}, '-_id');
			res.send(categories);
		}catch(err){
			console.log('获取categories失败');
			res.send({
				status: 0,
				type: 'ERROR_DATA',
				message: '获取categories失败'
			})
		}
	}
	//获取配送方式
	async getDelivery(req, res, next){
		try{
			const deliveries = await DeliveryModel.find({}, '-_id');
			res.send(deliveries)
		}catch(err){
			console.log('获取配送方式数据失败');
			res.send({
				status: 0,
				type: 'ERROR_DATA',
				message: '获取配送方式数据失败'
			})
		}
	}
	//获取活动列表
	async getActivity(req, res, next){
		try{
			const activities = await ActivityModel.find({}, '-_id');
			res.send(activities)
		}catch(err){
			console.log('获取活动数据失败');
			res.send({
				status: 0,
				type: 'ERROR_DATA',
				message: '获取活动数据失败'
			})
		}
	}
}

export default new Category()

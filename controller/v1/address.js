'use strict';
import BaseComponent from '../../prototype/baseComponent'
import AddressModel from '../../models/v1/address'
class Address extends BaseComponent{
    constructor(){
		super()
		// this.addAddress = this.addAddress.bind(this);
    }
    async getAddress(req, res, next){
		const user_id = req.params.user_id;
		if (!user_id || !Number(user_id)) {
			res.send({
				type: 'ERROR_USER_ID',
				message: 'user_id参数错误',
			})
			return 
		}
		try{
			const addressList = await AddressModel.find({user_id}, '-_id');
			res.send(addressList)
		}catch(err){
			console.log('获取收获地址失败', err);
			res.send({
				type: 'ERROR_GET_ADDRESS',
				message: '获取地址列表失败'
			})
		}
	}
}

export default new Address()
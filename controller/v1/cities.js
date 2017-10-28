'use strict';
import Cities from '../../models/v1/cities'
import AddressComponent from '../../prototype/addressComponent'
class CityHandle extends AddressComponent{
    constructor(){
        super()
    }
    async getCity(req, res, next){
        const type = req.query.type;
        let cityInfo;
        try{
			switch (type){
				case 'guess': 
					// const city = await this.getCityName(req);
                    // cityInfo = await Cities.cityGuess(city);
                    cityInfo = 'guess'
					break;
				case 'hot': 
                    cityInfo = await Cities.cityHot();
					break;
				case 'group': 
                    // cityInfo = await Cities.cityGroup();
                    cityInfo = 'group'
					break;
				default: 
					res.json({
						name: 'ERROR_QUERY_TYPE',
						message: '参数错误',
					})
					return
			}
			res.send(cityInfo);
		}catch(err){
			res.send({
				name: 'ERROR_DATA',
				message: '获取数据失败',
			});
		}
    }
}

export default new CityHandle()
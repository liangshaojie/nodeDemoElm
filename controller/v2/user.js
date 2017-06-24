import AddressComponent from '../../prototype/addressComponent'
import crypto from 'crypto'
import dtime from 'time-formater'
class User extends AddressComponent {
    constructor(){
        super()
        // this.login = this.login.bind(this);
        // this.encryption = this.encryption.bind(this);
        // this.chanegPassword = this.chanegPassword.bind(this);
        // this.updateAvatar = this.updateAvatar.bind(this);
    }
    async getInfo(req, res, next){
        const sid = req.session.user_id;
        const qid = req.query.user_id;
        const user_id = sid || qid;
        if (!user_id || !Number(user_id)) {
            console.log('获取用户信息的参数user_id无效', user_id)
            res.send({
                status: 0,
                type: 'GET_USER_INFO_FAIELD',
                message: '通过session获取用户信息失败',
            })
            return
        }
        try{
            const userinfo = await UserInfoModel.findOne({user_id}, '-_id');
            res.send(userinfo)
        }catch(err){
            console.log('通过session获取用户信息失败', err);
            res.send({
                status: 0,
                type: 'GET_USER_INFO_FAIELD',
                message: '通过session获取用户信息失败',
            })
        }
    }

}

export default new User()
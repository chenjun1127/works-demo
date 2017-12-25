/*
 * @Author: chenjun
 * @Date:   2017-12-25 14:50:46
 * @Last Modified by:   0easy-23
 * @Last Modified time: 2017-12-25 15:11:52
 */
var checkLogin = () => {
    return new Promise((resolve, reject) => {
        let loginFlag = document.cookie.indexOf('userId') > -1 ? true : false;
        if (loginFlag = true) {
            resolve({
                status: 0,
                result: true
            })
        } else {
            reject('error');
        }
    })
};

var getUserInfo = () => {
    return new Promise((resolve, reject) => {
        let userInfo = {
            name: 'jack',
            password: '123456'
        };
        resolve(userInfo);
    })
};

checkLogin().then(res => {
    if (res.status == 0) {
        console.log('login success');
        return getUserInfo();
    }
}).catch(error => {
    console.log(`error:${error}`);
}).then(res => {
    console.log(`userInfo:${res.name} -- ${res.password}`)
})

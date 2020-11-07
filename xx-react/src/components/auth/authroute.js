import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter
class Authroute extends React.Component {
    // 组件加载后
    componentDidMount() {
        console.log('yijing jiazai ');
        axios.get('/user/info').then(res => {
            // console.log(res.status);
            if (res.status === 200) {
                // console.log('linked', res.data);
                if (res.data.code === 22) {
                    // 已经登陆过了，不用登陆
                    console.log('yijing denglu ');
                } else {
                    // 未登陆过，跳转登陆页面
                    console.log('weidenglu ');
                    // this.props.history.push('/login')
                }
            }
        })
        // 暂时没接入后端，让他先跳转
        // this.props.history.push('/login')
    }
    render() {
        return <p>判断用户信息的路由</p>
    }
}

export default Authroute
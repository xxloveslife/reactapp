import React from 'react'
import Logo from '../../components/logo/logo.js'
import { List, InputItem, WingBlank, Button, WhiteSpace, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { loginxx } from '../../redux/user/user.redux'
import highcompo from '../../components/highcompo/highcompo'
const RadioItem = Radio.RadioItem
@connect(
    state => state.user,   //做了什么，state参数，返回一个对象，so，在高阶函数connect中，调用了，这个方法 state=》state.user,传入的是store.getState,user是其中的一个key值，得到了key为user的其中所有属性，
    { loginxx }                                                       //然后和其他属性一起放入props中
)
@highcompo
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
        // this.state = {
        //     type: 'genius',
        //     user: '',
        //     pwd: '',
        // }
        // this.handleSubmit = this.handleSubmit.bind(this)
        console.log(this.props);
        // this.props.handleChange('type', 'genius')
    }
    register(props) {
        // console.log('props', this.props);
        this.props.history.push('/register')
    }

    // handleChange(key = '', val) {
    //     this.setState({ [key]: val })  //state[key] = value 
    // }

    handleSubmit() {
        // console.log('state', this.state);
        this.props.loginxx(this.props.state)
        setTimeout(() => {
            console.log('props', this.props.msg)
        }, 2000);




    }

    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>LOGIN</h2>
                <WingBlank>
                    <List>
                        <InputItem onChange={v => { this.props.handlechange('user', v) }}>用户名</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={v => { this.props.handlechange('pwd', v) }}>密码</InputItem>
                    </List>
                    <Button onClick={this.handleSubmit} type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                    <RadioItem onClick={() => this.props.handlechange('type', 'genius')} checked={this.props.state.type === 'genius'}>牛人</RadioItem>
                    <RadioItem onClick={() => this.props.handlechange('type', 'boss')} checked={this.props.state.type === 'boss'}>老板</RadioItem>
                </WingBlank>
            </div>
        )
    }
}

export default Login;
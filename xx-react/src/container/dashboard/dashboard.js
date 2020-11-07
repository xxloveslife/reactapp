import React from 'react'
import { NavBar } from 'antd-mobile'
// import { user } from '../../redux/user/user.redux'
import { connect } from 'react-redux'
import Navtabbar from '../../components/navtabbar/navtabbar'
import './dashboard.css'
function Boss() {
    return (
        <div>bossyemian</div>
    )
}

function Genius() {
    return (
        <div>geniusyemian</div>
    )
}

@connect(
    state => state
)
class dashboard extends React.Component {

    render() {
        const user = this.props.user
        const { pathname } = this.props.location

        const navlist = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'

            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'genius',
                title: 'boss列表',
                component: Genius,
                hide: user.type === 'boss'
            },

        ]

        // const mingzhong = navlist.find(v => v.path === pathname)
        console.log(pathname);

        return (

            <div  >
                {/* <div>header</div> */}
                {/* header 应该根据当前页面路由location来设置 */}
                <NavBar mode='dark' > {navlist.find(v => v.path === pathname).title}</NavBar>
                <div>content</div>
                <Navtabbar data={navlist} history={this.props.history}></Navtabbar>
            </div >
        )
    }
}

export default dashboard
import React from 'react'
import { TabBar } from 'antd-mobile'
import PropTypes from 'prop-types';

class Navtabbar extends React.Component {
    componentDidMount() {
        console.log('jiazaile ');
    }

    static propTypes = {
        data: PropTypes.array.isRequired
    }
    render() {
        const navList = this.props.data.filter(v => !v.hide)
        return (
            <div >
                <TabBar>
                    {navList.map(v => (
                        <TabBar.Item

                            key={v.path}
                            title={v.text}
                            onPress={() => {
                                console.log('beidianjile ');
                                this.props.history.push(v.path)
                            }}

                        >

                        </TabBar.Item>
                    ))}
                </TabBar>
            </div>
        )

    }
}

export default Navtabbar
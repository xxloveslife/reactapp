import React from 'react'

export default function highcompo(Comp) {
    // console.log('hahaha');
    return class Wrapcomp extends React.Component {
        constructor(props) {
            // console.log('kaishi gouzao le ');
            super(props)
            this.state = {

            }
            this.handleChange = this.handleChange.bind(this)
        }

        handleChange(key = '', val) {
            console.log(key, val);
            this.setState({ [key]: val })  //state[key] = value 
        }
        render() {
            return <Comp handlechange={this.handleChange} state={this.state} {...this.props}></Comp>     // 如果该装饰器的props是继承自父类，而没有发生改变的化，可以不传，实验验证，无影响
        }
    }
}

// 这里使用高阶组件，对使用该组件的对象，新增了handleChange ，  和  自带的初始state，  该两项属性，通过属性，传递给comp组件，在使用该高阶组件的地方可以使用  这两个属性
//这里  comp组件上传入了，该组件的的props，其实该props是super react.component里的，实验一下，如果不添加会怎么样
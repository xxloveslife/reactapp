import axios from "axios"

const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS'
const MSG_ERROR = 'MSG_ERROR'


const initState = {
    isAuth: false,
    user: '',
    pwd: '',
    type: '',
    msg: '',
}
//reducer
export function user(state = initState, action) {
    switch (action.type) {
        case MSG_ERROR:
            // console.log('action.msg', state);
            // state.msg = action.msg
            return { ...state, msg: action.msg };
        case SUBMIT_SUCCESS:
            return { ...state, msg: '', ...action.data, isAuth: true }
        default:
            return state;
    }
}


function errorMsg(msg) {
    return { msg: msg, type: MSG_ERROR }
}

function login_info(data) {
    return { type: SUBMIT_SUCCESS, data: data }
}


//action
export function loginxx({ type, user, pwd }) {
    // console.log('type..', { type, user, pwd });
    // 判断密码，user是否为空
    if (!user || !pwd) {
        return errorMsg('账号密码不能为空')

    }
    // 还要判断两次密码是否一致

    // 如果都没问题，axios访问后端，获取res，异步获取，用thunk中的dispatch  返回一个函数
    return dispatch => {
        axios.post('/user/login', { user, pwd, type }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(login_info(user, pwd, type))
            } else {
                // console.log('zou zheli le ');
                dispatch(errorMsg(res.data.msg))
            }
        })
    }


}
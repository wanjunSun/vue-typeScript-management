import axios from 'axios';
import qs from 'qs';
import config from './config'
// console.log('process.env.BASE_URL',process.env.BASE_URL)
// request拦截器 axios的一些配置
axios.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        // Do something with request error
        console.error("error:", error); // for debug
        Promise.reject(error);
    }
);

// respone拦截器 axios的一些配置
axios.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: any) => {
        console.error("error:" + error); // for debug
        return Promise.reject(error);
    }
);

function checkStatus(response: any) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

function checkCode(res: any) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        alert(res.msg)
    }
    if (res.data && (!res.data.success)) {
        alert(res.data.error_msg)
    }
    return res
}

export default {
    post(url: any, data: any) {
        return axios({
            method: 'post',
            baseURL: config.defalutUrl,
            url,
            data: qs.stringify(data),
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    },
    get(url: any, params: any) {
        return axios({
            method: 'get',
            baseURL: config.defalutUrl,
            url,
            params, // get 请求时带的参数
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return checkCode(res)
            }
        )
    }
}
import axios from 'axios';
axios.defaults.baseURL
let req = axios.create({
    baseURL: 'http://192.168.1.101:3000',
    timeout: 10000 //ms 请求10s，如果10s还没有请求到，则提示超时
})
//超时请求

// req.get();
// req.post()
export function getSeller() {
    return req.get('/api/seller');
}
export function getRatings() {
    return req.get('/api/ratings');
}
export function getGoods() {
    return req.get('/api/goods');
}
<<<<<<< HEAD
export const state = () => ({
    // 文章初始数据
    articleList: []
})

export const mutations = {
    // 修改文章数据  函数有两个参数  第一个是 state仓库  第二个是传递进来的参数
    alterArticle(state, data) {
        state.articleList = data
    }
}

export const actions = {
    // 获取文章  函数两个参数 第一个是 store实例  第二个是调用函数传递进来的参数
    getArticle(store, city) {
        this.$axios({
            url: "/posts",
            params: {
                city
            }
        }).then(res => {
            // 根据城市简称 获取到文章数据 发送请求
            // return res.data.data    //把值返回出去这样就能 .then  .catch
            // 调用自身的修改 state 仓库数据的方法
            store.commit('alterArticle', res.data.data)
        });
=======
export const state = () => {
    return {
        // 攻略详情数据
        detailData:{}
    }
}

export const mutations = {
    setDetailData(state,data){
        state.detailData=data
>>>>>>> 9729e549b6ebe3ca7486cc2e332d8a84c17c42a3
    }
}
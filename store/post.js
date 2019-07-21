export const state = () => {
    return {
        // 攻略详情数据
        detailData:{}
    }
}

export const mutations = {
    setDetailData(state,data){
        state.detailData=data
    }
}
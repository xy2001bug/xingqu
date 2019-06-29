export const state = ()=>({
    userInfo:{
        token:"",
        user:{}
    }
})

export const mutations = {
    setUserInfo (state,data){
        state.userInfo = data
    },
    clearUserInfo(state){
        if(process.browser){
            localStorage.removeItem("userInfo")
        }
        state.userInfo = {}
    }

};
export const actions = {
    // 登录'
    login({commit}, data){
        return this.$axios({
            url: "/accounts/login",
            method: "POST",
            data: data
        }).then(res => {
            const data = res.data;
            // 保存到state
            commit("setUserInfo", data);
            return data;
        })
    }
};  
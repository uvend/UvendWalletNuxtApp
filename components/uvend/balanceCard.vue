
<template>
    <p>card</p>
    {{ balance }}
</template>

<script>
export default{
    data(){
        const apiUrl = useRuntimeConfig().public.apiUrl;
        return {
            apiUrl: apiUrl,
            balance: null,
            token: null
        }
    },
    methods:{
        getBalance
    },
    mounted(){
        const token = localStorage.getItem("auth")
        this.getBalance(token)
    }
}

async function getBalance(token){
    try{
        console.log(`${this.apiUrl}/wallet/transactions`)
        const response = await $fetch(`${this.apiUrl}/wallet/balance`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data)
        this.balance = response.data.balance
    }catch(e){
        console.log(e)
    }

}
</script>
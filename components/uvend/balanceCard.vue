
<template>
    <Card class="balance-card flex items-center justify-between m-2 p-4">
        <div class="flex items-center gap-2">
            <Icon name="lucide:wallet" size="1.5em"/>
            <p class="text-sm">Balance</p>
        </div>
        <div>
            <p class="text-4xl font-bold">{{ balance }}</p>
        </div>
    </Card>
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
        this.balance = response.data.balance.toFixed(2)
    }catch(e){
        console.log(e)
    }

}
</script>
<style>
.balance-card{
    height: 15vh;
}
</style>
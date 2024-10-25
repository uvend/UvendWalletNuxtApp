<template>
    <div id="uvend-transactions">
        <p>transactions</p>
        {{ transactions }}
    </div>
</template>
<style>
#uvend-transactions{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 60vh;
}
</style>
<script>
export default{
    data(){
        const apiUrl = useRuntimeConfig().public.apiUrl;

        return{
            apiUrl: apiUrl,
            transactions: []
        }
    },
    methods:{
        getTransactions
    },
    mounted(){
        this.getTransactions();
    }
}
async function getTransactions(){
    try{
        console.log(this.apiUrl)
        const response = await $fetch(`${this.apiUrl}/wallet/transactions`,{
            method: "GET"
        })
        if(response.status == 200){
            this.transactions = response.data
        }
    }catch(e){
        console.log(e)
    }


}
</script>
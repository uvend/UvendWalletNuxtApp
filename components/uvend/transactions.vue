<template>
    <div id="uvend-transactions">
        <ul>
      <li v-for="transaction in transactions" :key="transaction.uuid">
        
        <Drawer>
            <DrawerTrigger>{{ transaction.uuid }}</DrawerTrigger>
            <DrawerContent>
            <DrawerHeader>

            </DrawerHeader>
            <div class="draw-content">
                {{ transaction.data }}
            </div>
            <DrawerFooter>
                <DrawerClose>
                <Button variant="outline">
                    Close
                </Button>
                </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
      </li>
    </ul>
    </div>
</template>
<style>
</style>
<script>
export default{
    props:{
        meterNumber:{
            type: String,
            required: false
        }
    },
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
        const token = localStorage.getItem("auth");
        this.getTransactions(token);
    }
}
async function getTransactions(token){
    try{
        let apiEndpoint = `${this.apiUrl}/wallet/transactions`;
        if(this.meterNumber){
            console.log(this.meterNumber)
            apiEndpoint = `${this.apiUrl}/wallet/transactions/meter/${this.meterNumber}`;
        }
        const response = await $fetch(apiEndpoint,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data)
        this.transactions = response.data
    }catch(e){
        console.log(e)
    }
}
</script>
<style>
.draw-content{
    max-height: 50vh;
    overflow-y: scroll;
}
</style>
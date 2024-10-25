<template>
    <div id="uvend-transactions">
        <ul class="p-2">
      <li v-for="transaction in transactions" :key="transaction.uuid">
        <Drawer>
            <DrawerTrigger class="w-full">
                <Card class="flex w-full p-2 my-1 items-center shadow-md">
                    <div>
                        <!-- icon type-->
                         <Icon name="mage:electricity" size="1.5em" v-if="transaction.meter_type == 'elect'"/>
                         <Icon name="mage:water-drop" size="1.5em" v-else-if="transaction.meter_type == 'water'"/>
                         <Icon name="mage:credit-card" size="1.5em" v-else="transaction.meter_type == 'water'"/>
                    </div>
                    <div class="flex-grow text-left mx-1">
                        <p>{{ getTransactionTitle(transaction) }}</p>
                        <p>{{ transaction.created_at }}</p>
                    </div>
                    <div  :class="transaction.transaction_type" class="font-bold">{{ transaction.amount }}</div>
                </Card>
            </DrawerTrigger>
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
        getTransactions,
        getTransactionTitle
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

async function getTransactionTitle(transaction){
    if(transaction.nickname != null){
        return transaction.nicknao
    }
}
</script>
<style>
.draw-content{
    max-height: 50vh;
    overflow-y: scroll;
}
.debit{
    color: #dc2626;
}
.credit{
    color: #16a34a;
}
</style>
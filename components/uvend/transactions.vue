<template>
    <div id="uvend-transactions">
        <ul class="p-2">
      <li v-for="transaction in transactions" :key="transaction.uuid">
        <Drawer>
            <DrawerTrigger class="w-full">
                <Card class="flex w-full p-2 my-1 items-center shadow-md">
                    <div class="flex items-center justify-center mr-3">
                        <!-- icon type-->
                         <Icon name="mage:electricity" size="1.5em" v-if="transaction.meter_type == 'elect'"/>
                         <Icon name="mage:water-drop" size="1.5em" v-else-if="transaction.meter_type == 'water'"/>
                         <Icon name="mage:credit-card" size="1.5em" v-else="transaction.meter_type == 'water'"/>
                    </div>
                    <div class="flex-grow text-left mx-1">
                        <p>{{ getTransactionTitle(transaction) }}</p>
                        <p class="text-xs">{{ getTransactionDate(transaction.created_at) }}</p>
                    </div>
                    <div  :class="transaction.transaction_type" class="font-bold">{{getTransactionSymbol(transaction.transaction_type)}}{{ transaction.amount }}</div>
                </Card>
            </DrawerTrigger>
            <DrawerContent>
            <DrawerHeader>

            </DrawerHeader>
            <div class="draw-content">
                <div v-if="transaction.data" v-for="token in transaction.data.listOfTokenTransactions" :key="token.serverResponseID">
                    <div v-for="data in token.tokens" :key="data.tokenNumber">
                        <p class="text-center">{{ data.units }} {{ data.unitName }}</p>
                        <p class="text-center font-bold mb-2">{{ data.delimitedTokenNumber }}</p>
                    </div>
                </div>

            </div>
            <DrawerFooter>
                <DrawerClose>
                <Button class="w-full">
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
        getTransactionTitle,
        getTransactionSymbol,
        getTransactionDate,
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

function getTransactionSymbol(transaction_type){
    if(transaction_type == "credit"){
        return "+";
    }else{
        return "-";
    }
}

function getTransactionTitle(transaction){
    if(transaction.nickname != null){
        return transaction.nickname;
    }
    if(transaction.meter_number != null){
        return transaction.meter_number;
    }

    if(transaction.transaction_type == "credit"){
        return "Credit";
    }

    if(transaction.transaction_type == "debit"){
        return "Debit";
    }
}

function getTransactionDate(created_at){
    const date = new Date(created_at); // Convert the string to a Date object
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) + ' ' + date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });
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
<template>
    <Dialog>
    <DialogTrigger>
        <Button>Buy now</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] h-[100vh]">
      <DialogHeader>
        <DialogTitle>
            {{ meterNumber }}
        </DialogTitle>
        <DialogDescription>
        </DialogDescription>
      </DialogHeader>
      <div class="flex flex-col h-full" v-if="!isSuccess">
        <Input type="tel" v-model="amount" />
      </div>
      <div v-else class="transaction-data h-full">
        <!-- use transaction com-->
        {{ transactionData }}
      </div>
      <DialogFooter>
        <DialogClose as-child v-if="isSuccess" @close="handleClose">
          <Button>
            Close
          </Button>
        </DialogClose>
        <Button @click="onSubmit" class="w-full" v-else>
          Buy now
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  <!-- meter transactions here -->
</template>
<script>


export default{
    props:{
        meterNumber:{
            type: String,
            required: true,
            isSuccess: false,
            transactionData: null
        }
    },
    data(){
        const apiUrl = useRuntimeConfig().public.apiUrl;
        return {
            apiUrl: apiUrl,
            apiToken: null,
            amount: null,
            isSuccess: false
        }
    },
    methods:{
        onSubmit,
        handleClose
    },
    mounted(){
        const token = localStorage.getItem("auth");
        this.apiToken = token;
    }
}

async function onSubmit(){
    console.log(this.amount, this.meterNumber)
    try{
        const response = await $fetch(`${this.apiUrl}/wallet/vend`,{
            method: "POST",
            body: {
                meter_number : this.meterNumber,
                amount: this.amount,
                vend: true
            },
            headers: {
                Authorization: `Bearer ${this.apiToken}`
            }
        })
        console.log(response.data)
        this.transactionData = response.data.transaction_data;
        this.isSuccess = true;
    }catch(e){
        console.log(e)
    }
}

function handleClose(){
    this.$emit("reload")
}

</script>
<style>
.transaction-data{
    overflow-y: scroll;
}
</style>
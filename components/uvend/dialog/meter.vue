<template>
    <Dialog>
    <DialogTrigger as-child>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] h-[100vh]">
      <DialogHeader>
        <DialogTitle>Add Meter</DialogTitle>
        <DialogDescription>
          Add a meter to manage in your wallet here. 
        </DialogDescription>
      </DialogHeader>
      <div class="flex flex-col h-full">
        <Label for="name" class="py-2">
            Nickname
        </Label>
        <Input v-model="nickname" placeholder="Flat A1" class="w-full" />
        <Label for="meter" class="py-2">Meter</Label>
        <Input v-model="meter" placeholder="0100000000000123" class="w-full" />
      </div>
      <DialogFooter>
        <Button @click="addMeter" class="w-full">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
<script>
export default{
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data(){
    const apiUrl = useRuntimeConfig().public.apiUrl;
    return {
      apiUrl: apiUrl,
      apiToken: null,
      meter: null,
      nickname: null,
    }
  },methods:{
    addMeter
  },
  mounted(){
    const token = localStorage.getItem("auth")
    this.apiToken = token;
  }
}

async function addMeter(){
  try{
    //console.log(this.apiToken)
    if(!this.meter && !this.nickname){
      return;
      // toast error
    }
    console.log(this.meter,this.nickname)
    const response = await $fetch(`${this.apiUrl}/meter`,{
      method: "POST",
      body: {
          "meter_number" : this.meter,
          "nickname" : this.nickname
        },
        headers:{
          Authorization: `Bearer ${this.apiToken}`
        }
    })
    console.log(response)
    this.$emit("addSuccess");
  }catch(e){
    console.log(e)
  }
  
}
</script>
<template>
    <ul class="w-full">
      <li v-for="meter in meters" :key="meter.uuid" @click="navigateTo(`/meters/${meter.meter_number}`)">
        <Card class="flex p-4 my-2 items-center w-full justify-between shadow-md">
            <div>
                <p class="font-bold">{{ meter.nickname }}</p>
                <p class="font-light text-sm">{{ meter.meter_number }}</p>
            </div>
            <Icon name="mage:electricity" size="1.5em" class="m-2" v-if="meter.type == 'elect'"/>
            <Icon name="mage:water-drop" size="1.5em" class="m-2" v-if="meter.type == 'water'"/>
        </Card>
      </li>
    </ul>
</template>
<script>
export default{
    data(){
        const apiUrl = useRuntimeConfig().public.apiUrl;
        return{
            apiUrl: apiUrl,
            meters: []
        }
    },methods:{
        getMeters
    },mounted(){
        const token = localStorage.getItem("auth");
        this.getMeters(token)
    }
}

async function getMeters(token){
    try{
        const response = await $fetch(`${this.apiUrl}/meter`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        this.meters = response.data
    }catch(e){
        console.log(e)
    }

}
</script>
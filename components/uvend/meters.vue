<template>
    <ul>
      <li v-for="meter in meters" :key="meter.uuid" @click="navigateTo(`/meters/${meter.meter_number}`)">
        {{ meter.nickname }} ({{ meter.uuid }})
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
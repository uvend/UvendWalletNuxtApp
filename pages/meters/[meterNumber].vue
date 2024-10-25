<template>
    <Button @click="navigateTo('/meters')">Back</Button>
    {{ meterNumber }}
    <UvendDialogPurcahse :meterNumber="meterNumber" @reload="reloadMeterComponent"/>
    <!-- trandsaction component with key -->
    <UvendTransactions :meterNumber="meterNumber" :key="transactionComponentKey"/>
</template>
<script>
export default{
    setup() {
    const route = useRoute(); // Get the current route
    const meterNumber = route.params.meterNumber; // Access the meter number from route parameters

    return {
      meterNumber, // Return the meter number to the template
    };
  },
  data(){
    return{
        transactionComponentKey : 1
    }
  },
  methods:{
    reloadMeterComponent
  }
}
function reloadMeterComponent(){
    this.transactionComponentKey += 1;
}
</script>
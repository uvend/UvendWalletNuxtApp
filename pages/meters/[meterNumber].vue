<template>
    <header>
        <Button @click="navigateTo('/meters')" variant="secondary"><Icon name="lucide:arrow-left" /></Button>
        <UvendDialogPurcahse :meterNumber="meterNumber" @reload="reloadMeterComponent"/>
    </header>
    <div class="transaction-container">
        <UvendTransactions :meterNumber="meterNumber" :key="transactionComponentKey"/>
    </div>
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
<style>
.transaction-container{
    height: 90vh;
    overflow-y: auto;
}
</style>
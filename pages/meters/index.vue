<template>
    <div class="meters">
        <div class="flex flex-col items-center gap-1 w-full">
            <div class="search-container flex w-full justify-between">
                <Button  variant="outline"><Icon name="lucide:search" class="w-4 h-4"/></Button>
                <Input id="email" type="email" placeholder="Search" class="flex-grow"/>
            </div>
            <UvendDialogMeter v-model:open="isDialogOpen" @addSuccess="closeDialog"/>
            <Button @click="openDialog" type="submit" class="w-full">
                Add Meter
            </Button>
            <UvendMeters :key="metersKey" />
        </div>
    </div>
</template>
<script>

definePageMeta({
  layout: 'auth',
  middleware: 'auth', // Protects this page
});
export default{
    data(){
        return{
            isDialogOpen: false,
            metersKey: 0,
        }
    },
    methods:{
        openDialog,
        closeDialog
    }
}
function openDialog(){
    this.isDialogOpen = true;
    console.log(this.isDialogOpen)
}

function closeDialog(){
    this.isDialogOpen = false;
    console.log(this.isDialogOpen);
    // reload meters
    this.metersKey += 1;
}
</script>
<style>
.meters{
    padding: 20px;
}
</style>
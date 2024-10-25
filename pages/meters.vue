<template>
    <div class="meters">
        <div class="flex flex-col items-center gap-1 w-full">
            <div class="search-container flex w-full justify-between">
                <Button  variant="outline"><Icon name="lucide:search" class="w-4 h-4"/></Button>
                <Input id="email" type="email" placeholder="Search" class="flex-grow"/>
            </div>
            <UvendDialogMeter />
        </div>
    </div>
</template>
<script>
import Button from '~/components/ui/button/Button.vue';

definePageMeta({
  layout: 'auth',
  middleware: 'auth', // Protects this page
});
</script>
<style>
.meters{
    padding: 20px;
}
</style>
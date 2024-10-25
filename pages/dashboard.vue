<template>
    <UvendBalanceCard />
    <UvendTransactions />
</template>
<script>
definePageMeta({
  layout: 'auth',
  middleware: 'auth', // Protects this page
});
</script>
<style>
</style>
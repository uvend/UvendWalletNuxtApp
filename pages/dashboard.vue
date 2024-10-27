<template>
    <UvendBalanceCard />
    <div class="p-2">
      <p>Transactions</p>
      <div class="transactions-container">
        <UvendTransactions />
      </div>
    </div>
</template>
<script>
definePageMeta({
  layout: 'auth',
  middleware: 'auth', // Protects this page
});
</script>
<style>
.transactions-container{
  max-height: 58vh;
  overflow-y: auto;
}
</style>
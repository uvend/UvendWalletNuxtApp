<template>
<div class="auth-layout">
    <header>
        <h1></h1>
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
            <Button variant="outline" size="icon">
                <Icon name="lucide:ellipsis-vertical" class="w-4 h-4"/>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="mr-2" align="start">
                <DropdownMenuItem @click="signOut">                  
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>

    <main>
        <slot />
    </main>

    <footer class="flex justify-center align-center gap-2">
        <Button @click="navigateTo('/')"class="flex flex-col" variant="secondary">
            <Icon name="lucide:wallet" h="30px" size="1.5em"/>
        </Button>
        <Button @click="navigateTo('/meters')" class="flex flex-col" variant="secondary">
            <Icon name="lucide:calculator" h="30px" size="1.5em" />
        </Button>
        <Button @click="navigateTo('/transactions')"cclass="flex flex-col" variant="secondary">
            <Icon name="lucide:arrow-right-left" h="30px" size="1.5em" />
        </Button>
    </footer>
</div>
</template>

<script>
export default{
    methods:{
        signOut
    }
}
async function signOut(){
    localStorage.removeItem("auth")
    navigateTo('/')
}
</script>

<style scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

header {
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}

main{
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    height: calc(100vh - 120px);
    position: relative;
    overflow-y: scroll;
    scrollbar-width: none;

}

footer {
    margin-top: auto;
    padding: 10px;
    text-align: center;
    background-color: #f5f5f5;
}
</style>
<template>
    <!-- Auth -->
     <div class="flex flex justify-center items-center h-screen">
        <Card class="w-[350px]">
            <CardHeader>
            </CardHeader>
            <CardContent v-if="otp">
                <PinInput
                    class="py-4 flex justify-center"    
                    placeholder="○"
                    @complete="handleComplete"
                    v-model="otp_value"
                    >
                    <PinInputGroup>
                        <PinInputInput
                            class="h-12 w-12"
                            v-for="(id, index) in 4"
                            :key="id"
                            :index="index"
                            type="tel"
                            />
                    </PinInputGroup>
                    </PinInput>
            </CardContent>
            <CardContent v-else>
                <div class="flex w-full max-w-sm items-center space-x-2">
                    <Button variant="secondary">{{ country_code }}</Button>
                    <Input type="tel" placeholder="Phone" v-model="phone"/>
                </div>
            </CardContent>
            <CardFooter>
                <Button v-if="!otp" class="w-full" @click="handleLogin">Sign in <Icon name="lucide:arrow-right" size="1.5em" class="ml-2"/></Button>
                <Button v-if="otp" @click="backToLogin" variant="outline" class="w-full text-xs"><Icon name="lucide:arrow-left" size="1.5em" class="mr-2"/> Back</Button>
            </CardFooter>
        </Card>
    </div>

</template>
<script>
definePageMeta({
  middleware: [
    'noauth',
  ]
});
import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast();

export default{
    data(){
        const apiUrl = useRuntimeConfig().public.apiUrl
        return {
            country_code: "+27",
            phone: null,
            otp: false,
            otp_value: [],
            apiUrl: apiUrl
        }
    },
    methods:{
        handleLogin,
        handleComplete,
        backToLogin
    }
}

async function handleLogin(){
    const { status, response} = await $fetch(`${this.apiUrl}/user/otp/initiate`,{
        method: "POST",
        body: {
            phone: "+27"+this.phone
        }
    })
    this.otp = status;
    
}

async function backToLogin(){
    this.otp = false;
}

async function handleComplete() {
    try{
        let otp = this.otp_value.join('')
        console.log(otp)
        const {status, response} = await $fetch(`${this.apiUrl}/user/otp/validate`,{
            method: "POST",
            body:{
                phone: "+27"+this.phone,
                otp: otp
            }
        })
        if(status){
            const token = response.token;
            localStorage.setItem('auth',token)
            navigateTo('/dashboard')
        }
    }catch(e){
        console.log(e)
    }
    
}
</script>
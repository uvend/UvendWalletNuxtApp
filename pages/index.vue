<template>
    <!-- Auth -->
     <div class="flex flex justify-center items-center h-screen">
        <Card class="w-[350px]">
            <CardHeader>
            </CardHeader>
            <CardContent v-if="otp">
                <PinInput
                    otp
                    class="py-4 flex justify-center"
                    id="pin-input"
                    v-model="otp_value"
                    placeholder="○"
                    @complete="handleComplete"
                    >
                    <PinInputGroup>
                        <PinInputInput
                            class="h-12 w-12"
                            v-for="(id, index) in 4"
                            :key="id"
                            :index="index"
                            />
                    </PinInputGroup>
                    </PinInput>
            </CardContent>
            <CardContent v-else>
                <div class="flex gap-2 w-full pb-2">
                    <Button variant="secondary">{{ country_code }}</Button>
                    <Input type="phone" placeholder="Phone" v-model="phone"/>
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
import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast();

export default{
    data(){
        return {
            country_code: "+27",
            phone: null,
            otp: false,
            otp_value: []
        }
    },
    methods:{
        handleLogin,
        handleComplete,
        backToLogin
    }
}

async function handleLogin(){
    const apiUrl = useRuntimeConfig().public.apiUrl
    const phone = this.phone;
    console.log(phone)
    const { data, status, error, refresh, clear } = await $fetch(`${apiUrl}/user/otp/initiate`,{
        method: "POST",
        body: {
            phone: "+27"+this.phone
        }
    })
    this.otp = status;
    toast({
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      });
}

async function backToLogin(){
    this.otp = false;
}

async function handleComplete() {
    console.log(otp_value)
    
}
</script>
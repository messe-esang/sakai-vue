<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { onMounted, ref } from 'vue';

const email = ref('');
const password = ref('');
const checked = ref(false);

onMounted(() => {
    const input = document.getElementById('userId');
    input.addEventListener('input', (event) => {
        const value = event.target.value;
        event.target.value = value.replace(/[^A-Za-z-_.]/g, ''); // 영문 외 문자 제거
    });
});
</script>

<template>
    <FloatingConfigurator />
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 signin-box shadow-xl">
                <div class="flex items-center justify-center mb-8">
                    <img class="h-15" src="https://d1t592kv5arl1s.cloudfront.net/wp-content/uploads/2022/03/24204012/police_logo_2022.png" alt="국제치안산업대전 참가업체" />
                </div>

                <div>
                    <label for="userId" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2 required">아이디</label>
                    <InputText id="userId" type="text" placeholder="ID" class="w-full md:w-[30rem] mb-8" v-model="email" pattern="[a-zA-Z-_.]*" title="영문만 입력이 가능합니다" inputmode="latin" />

                    <label for="userPw" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2 required">비밀번호</label>
                    <Password id="userPw" v-model="password" placeholder="Password" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>

                    <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                        <div class="flex items-center">
                            <Checkbox v-model="checked" id="rememberMe" binary class="mr-2"></Checkbox>
                            <label for="rememberMe">로그인 상태 유지</label>
                        </div>
                        <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">비밀번호 찾기</span>
                    </div>
                    <Button label="로그인" class="w-full" as="router-link" to="/"></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}

.signin-box {
    border: 1px solid var(--surface-border);
    border-radius: 30px;
}
</style>

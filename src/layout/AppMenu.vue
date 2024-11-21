<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        labelVisible: false,
        items: [{ label: 'Home', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: '참가',
        items: [
            { label: '참가신청·신청내역', icon: 'pi pi-fw pi-pen-to-square', to: '/register' },
            { label: '출품료 납부내역', icon: 'pi pi-fw pi-receipt', to: '/register/payment' }
        ]
    },
    {
        label: '출품정보',
        items: [
            { label: '회사명 신청', icon: 'pi pi-fw pi-building', to: '/exhibitor/info' },
            { label: '출입증 신청', icon: 'pi pi-fw pi-tags', to: '/exhibitor/staffs' },
            { label: '참가기업 메뉴얼', icon: 'pi pi-fw pi-book', to: '/exhibitor/manual' }
        ]
    },
    {
        label: '출품홍보',
        items: [
            { label: '무료 초청장 발송', icon: 'pi pi-fw pi-envelope', to: '/promotion/invite' },
            { label: '온라인 제품등록', icon: 'pi pi-fw pi-sparkles', to: '/promotion/online-products' }
        ]
    },
    {
        label: '기타',
        items: [
            { label: '공지사항', icon: 'pi pi-fw pi-megaphone', to: '/notice' },
            { label: '전시회 목록', icon: 'pi pi-fw pi-list', to: '/fairs' }
        ]
    }
    // ...demoMenu
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped>
.menu-separator {
    border-bottom: 1px solid var(--surface-border);
}
</style>

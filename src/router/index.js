import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { uikits } from './uikit';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: '홈',
                    component: () => import('@/views/Home.vue')
                },
                {
                    path: '/register',
                    name: '참가신청',
                    component: () => import('@/views/pages/Register.vue')
                },
                {
                    path: '/register/payment',
                    name: '출품료납부내역',
                    component: () => import('@/views/pages/PaymentReceipt.vue')
                },
                {
                    path: '/exhibitor/info',
                    name: '회사명신청',
                    component: () => import('@/views/pages/Exhibitor.vue')
                },
                {
                    path: '/exhibitor/staffs',
                    name: '출입증신청',
                    component: () => import('@/views/pages/OnSiteStaffs.vue')
                },
                {
                    path: '/exhibitor/manual',
                    name: '참가기업메뉴얼',
                    component: () => import('@/views/pages/ExhibitorManual.vue')
                },
                {
                    path: '/promotion/invite',
                    name: '무료초청장발송',
                    component: () => import('@/views/pages/PromotionInvitation.vue')
                },
                {
                    path: '/promotion/online-products',
                    name: '온라인제품등록',
                    component: () => import('@/views/pages/PromotionOnlineProducts.vue')
                },
                {
                    path: '/notice',
                    name: '공지사항',
                    component: () => import('@/views/pages/Notice.vue')
                },
                {
                    path: '/fairs',
                    name: '전시회목록',
                    component: () => import('@/views/pages/FairList.vue')
                },
                ...uikits
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;

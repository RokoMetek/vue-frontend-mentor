import { createRouter, createWebHistory } from 'vue-router'
import ThreePreviewCardVue from '../views/ThreePreviewCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ThreePreviewCardVue
    },
    {
      path: '/four-card-feature',
      name: 'fourCardFeature',
      component: () => import('../views/FourCardFeature.vue')
    },
    {
      path: '/social-proof',
      name: 'socialProof',
      component: () => import('../views/SocialProof.vue')
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: () => import('../views/ExpensesView.vue')
    },
    {
      path: '/advice',
      name: 'advice',
      component: () => import('../views/AdviceGeneratorView.vue')
    },
    {
      path: '/tip-calculator',
      name: 'tipCalculator',
      component: () => import('../views/TipCalculatorView.vue')
    },
    {
      path: '/blogr',
      name: 'blogr',
      component: () => import('../views/BlogrLandingView.vue')
    },
    {
      path: '/newsletter',
      name: 'newsletter',
      component: () => import('../views/NewsletterView.vue')
    },
    {
      path: '/crowdfunding',
      name: 'crowdfunding',
      component: () => import('../views/CrowdfundingView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/comment-section',
      name: 'comment',
      component: () => import('../views/CommentSectionView.vue')
    }
  ]
})

export default router

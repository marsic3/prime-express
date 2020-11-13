import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32570e84 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _56abeb54 = () => interopDefault(import('../pages/Appointment.vue' /* webpackChunkName: "pages/Appointment" */))
const _53ad549e = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _86bd1ef4 = () => interopDefault(import('../pages/case-studies/index.vue' /* webpackChunkName: "pages/case-studies/index" */))
const _096b5c52 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _7f4ed890 = () => interopDefault(import('../pages/Cybersecurity.vue' /* webpackChunkName: "pages/Cybersecurity" */))
const _38eb7d37 = () => interopDefault(import('../pages/IT-Services.vue' /* webpackChunkName: "pages/IT-Services" */))
const _cbaef2de = () => interopDefault(import('../pages/IT-Solutions.vue' /* webpackChunkName: "pages/IT-Solutions" */))
const _4c2a3144 = () => interopDefault(import('../pages/Leadership.vue' /* webpackChunkName: "pages/Leadership" */))
const _260fccac = () => interopDefault(import('../pages/Processing.vue' /* webpackChunkName: "pages/Processing" */))
const _7d4d9004 = () => interopDefault(import('../pages/Resolutions.vue' /* webpackChunkName: "pages/Resolutions" */))
const _f42cbc28 = () => interopDefault(import('../pages/Service.vue' /* webpackChunkName: "pages/Service" */))
const _7ded3d7b = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _36e2ee8c = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _0addf7b2 = () => interopDefault(import('../pages/element/box-icon.vue' /* webpackChunkName: "pages/element/box-icon" */))
const _78b86f9d = () => interopDefault(import('../pages/element/box-image.vue' /* webpackChunkName: "pages/element/box-image" */))
const _6f010fea = () => interopDefault(import('../pages/element/box-large-image.vue' /* webpackChunkName: "pages/element/box-large-image" */))
const _ee87cff6 = () => interopDefault(import('../pages/element/call-to-action.vue' /* webpackChunkName: "pages/element/call-to-action" */))
const _9eb62e3a = () => interopDefault(import('../pages/element/counters.vue' /* webpackChunkName: "pages/element/counters" */))
const _3df3f32b = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _272681fa = () => interopDefault(import('../pages/element/teams.vue' /* webpackChunkName: "pages/element/teams" */))
const _45b832f4 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _76844724 = () => interopDefault(import('../pages/case-studies/_id.vue' /* webpackChunkName: "pages/case-studies/_id" */))
const _215c61b7 = () => interopDefault(import('../pages/service/_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _4ac66d2e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _32570e84,
    name: "About"
  }, {
    path: "/Appointment",
    component: _56abeb54,
    name: "Appointment"
  }, {
    path: "/blog",
    component: _53ad549e,
    name: "blog"
  }, {
    path: "/case-studies",
    component: _86bd1ef4,
    name: "case-studies"
  }, {
    path: "/Contact",
    component: _096b5c52,
    name: "Contact"
  }, {
    path: "/Cybersecurity",
    component: _7f4ed890,
    name: "Cybersecurity"
  }, {
    path: "/IT-Services",
    component: _38eb7d37,
    name: "IT-Services"
  }, {
    path: "/IT-Solutions",
    component: _cbaef2de,
    name: "IT-Solutions"
  }, {
    path: "/Leadership",
    component: _4c2a3144,
    name: "Leadership"
  }, {
    path: "/Processing",
    component: _260fccac,
    name: "Processing"
  }, {
    path: "/Resolutions",
    component: _7d4d9004,
    name: "Resolutions"
  }, {
    path: "/Service",
    component: _f42cbc28,
    name: "Service"
  }, {
    path: "/blog/blog-details",
    component: _7ded3d7b,
    name: "blog-blog-details"
  }, {
    path: "/element/accordion",
    component: _36e2ee8c,
    name: "element-accordion"
  }, {
    path: "/element/box-icon",
    component: _0addf7b2,
    name: "element-box-icon"
  }, {
    path: "/element/box-image",
    component: _78b86f9d,
    name: "element-box-image"
  }, {
    path: "/element/box-large-image",
    component: _6f010fea,
    name: "element-box-large-image"
  }, {
    path: "/element/call-to-action",
    component: _ee87cff6,
    name: "element-call-to-action"
  }, {
    path: "/element/counters",
    component: _9eb62e3a,
    name: "element-counters"
  }, {
    path: "/element/gradation",
    component: _3df3f32b,
    name: "element-gradation"
  }, {
    path: "/element/teams",
    component: _272681fa,
    name: "element-teams"
  }, {
    path: "/blog/:id",
    component: _45b832f4,
    name: "blog-id"
  }, {
    path: "/case-studies/:id?",
    component: _76844724,
    name: "case-studies-id"
  }, {
    path: "/service/:id?",
    component: _215c61b7,
    name: "service-id"
  }, {
    path: "/",
    component: _4ac66d2e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

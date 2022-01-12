<template>
  <div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
        <div class="container-fluid desktop-nav">
            <div class="row">
                <!--Logo-->
                <div class="col-sm-2">
                    <div class="logo-area">
                        <a href="#"></a>
                        <img src="/img/logo.png" alt="logo" class="img-fluid"/>
                    </div>
                </div>

                <!--search bar-->

                <div class="col-sm-6 pt-0">
                     <Search/>
                </div>

                <div class="col-sm-4">

                </div>
            </div>

            <div class="row">
                <!--delivery address-->
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
                     <div class="nav-global-location">
                        <nuxt-link to="/address" class="nav-a nav-a-2">
                            <div id="nav-packard-glow-loc-icon" class="nav-sprite"></div>
                            <div id="glow-ingress-block">
                                <span id="glow-ingress-line1" class="nav-line-1">Deliever to</span>
                                 <span id="glow-ingress-line2" class="nav-line-2">Califonia</span>
                            </div>
                        </nuxt-link>
                     </div>
                </div>

                <!-- shopping--->
                <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
                       <div class="nav-fill">
                           <div class="nav-shop">
                               <nuxt-link to="/history" class="nav-a nav-a-2 nav-single-row-link">
                                     <span class="nav-line-2">
                                          Browsing history
                                          <span class="nav-icon nav-arrow" style="visibility:visible"></span>
                                     </span>
                               </nuxt-link>
                           </div>

                           <div class="nav-xshop-container">
                               <div class="nav-xshop">
                                   <a class="nav-a" href="#">Today's deals</a>
                                   <a class="nav-a" href="#">Your amazon.com</a>
                                   <a class="nav-a" href="#">Gifft cards</a>
                                   <a class="nav-a" href="#">Register</a>
                                   <a class="nav-a" href="#">sell</a>
                               </div>
                           </div>
                       </div>
                </div>

                <!---Account and order-->
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
                    <div class="nav-tools">
                        <a id="icp-nav-flyout" href="#" class="nav-a nav-a-2 icp-link-style-2">
                            <span class="icp-nav-link-inner">
                                <span class="nav-line-1">
                                    <span class="icp-nav-globe-img-2"></span>
                                    <span class="icp-nav-language">EN</span>
                                </span>
                            </span>
                        </a>

                        <span class="icp-nav-link-border"></span>
                        <template v-if="$auth.$state.loggedIn">
                            <nuxt-link id="nav-link-accountList" to="/register" class="nav-a nav-a-2" tabindex="0">
                                <span class="nav-line-1">Hello</span>
                                <span class="nav-line-2">
                                    {{ $auth.state.user.name }}
                                </span>
                                <a href="#" @click="onDelete">delete</a>
                            </nuxt-link>
                        </template>
                        <template v-else>
                            <nuxt-link id="nav-link-accountList" to="/register" class="nav-a nav-a-2" tabindex="0">
                                <span class="nav-line-1">Hello</span>
                                <span class="nav-line-2">
                                    Account &nbsp; List
                                 <span class="nav-icon nav-arrow" style="visibility: visible"></span>
                                </span>
                            </nuxt-link>
                        </template>
                        
                        <nuxt-link id="nav-cart" to="/cart" class="nav-a nav-a-2">
                            <span aria-hidden="true" class="nav-line-1"></span>
                            <span aria-hidden="true" class="nav-line-2"></span>
                            <span class="nav-cart-icon nav-sprite"></span>
                            <span id="nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-0">{{ getCartLenght }}</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
   import { mapGetters } from "vuex"
   import Search from "../components/Search.vue"
   export default {
       name:'AppNavbar',
       component:{
           Search
       },
       computed:{
           ...mapGetters(["getCartLenght"])
       },
       methods:{
           onDelete(){
               this.$auth.logout()
           }
       },
   }
</script>

<!-- Please remove this file from your project -->
<template>
    <main class="listingPage">
         <div class="container-fluid">
             <div class="row">
                  <div class="col-xl-2 lg-3 md-4 col-sm-4">
                      <!--sidebar--->
                  </div>
                  <!---main content-->
                  <div class="col-xl-10 c0l-lg-0 md-8 col-sm-8">

                      <div class="mainResults">
                           <ul class="s-result-list">
                             <li v-for="product in products" :key="product._id" class="s-result-item cellwidget">
                                 <div class="s-items-container">
                                      <!--best bestSeller--->
                                      <div class="a-spacing-micro">
                                          <div class="bestSeller">
                                             <a href="#">Best seller</a>
                                          </div>
                                      </div>

                                      <div class="row">
                                         <!--iamge-->
                                         <div class="col-sm-3 text-center">
                                            <a href="#">
                                                 <img style="width:150px" :src="product.photo" class="image-fluid" alt="">
                                            </a>
                                         </div>

                                         <div class="col-sm-9">
                                               <div class="a-row a-spacing-small">
                                                   <!---Title and Date--->
                                                   <nuxt-link :to="`/products/${product._id}`" class="a-link-normal">
                                                       <h2 class="a-size-meduim">
                                                          {{ product.title }}
                                                          <span class="a-color-secondary a-size-small">Sept 3 , 2011</span>
                                                       </h2>
                                                   </nuxt-link>
                                               </div>
                                               <!---Authors name--->
                                               <div class="a-row a-spacing-small">
                                                    <span class="a-size-small a-color-secondary">by</span>
                                                    <span class="a-size-small a-color-secondary">
                                                        <a class="a-link-normal a-text-normal" href="#">
                                                          {{ product.owner.name }}
                                                        </a>
                                                    </span>
                                               </div>

                                               <!---Shipment--->
                                               <div class="a-row">
                                                     <span class="a-size-small">
                                                       Ships to USA
                                                     </span>
                                               </div>

                                               <div class="row">
                                                   <div class="col-sm-7">
                                                        <div class="a-spacing-none">
                                                              <a href="#" class="a-link-normal a-link-normal">Hardcover</a>
                                                        </div>

                                                        <!---price--->
                                                        <div class="a-row a-spacing-none">
                                                            <a href="#" class="a-link-normal a-text-normal">
                                                                <span class="a-offscreen">${{ product.price }}</span>
                                                                <span class="a-color-base sx-zero-spacing">
                                                                     <span class="a-color-base sx-price-large">
                                                                          <sup class="sx-price-currency">$</sup>
                                                                          <sup class="sx-price-price">{{ product.price }}</sup>
                                                                          <sup class="sx-price-fractional">00</sup>
                                                                     </span>
                                                                </span>            
                                                            </a>
                                                            <span class="a-letter-space"></span>
                                                            <span class="a-size-base-plus a-color-secondary a-text-strike">$23.00</span>
                                                        </div>

                                                        <!---Audible Trial --->
                                                        <div class="a-row a-spacing-none">
                                                             <span class="a-size-small a-color-secondary">
                                                                Free withAudible trial
                                                             </span>
                                                        </div>
                                                        <hr/>

                                                        <!---Other format-->
                                                        <span class="a-size-small a-color-secondary">
                                                            Other formats
                                                            <span class="a-letter-space"></span>
                                                            <a href="#" class="a-size-small a-link-normal a-text-normal">Audio CD</a>
                                                        </span>
                                                          <!---Rating-->
                                                        <span class="col-sm-5">
                                                              <div class="a-row a-spacing-mini">
                                                                 <!---Rating--->
                                                                 <StarRating
                                                                   :rating="product.averageRating"
                                                                   :show-rating="false"
                                                                   :glow="1"
                                                                   :border-width="1"
                                                                   :rounded-corners="true"
                                                                   :read-only="true"
                                                                   :star-size="18"
                                                                   :star-point="[
                                                                     23 , 2, 14,17,0,19,10,34,7,50,23,43,38,50,36,34, 46,19,31,17
                                                                   ]"
                                                                 />
                                                              </div> 
                                                        </span>
                                                   </div>
                                               </div>
                                         </div>
                                      </div>
                                 </div>
                             </li>
                           </ul>
                      </div>
                  </div>
             </div>
         </div>
    </main>
</template>

<script>
export default {
  name: 'SearchBar',

}
</script>

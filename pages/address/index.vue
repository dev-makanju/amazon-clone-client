<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-10">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Your Account</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Your Adresses</span>
                    </a>
                  </li>
                </ul>
              </div>
              <h1 class="a-spacing-medium a-spacing-top-medium">Your Addresses</h1>
              <!-- Message from Server -->
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>{{ message }}</b>
              </div>
              <div class="a-spacing-double-large">
                <div class="row a-spacing-micro">
                  <div class="col-lg-4 col-md-5 col-sm-12 pb-2">
                    <nuxt-link
                      to="/address/add"
                      class="a-link-normal add-new-address-button"
                      style="text-decoration:none;"
                    >
                      <div class="a-box first-desktop-address-tile">
                        <div class="a-box-inner a-padding-extra-large">
                          <i class="far fa-plus"></i>
                          <h2 class="a-color-tertiary">Add Address</h2>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- Address -->
                  <div class="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2" v-for="(addres , index) in address" :key="addres._id ">
                    <div class="a-box a-spacing-none normal-desktop-address-tile">
                      <div class="a-box-inner a-padding-none">
                        <div class="address-section-no-default">
                          <div class="a-spacing-small">
                            <ul class="a-unordered-list a-nostyle a-vertical">
                              <li>
                                <h5>
                                  <!-- Address Fullname -->
                                  <b>{{ addres.fullName }}</b>
                                </h5>
                              </li>
                              <!-- Address street address -->
                              <li>{{ addres.fullName }}</li>
                              <!-- Address city state zip code -->
                              <li>{{ addres.city - addres.state - addres.zipCode }}</li>
                              <!-- Address country -->
                              <li>{{ addres.country  }}</li>
                              <!-- Address Phone number -->
                              <li>Phone number: {{   addres.phoneNumber }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- Edit Button -->
                      <div class="edit-address-desktop-link">
                        <nuxt-link :to="`/address/${addres._id}`">Edit</nuxt-link>
                        &nbsp; | &nbsp;
                        <a href="#" @click="onDeleteAddress(addres._id , index)">Delete</a>
                        &nbsp; | &nbsp;
                        <!-- Set Address as Default -->
                        <a href="#" @click="onSetDefault(addres._id)">Set as Default</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3 col-sm-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>

<script>
export default {
    name:"addresIndex" ,
    async asyncData({$axios}){
        try{
          const response = await $axios.$get("/api/address");
          return{
              address: response.address
          }
        }catch(err){
           console.log(err)
        }
    },
    data(){
       return{
           message:"",     
       }
    },
    methods: {
        async onDeleteAddress(id , index){
            try{
               const response = await this.$axios.$delete(`/api/address/${id}`)
               
              if(response.success){
                  this.message = response.message;
                  this.address.splice(index , 1)
              }

            }catch(err){
                this.message = err.message
            }
        },

        async onSetDefault(id){
            try{
               const response = await this.$axios.$put("/api/address/set/default" , {
                   _id: id
               });

               if(response.success){
                 this.message = response.message
                 await this.$auth.fetchUser();
               }
            }catch(err){    
                 this.message = err.message
            }
        }
    },
}
</script>


 
<template>
     <div class="registerPage">
         <div class="container">
              <div class="row">
                  <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <div class="text-center">
                            <nuxt-link to="/"> <img src="/img/logo-black.png"> </nuxt-link>
                        </div>

                        <div class="mt-4">
                            <div class="a-box a-spacing-extra-large">
                                <div class="a-box-inner">
                                      <h1 class="a-spacing-small">Sign In</h1>
                                      <!---Your email--->
                                      <div class="a-row a-spacing-base">
                                           <label for="ap_customer_name" class="a-form-label">Your email</label>
                                           <input type="email" 
                                           id="ap_customer_name" 
                                           class="a-input-text form-control auth-autofocus auth-required-feild auth-contact-verification-request-info"
                                           v-model="email"
                                           >
                                      </div> 

                                      <!---Password--->
                                      <div class="a-row a-spacing-base">
                                           <label for="ap_customer_name" class="a-form-label">Your name</label>
                                           <input type="password" 
                                           id="ap_customer_name" 
                                            class="a-input-text form-control auth-autofocus auth-required-feild auth-contact-verification-request-info"
                                            v-model="password"
                                            >
                                         <div class="a-alert-container">
                                           <div class="a-alert-content">Password must be at least 6 words characters</div>
                                          </div>
                                      </div> 
                                      <!-- Button -->
                                      <div class="a-row a-spacing-extra-large mb-4">
                                          <span class="a-button-primary">
                                               <span @click="onLogin()" class="a-button-primary">
                                                   continue
                                               </span>
                                          </span>

                                          <div class="a-row a-spacing-top-meduim a-size-small">
                                              <b>
                                                  By creating an account , you agree to Amazon's
                                                  <a href="#">Conditions of Use</a> asd <a href="#">Privacy Notice</a>
                                              </b>
                                          </div>
                                      </div>
                                      <hr>

                                      <div class="a-row">
                                            <b>
                                                Dont have an account ?
                                                <nuxt-link to="/signup" class="a-link-emphasis">register</nuxt-link>
                                            </b>
                                      </div>

    
                                </div>
                            </div>
                        </div>
                        
                    </div>
              </div>
         </div>
     </div>
</template>

<script>
export default {
    middleware:"auth",
    auth:"guest",
    name:'AppAuth',
    layout: "none",
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        async onLogin(){
            try{
                await this.$auth.loginWith('local' , {
                    data:{
                        email: this.email,
                        password: this.password
                    }
                });
                this.$router.push("/");  
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>
export const state = () => ({
       cart:[],
       cartLength:0
});

export const actions =  {
    addProductToCart({ state , commit} , product ){
        const cartProduct = state.cart.find(prod => prod._id === product._id);

        if(!cartProduct){
           commit("pushProductToCart" , product )
        }else{
            commit("incrementProductQuantity" , cartProduct )
        }

        commit("incrementCartLenght")
    }
};

export const mutations = {
    pushProductToCart(state , product){
        product.quantity = 1;
        state.cart.push(product);
    },
    incrementProductQuantity(state , product){
        product.quantity++
        const indexOfProduct = state.cart.indexOf(product)
        state.cart.splice(indexOfProduct , 1 , product)
    }, 
    incrementCartLenght(state){
        state.cartLength = 0;
        if(state.cart.length > 0){
            state.cart.forEach( product => {
                state.cartLength += product.quantity
            });
        }
    }
};


export const getters = {
     getCartLenght(state){
         return state.CartLenght
     }
}
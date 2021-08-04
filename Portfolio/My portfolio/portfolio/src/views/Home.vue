<template> 
  <div class="homeComponent">

    <NavBar/>

    <div class="nameContainer">
            <router-link to="/design" style="textDecoration:none">
       <h1 class="name">
        SIMON ALVARADO
      </h1>
            </router-link>

    </div>

    <div class="carrouselBox">
            <v-carousel 
              hide-delimiters 
              :show-arrows="false" 
              cycle
              align="center"
              justify="center"
              position="relative"
            >
            
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                width="370px"
                height="458px"
                object-fit="cover"
              >
              
              </v-carousel-item>
            </v-carousel>
    </div>
  </div>
</template>

<script>

  import NavBar from '../components/Navbar.vue'

  export default {
    name: 'Home',

    components: {
      NavBar
    },

    data: () => ({
      items: [
          {
            src: 'https://imgur.com/5yn5E7S.jpg',
          },
          {
            src: 'https://imgur.com/VEuQfAz.jpg',
          },
          {
            src: 'https://imgur.com/KJo34Rc.jpg',
          },
          {
            src: 'https://imgur.com/0qWTyfG.jpg',
          },
        ],
      
    }),
  }
</script>

<style>
  .carrouselBox {
      box-align: center;
      position: relative;
      padding-top: 20px;
  }

  .homeComponent{
      width: 100vw;
      height: 100vh;
      background: black;
      margin: 0;
  }

  .nameContainer{
    position: absolute;
    left: 50%;
    top: 41%;
    z-index: 1;
    width: 100%;
  }

  .name{
    font-family: Impact;    
    color: #FF0000;
    font-size: 5.3rem;
    position: relative;
    left: -50%;
    top: -50%;
    text-align: center;
    text-decoration: none;
  }

</style>
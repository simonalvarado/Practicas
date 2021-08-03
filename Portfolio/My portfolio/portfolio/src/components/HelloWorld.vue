<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
          
          <div class="div1">
            <v-row
              align="center"
              justify="center"
              position="relative"
            >
              <h1 class="h1">
                  SIMON ALVARADO
              </h1>
            </v-row>
          </div>

          <div class="div2">
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
                width="400px"
                height="494.61px"
                object-fit="cover"
              >
              
              </v-carousel-item>
            </v-carousel>
          </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

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

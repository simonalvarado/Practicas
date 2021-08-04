<template>
  <div class="photographyComponent">
    <div>
        <nav class="lateralBar">

            <div class="contenido">
                <router-link to="/" class="header">
                    Simon Alvarado
                    <br>
                    <span style="fontFamily:Basis">Photography</span>
                </router-link>

                
                <div style="height:4rem">
                </div>

                <div class="detalle">
                    > Architecture <br>
                    > Portraits <br>
                    > Work
                </div>  

                <div style="height:4rem">
                </div>

                <router-link to="/design" class="header2">
                    UX/UI/Design
                </router-link>
                <br>
                <router-link to="/contact" class="header2">
                    <u>Contact</u>
                </router-link>

                <div class="redes">
                    <a href="https://www.instagram.com/simonalvaradoruiz" class="enlace">Instagram</a>
                    <br>
                    <a href="https://www.twitter.com/simonalvarado" class="enlace">Twitter</a>
                </div>
            </div>

        </nav>
    </div>


    <div class="display">

    </div>
  </div>
</template>

<script>

  export default {
    name: "Photography",

    components: {
      
    }
  }
</script>

<style>
  
</style>

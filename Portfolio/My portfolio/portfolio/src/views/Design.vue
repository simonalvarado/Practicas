<template>
  <div class="photographyComponent">
    <div>
        <nav class="lateralBar">

            <div class="contenido">
                <router-link to="/" class="header">
                    Simon Alvarado
                    <br>
                    <span style="fontFamily:Basis">UX/UI/Design</span>
                </router-link>

                
                <div style="height:4rem">
                </div>

                <div class="detalle">
                    > UX/UI <br>
                    > Sites <br>
                    > Logos
                </div>  

                <div style="height:4rem">
                </div>

                <router-link to="/photography" class="header2">
                    Photography
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
    name: "Design",

    components: {
      
    }
  }
</script>

<style>
  
</style>
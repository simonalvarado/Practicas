<template>
  <div class="photographyComponent">
    <div>
        <nav class="lateralBar">

            <div class="contenido">
                <router-link to="/" class="header">
                    Simon Alvarado
                    <br>
                    <span style="fontFamily:Basis">Contact</span>
                </router-link>

                
                <div style="height:4rem">
                </div>

                <div class="detalle">
                    <br> <br>
                    <br> 
                  </div>  

                <div style="height:4rem">
                </div>

                <router-link to="/photography" class="header2">
                    Photography
                </router-link>
                <br>
                <router-link to="/design" class="header2">
                    UX/UI/Design
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
      <div class="contenidoContacto">
        <h1 id="SA">
          SA
        </h1>
         
        <p class="parrafo">
          Born in Puerto Cabello (Venezuela) in 1996, I’m a web developer, designer and photographer.
          <br>
          <br>
          Currently studying Civil Engineering at the Universidad de Buenos Aires (Argentina), and working as a Content Manager at Viseven (an international IT company and multichannel content provider for pharmaceutical companies).
          At Viseven, I’ve been lucky to work with the top programming languages and frameworks, having these experiences has enriched my practice as a web designer.
          <br>
          <br>
          I’m passionate about technology, architecture, design and art, and how these fields can merge to make life easier, beautiful and more inclusive.
          <br>
          <br>
          DM me if you think we can make something  beautiful together.
          <br>
          <br>
          <a href="mailto:simonjesusalvarado@gmail.com" class="enlaces" style="textDecoration:none">simonjesusalvarado@gmail.com</a>
          <br>
          <br>
          <a href="https://www.linkedin.com/in/simonalvarado" class="enlaces">linkedin.com/in/simonalvarado
</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Contact",

    components: {
      
    }
  }
</script>

<style>
  .contenidoContacto{
    padding-left: 22rem;
    color: white;
  }

  #SA{
    font-family: basisB;
    font-size: 72px;
    padding-left: 7rem;
    padding-top: 6.6rem;
    padding-bottom: 6.6rem;
  }

  .parrafo{
    width: 459px;
    font-family: europa;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: #666666;
    padding-bottom: 20px;
  }

  .enlaces{
        text-decoration: none;
        color: #666666;
  }
</style>

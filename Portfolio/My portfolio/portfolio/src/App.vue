<template>
  <div>
        <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  @font-face {
    font-family: "Basis";
    src: local("Basis"),
    url(./assets/fonts/FontsFree-Net-BasisGrotesquePro-Regular.ttf) format("truetype");
  }

  @font-face {
    font-family: "BasisB";
    src: local("BasisB"),
    url(./assets/fonts/FontsFree-Net-BasisGrotesquePro-Bold.ttf) format("truetype");
  }

  @import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

  .photographyComponent{
    width: 100%;
    height: 100vh;
  }

  .display{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: black;
    overflow: scroll;
  }

  .display::-webkit-scrollbar {
      display: none;
  }

  .lateralBar{
        width: 13.5rem;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 1;
    }

    .contenido{
        padding-left: 2.4rem;
        padding-top: 2.4rem;
        padding-bottom: 2.4rem;
    }

    .header{
        font-family: BasisB;
        text-decoration: none;
        color: white;
        font-size: 22px;
        line-height: 1.2rem;
    }

    .header2{
        font-family: Basis;
        text-decoration: none;
        color: white;
        font-size: 14px;
        line-height: 1.2rem;
    }

    .detalle {
        color: white;
        font-family: karla, sans-serif;
        font-size: 14px;
    }

    .redes{
        position: absolute;
        bottom: 0px;
        padding-bottom: 2.4rem;
    }

    .enlace{
        text-decoration: none;
        color: white;
        font-family: karla, sans-serif;
        font-size: 14px;
    }
</style>

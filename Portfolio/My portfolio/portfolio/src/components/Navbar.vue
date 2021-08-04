<template>
  <div>
    <nav class="navBar">
      <ul class="itemsBox">

        <div id="a">
            <router-link to="/design" class="navItem">
                <span class="navText">UX/UI/Design</span>
            </router-link>
        </div>
        
        <div id="b">
            <router-link to="/photography" class="navItem">
                <span text class="navText">Photography</span>
            </router-link>
        </div>

        <div id="c">
            <router-link to="/contact" class="navItem">
                <span class="navText">Contact</span>
            </router-link> 
        </div>

  
      </ul>
    </nav>


  </div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navBar {
        width: 100%;
        height: 10vh;
        background: black;
    }

    .itemsBox{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        padding-left: 85px;
        padding-right: 85px;
    }

    .navItem{
        text-decoration: none;
        padding-left: 6px;
        padding-right: 6px;
        font-size: 15px;
        font-family: "Basis";
        color: #ffffff;
        opacity: 0.8;
        transition: 0.3s;
    }

    .navItem:hover {
        opacity: 1;
    }

    
</style>
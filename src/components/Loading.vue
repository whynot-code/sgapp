<template>
    <section id="loading">
        <div></div>
    </section>
</template>

<script>
export default {
    name: "Loading",
}
</script>

<style scoped>
    #loading {
    width: 100px;
    height: 100px;

    background: linen;
    border: 1px solid black;

    position: absolute;
    left: 45vw;
    top: 45vh;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    border-radius: 25px;

    display: none;
    }

    #loading > div{
    width: 70px;
    height: 70px;

    background: linear-gradient(90deg, rgba(255, 158, 30, 0.226) 0%, rgba(255, 136, 0, 0.5) 50%, rgba(255, 102, 0, 0.829) 100%);
    border-radius: 50%;
    
    position: relative;
    overflow: hidden;

    animation: animate 1.5s infinite linear;
    }

    #loading > div::after {
        position: absolute;
        content: "";

        width: inherit;
        height: inherit;

        border-radius: 50%;
        background: ivory;

        transform: scale(0.8);
    } 

    @keyframes animate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
</style>
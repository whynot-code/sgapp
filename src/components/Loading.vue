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
    width: 150px;
    height: 150px;

    background: linen;
    border: 1px solid black;

    position: absolute;
    left: 42vw;
    top: 42vh;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    }

    #loading > div{
    width: 100px;
    height: 100px;

    background: linear-gradient(90deg, rgb(154, 255, 255) 0%, rgba(0, 255, 234, 0.486) 50%, rgba(5, 5, 253, 0.829) 100%);
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
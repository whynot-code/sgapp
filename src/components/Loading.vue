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
        background: whitesmoke;
        border: 1px solid black;
        position: absolute;

        top: 0;
        left: 0;
        z-index: 2;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    div {
        width: 50px;
        height:50px;
        border: 5px solid rgba(0, 0, 0, 0.753);
        border-radius: 100px;
        animation: loading 2s ease-in-out;
        animation-iteration-count: infinite;
    }
    @keyframes loading {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1) rotateY(180deg);
        }
    }
</style>
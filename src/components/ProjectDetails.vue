<template>
    <div class="details">

    </div>
</template>

<script>
export default {
    name: "ProjectDetails",
}
</script>

<style scoped>
    .details {
        width: 100%;
        height: 92vh;
        position: absolute;

        background: rgba(255, 250, 205, 0.925);
        
        padding: 25px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
  
    .closeModal {
        padding: 3px 7px;
        border: 1px solid black;
        border-radius: 5px;
        background: red;
        position: relative;
        left: 92%;
        position: absolute
    }
</style>
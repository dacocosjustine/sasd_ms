<template>
    <div class="container">
        <LoginStudent></LoginStudent>
    </div>
</template>

<script>
import LoginStudent from '@/components/Student/LoginStudent.vue'

export default {
    name: 'LoginView',
    components: {
        LoginStudent
    }
}

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
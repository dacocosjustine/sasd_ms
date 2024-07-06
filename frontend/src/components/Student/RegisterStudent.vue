<template>
    <form @submit.prevent="register" class="form">
        <h1>Register Student</h1>
        <div class="form-group">
            <label>Name</label>
            <input type="text" v-model="name" placeholder="Enter Name" required>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="text" v-model="email" placeholder="Enter Email" required>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="password" placeholder="Enter Password" required>
        </div>
        <div class="form-nav">
            <button class="form-btn" type="submit">Register</button>
            <p>already have an account ? you can login <a href="/student">here</a></p>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisterComponent',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            role: 'student',
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/register-student', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    role: this.role,
                });

                console.log('Registered', response.data);

                this.$router.push('/')
            } catch (error){
                console.error('register failed:', error.response.data);
                alert('Incorrect Registration format');
            }
        }
    }
}

</script>

<template>
    <div class="header">
        <a href="#">
            <img src="@/assets/pnc-header.svg" alt="Logo" class="logo">
        </a>
    </div>

    <nav>
        <router-link to="/">
            <span class="bi bi-calendar-event" style="font-size: 1rem;"></span>
            Student Activities
        </router-link>
        
        <router-link to="/department">
            <span class="bi bi-people-fill" style="font-size: 1rem;"></span>
            Student Organization
        </router-link>

        <router-link to="/scholarship">
            <span class="bi bi-mortarboard-fill" style="font-size: 1rem;"></span>
            Scholarship Programs
        </router-link>

        <router-link to="/assistantship">
            <span class="bi bi-award-fill" style="font-size: 1rem;"></span>
            Student Assistantship
        </router-link>

        <router-link to="/discipline">
            <span class="bi bi-file-person" style="font-size: 1rem;"></span>
            Student Discipline
        </router-link>

        <router-link to="/account">
            <span class="bi bi-person-circle" style="font-size: 1rem;"></span>
            Account
        </router-link>
    </nav>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
    name: 'SidebarComponent',
}

</script>

<style scoped>
.logo {
    width: 90%;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

nav a {
  font-weight:600 ;
  color: #262729;
  text-decoration: none;
  font-size: 14px;
}

nav a.router-link-exact-active {
  color: #198754;
}

span {
    margin-right: 10px;
}

</style>
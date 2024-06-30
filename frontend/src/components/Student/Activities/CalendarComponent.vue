<template>
  <div class="header">
    <div class="title">
      <h2>Student Activities</h2>
      <p>S.Y. 2024-2025</p>
    </div>
    <!-- v-if student assistant -->
    <button>Add Event</button>
    
    <!-- v-else walang button -->
  </div>
  <div id='calendar'></div>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        headerToolbar: {
            left: 'prev next today',
            center: 'title',
            right: 'dayGridMonth timeGridWeek timeGridDay',
        },
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        height: 600,
      },
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
</style>

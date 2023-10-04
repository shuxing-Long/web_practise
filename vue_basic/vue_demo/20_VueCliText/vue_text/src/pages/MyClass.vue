<template>
    <div class="course-table">
      <table>
        <thead>
          <tr>
            <th>时间</th>
            <th v-for="day in days" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time">
            <td>{{ time }}</td>
            <td v-for="day in days" :key="day" :class="getCourseClass(day, time)">
              {{ getCourse(day, time) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        times: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        courseData: [
          { day: 'Monday', time: '10:00', course: 'Math' },
          { day: 'Tuesday', time: '9:00', course: 'English' },
          { day: 'Friday', time: '13:00', course: 'Science' },
        ]
      };
    },
    methods: {
      getCourse(day, time) {
        const course = this.courseData.find(item => item.day === day && item.time === time);
        return course ? course.course : '';
      },
      getCourseClass(day, time) {
        return this.getCourse(day, time) ? 'course-cell' : '';
      }
    }
  };
  </script>
  
  <style>
  .course-table {
    margin: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  .course-cell {
    background-color: lightblue;
    font-weight: bold;
  }
  </style>
  
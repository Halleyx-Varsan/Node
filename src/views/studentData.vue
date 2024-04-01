<template>
  <section class="product-offering">
    <span class="student-header">
      <span class="student-header-title"> Product offering </span>
      <span class="student-header-body">
        Centralised catalog for products
      </span>
    </span>

    <span class="add-student">
      <button @click="addStudentModalWindow()">Add student</button>
    </span>

    <section class="student-info-table">
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(subject, index) in responseData" :key="subject._id">
            <td>{{ index + 1 }}</td>
            <td>{{ subject.name }}</td>
            <td>{{ subject.id }}</td>
            <td>
              <button class="delete-student" @click="deleteStudent(subject.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section v-if="showModal" class="modal-window">
      <section class="modal-window-content">
        <span>
          <span @click="close()" class="close">&times;</span>
          <span class="modal-header">Add student</span>
          <hr />
        </span>
        <span class="student-info">
          <label id="student-name" for="student-name">Student name :</label>
          <input id="student-name" v-model="subjectname" /><br />
          <label for="student-dob">Subject ID :</label>
          <input id="student-dob" v-model="subjectid" placeholder="SCS100" />
          <button @click="postData()" class="add-button">Add</button>
        </span>
      </section>
    </section>

    <section>
      <label for="totalrows">Rows per page</label>
      <select v-model="selectedRows" id="totalrows" @change="getTotalRows">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <span>
        Showing {{ startIndex }} - {{ endIndex }} of
        {{ responseData.length }} results
      </span>
    </section>

    <section class="pagination">
      <span>
        <i class="fa fa-arrow-left"></i>
      </span>

      <span v-for="subject in responseData" :key="subject._id">
        <span class="active-page">{{
          Math.ceil(this.responseData.length / parseInt(this.selectedRows))
        }}</span>
      </span>

      <span>
        <i class="fa fa-arrow-right"></i>
      </span>
    </section>
  </section>
</template>

<script>
import {studentServer} from "@/config/axiosConfig.js";
export default {
  data() {
    return {
      showModal: false,
      responseData: [],
      subjectname: "",
      subjectid: "",
      selectedRows: "5",
      currentPage: 1,
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    startIndex() {
      return (this.currentPage - 1) * parseInt(this.selectedRows) + 1;
    },
    endIndex() {
      const selectedRows = parseInt(this.selectedRows);
      let endIndex = this.currentPage * selectedRows;
      if (
        endIndex > this.responseData.length ||selectedRows > this.responseData.length) {
        endIndex = selectedRows;
      }
      return endIndex;
    },
  },

  methods: {
    addStudentModalWindow() {
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    },
    async fetchData() {
      try {
        const response = await studentServer.get("/subjects");
        this.responseData = response.data;
      } catch (error) {
        console.log("error in fetching data :", error);
      }
    },
    async postData() {
      try {
        const response = await studentServer.post("/subjects", {
          name: this.subjectname,
          id: this.subjectid,
        });
        if (response.status === 200) {
          console.log(response.data);
        } else if (response.status === 404) {
          console.log("Invalid Subject ID");
        } else {
          console.log("Unexpected response status:", response.status);
        }
        this.showModal = false;
      } catch (error) {
        console.log("Error in post method :", error);
      }
      this.fetchData();
    },
    async deleteStudent(id) {
      try {
        const response = await studentServer.delete(`/subject/${id}`);
        if (response.status === 200) {
          console.log(response.data);
        } else if (response.status === 404) {
          console.log("Invalid Subject ID");
        } else {
          console.log("Unexpected response status:", response.status);
        }
      } catch (error) {
        console.log("Deleting subject :", error);
      }
      this.fetchData();
    },
    getTotalRows() {
      console.log("Selected rows per page:", this.selectedRows);
    },
  },
};
</script>

<style lang="scss">
@mixin button {
  margin-top: 12px;
  float: right;
  color: white;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  background-color: #54bd95;
  border: none;
  border-radius: 8px;
  padding: 10px 12px;
  width: fit-content;
  margin-bottom: 12px;
  cursor: pointer;
}

.product-offering {
  padding: 16px 24px 0;
  width: 100%;

  .student-header {
    margin-bottom: 16px;

    .student-header-title {
      display: block;
      font-size: 18px;
      font-family: "Quicksand", sans-serif;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .student-header-body {
      font-family: "Open Sans", sans-serif;
      font-size: 12px;
      display: block;
    }
  }

  .add-student {
    button {
      @include button;
    }
    button:hover {
      background-color: #265e4b;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    border: 1px solid;
    border-radius: 10px;
    overflow: hidden;

    th,
    td {
      padding: 4px;
      text-align: left;
      border: 1px solid;
      border-color: rgba(0, 0, 0, 0.146);
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
    }
    th {
      background-color: #edecec;
      font-size: 14px;
      font-weight: 600;
    }

    th:first-child,
    td:first-child {
      width: 10%;
    }

    th:nth-child(2),
    td:nth-child(2) {
      width: 30%;
    }
    td:nth-child(2) {
      color: rgb(0, 120, 248);
    }
    th:nth-child(3),
    td:nth-child(3) {
      width: 30%;
    }
    th:nth-child(4),
    td:nth-child(4) {
      width: 10%;
    }
    .delete-student {
      @include button;
      margin-top: 0px;
      font-size: 12px;
      float: none;
      padding: 10px 12px;
      margin: 0px;
    }
    .delete-student:hover {
      background-color: #265e4b;
    }
  }
  .modal-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-window-content {
      background-color: white;
      padding: 16px 1px 16px 1px;
      width: 500px;
      height: 200px;
      border-radius: 8px;
      position: relative;
      font-family: "Open Sans", sans-serif;
      font-weight: 400;

      .modal-header {
        display: block;
        font-size: 18px;
        font-family: "Quicksand", sans-serif;
        margin: 0px 12px 2px 0px;
        font-weight: 600;
        padding-left: 12px;
      }
      hr {
        border: 1px solid rgba(0, 0, 0, 0.146);
        padding-left: 12px;
      }
      .close {
        position: absolute;
        top: 4px;
        right: 8px;
        font-size: 24px;
        color: black;
        cursor: pointer;
      }
      .add-button {
        @include button;
      }
      .add-button:hover {
        background-color: #265e4b;
      }

      .close:hover,
      .close:focus {
        color: #000;
      }
      .student-info {
        display: block;
        padding: 12px;
      }
    }
  }
  .pagination span {
    margin-left: 8px;
    padding: 12px;
  }

  .pagination span:hover.active-page {
    background-color: #54bd95;
    border: none;
    border-radius: 24px;
  }
}
</style>
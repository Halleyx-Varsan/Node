<template>
  <section class="product-offering">
    <span class="student-header">
      <span class="student-header-title"> Agents info </span>
      <span class="student-header-body">
        Agents from LA
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
            <th>Email</th>
            <th>Section</th>
            <th>Standard</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(subject, index) in displayedRows" :key="subject._id">
            <td>{{ startIndex + index }}</td>
            <td>{{ subject.name }}</td>
            <td>{{ subject.email }}</td>
            <td>{{ subject.sec }}</td>
            <td>{{ subject.std }}</td>
            <td>
              <button
                class="delete-student"
                @click="deleteStudent(subject.name)">
                Delete
              </button>
            </td>
            <td>
              <button
                class="delete-student"
                @click="editStudentModalWindow(subject)">
                Edit
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
          <input id="student-name" v-model="name" /><br />
          <label for="student-dob"> Email :</label>
          <input id="student-dob" v-model="email" />
          <label for="student-dob"> Section :</label>
          <input id="student-dob" v-model="sec" />
          <label for="student-dob"> Standard :</label>
          <input id="student-dob" v-model="std" />
          <button @click="postData()" class="add-button">Add</button>
        </span>
      </section>
    </section>

    <section v-if="editModal" class="modal-window">
      <section class="modal-window-content">
        <span>
          <span @click="close()" class="close">&times;</span>
          <span class="modal-header">Edit student</span>
          <hr />
        </span>
        <span class="student-info">
          <label id="student-name" for="student-name">Student name :</label>
          <input id="student-name" v-model="updatedname" /><br />
          <label for="student-dob">Email  :</label>
          <input id="student-dob" v-model="updatedemail"/>
          <label for="student-dob">Section  :</label>
          <input id="student-dob" v-model="updatedsection"/>
          <label for="student-dob">Standard  :</label>
          <input id="student-dob" v-model="updatedstandard"/>
          
          <button @click="close()" class="add-button">Cancel</button>
          <button
            @click="updateSubject(updatedname,updatedemail,updatedsection,updatedstandard)"
            class="add-button">
            Save
          </button>
        </span>
      </section>
    </section>

    <section class="paginationinfo">
      <section>
        <label for="totalrows">Rows per page</label>
        <select v-model="selectedRows" id="totalrows" @change="previousPage()">
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
        <span @click="previousPage">
          <i class="fa fa-arrow-left"></i>
        </span>

        <span
          v-for="page in totalPages"
          :key="page"
          :class="{ 'active-page': currentPage == page }"
          @click="changePage(page)"
        >
          {{ page }}
        </span>

        <span @click="nextPage">
          <i class="fa fa-arrow-right"></i>
        </span>
      </section>
    </section>
  </section>
</template>
  
  <script>
import studentServer from "@/config/axiosConfig.js";

export default {
  data() {
    return {
      showModal: false,
      editModal: false,
      responseData: [],
      name: "",
      email: "",
      std: "",
      sec: "",
      selectedRows: "5",
      currentPage: 1,
      updatedname: "",
      updatedemail: "",
      updatedsection:"",
      updatedstandard:""
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
      let end = this.currentPage * parseInt(this.selectedRows);
      return Math.min(end, this.responseData.length);
    },
    totalPages() {
      return Math.ceil(this.responseData.length / parseInt(this.selectedRows));
    },
    displayedRows() {
      console.log("Start :", this.startIndex);
      console.log("End :", this.endIndex);
      return this.responseData.slice(this.startIndex - 1, this.endIndex);
    },
  },

  methods: {
    addStudentModalWindow() {
      this.showModal = true;
    },
    editStudentModalWindow(subject) {
      this.updatedname = subject.name;
      this.updatedemail = subject.email;
      this.updatedsection=subject.sec;
      this.selectedName=subject.name;
      this.updatedstandard=subject.std;
      this.editModal = true;
    },
    close() {
      this.showModal = false;
      this.editModal=false;
    },
    async fetchData() {
      try {
        const response = await studentServer.get("/agents");
        this.responseData = response.data;
      } catch (error) {
        console.log("error in fetching data :", error);
      }
    },
    async postData() {
      try {
        const response = await studentServer.post("/agent", {
          name: this.name,
          email: this.email,
          sec: this.sec,
          std: this.std,
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
    async updateSubject(updatedname,updatedemail,updatedsection,updatedstandard) {
      try {
        const response = await studentServer.put(`/agent/${this.selectedName}`, {
          name: updatedname,
          email: updatedemail,
          sec:updatedsection,
          std:updatedstandard
        });
        console.log("Response:", response.data);
        this.editModal = false;
        this.fetchData();
      } catch (error) {
        console.error("Error updating subject:", error);
      }
    },
    async deleteStudent(id) {
      try {
        const response = await studentServer.delete(`/agent/${id}`);
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
    previousPage() {
      this.currentPage > 1 ? this.currentPage-- : null;
    },
    nextPage() {
      this.currentPage < this.totalPages ? this.currentPage++ : null;
    },
    changePage(page) {
      this.currentPage = page;
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
      width: 5%;
    }

    // th:nth-child(2),
    // td:nth-child(2) {
    //   width: 10%;
    // }
    // td:nth-child(2) {
    //   color: rgb(0, 120, 248);
    // }
    // th:nth-child(3),
    // td:nth-child(3) {
    //   width: 10%;
    // }
    // th:nth-child(4),
    // td:nth-child(4) {
    //   width: 10%;
    // }
    // th:nth-child(5),
    // td:nth-child(5) {
    //   width: 10%;
    // }
    // th:nth-child(6),
    // td:nth-child(6) {
    //   width: 5%;
    // }

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

  .paginationinfo {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    position: fixed;
    bottom: 0;
    padding-bottom: 16px;
    width: -webkit-fill-available;
    .totalrows {
      display: flex;
    }
  }

  .pagination span {
    margin-left: 8px;
    padding: 12px;
    border-radius: 40%;
  }

  .pagination span.active-page {
    background-color: #54bd95;
    border: none;
    border-radius: 50%;
  }
}
</style>
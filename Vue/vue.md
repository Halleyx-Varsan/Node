# Vue
JavaScript framework

**1-** SPA-Single Page Application.

**2-** Non-vue application sends the request to the server for every action.

**3-** But in Vue application it sends the request one time to the server, Server sends Vue javascript bundle so every request is handled inside the browser.

**4-** Advantage of Vue - Faster and smoother.

# Vue CLI Documentation

Vue CLI (Command Line Interface).It provides a set of command-line tools for creating, managing, and deploying Vue.js projects.

## Features
Vue CLI features

1. **Project Scaffolding**: Quickly scaffold new Vue.js projects using predefined project templates.

2. **Interactive Configuration**: Customize project settings interactively during project initialization.

3. **Command-Line Interface**: Perform various tasks, such as creating projects, running development servers, building production-ready bundles, and managing dependencies, from the command line.

# Prerequisite
To get started with Vue CLI, follow these steps:

1. **Installation**

    First Install Node.js and npm from below link:

    [Node.js](https://nodejs.org/en)

```bash
#verify
node -v
npm -v

```

   ```bash
   # Install Vue CLI globally on your system using npm
   # To install vue with CLI
   npm install -g @vue/cli

   # To create a new project
   vue create your-project-name 

   #  navigate the directory to your project
   cd your-project-name 

   # This command will start a development server, and you'll see a local URL
   npm run serve

   ```

# Lifecycle Hooks 
Below are the lifecycle hooks:
# Creation Hooks
## `beforeCreate`

- **Description**: Called before the component is initialized

  ```JS
    beforeCreate() {
        this.text = 'initial text'; 
        // This line has no effect because 
        console.log("beforeCreate: The component is not created yet.");
    }
    ```

## `created`
- **Description**:Created lifecycle hooks happens after the component is initialized

```JS

  created() {
    // same example now the text is added to the component
		this.text = 'initial text';
    console.log("created: The component just got created.");
  }


```
# Mounting Hooks

## `beforeMount`
- **Description**:Before the component is added to the DOM.

```JS
     beforeMount() {
    console.log("beforeMount: This is just before the component is mounted.");
    this.$refs.pEl.innerHTML = "Hello World!"; // We cannot reach the DOM element at this stage 
  }
```
## `mounted`
- **Description**: mounted is called after Vue has finished creating the component's HTML and inserting it into the web page.

```JS
 export default {
    mounted() {
      this.$refs.inpName.focus();
      // Focus in the input box occurs only when the input field is rendered in the page.
    }
 }
```

# Updating hooks
## `beforeUpdate`
- **Description**:Whenever there is a change in our page, the application is 'updated' and the 'beforeUpdate' hook happens just before that.

```JS
 beforeUpdate() {
    this.$refs.divLog.innerHTML += "<li>beforeUpdate: This happened just before the 'updated' hook.</li>";
  }
```

## `updated`
- **Description**:Whenever there is a change in our page, the application is updated and the updated() function is called.

```JS
  updated() {
    console.log("The component is updated!");
  }
```


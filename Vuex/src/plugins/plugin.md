# Plugins

**=>** Extract vue code into own reusable modules

## Simple-Plugin

```JS
// In this you use options as option,.i.e if you need option argument use it else don't use it.
export default {
  install:(Vue, options)=> {}
};
```

```JS
// import plugin in your main.js file
import plugin from './plugins/plugin.js'
createApp(App).use(router).use(store).use(plugin).mount('#app')
```
### sample

```JS
export default {
  install: (app) => {
    app.config.globalProperties.$toBold = function (text) {
      return `<b>${text}</b>`;
    };
  }
}

// In App.vue i.e your vue file

    {{ $toBold('I am plugin') }}
    
    <p v-html="$toBold('fool')"></p>
```

## Directives-Plugin
It takes a string for the directive name and an object with the lifecycle hooks for a directive.

```JS
export default {
 
    app.directive("changecolor", {
      mounted(el, { value }) {
        if (isValidColor(value)) {
          el.style.color = value
        }
        else {
          el.style.color = "red"
        }
      }
    });
  }
// In App.vue i.e your vue file

  <p v-changecolor="'blue'">hexa</p>
```


## Mixins-Vue.js Plugin

Add mixins to add code that can merged in with a existing code of the component can be used.

```JS
export default {
  install: (app) => {
//   In this I am creating a method inside the app.mixin .
// Another way you can use import another js function
       app.mixin({
      methods: {
        toUppercase(text) {
          return text.toUpperCase();
        }
      }
    });
  }
};

// In App.vue i.e your vue file
    <p>{{ toUppercase('uppercase text') }}</p>
```

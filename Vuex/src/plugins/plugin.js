export default {
  install: (app) => {
    app.config.globalProperties.$toBold = function (text) {
      return `<b>${text}</b>`;
    };
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
       app.mixin({
      methods: {
        toUppercase(text) {
          return text.toUpperCase();
        }
      }
    });
  }
};

function isValidColor(color) {
  const s = new Option().style
  s.color = color
  return s.color === color
}
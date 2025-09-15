// 5. Question: What will be logged?

const obj = {
    name: "JS",
    log: function () {
      console.log(this.name);
    },
};

setTimeout(obj.log, 1000);

// Options:
// A) "JS"
// B) undefined
// C) Error
// D) null

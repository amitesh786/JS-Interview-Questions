// 7. Question: What will be logged?
const obj = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};

const extracted = obj.getValue;
console.log(extracted());
console.log(obj.getValue());

// Options:
// A) 42 42
// B) undefined 42
// C) Error
// D) null 42

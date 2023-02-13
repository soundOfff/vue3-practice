import { ref, watch } from "vue";
export function useStorage(key, defValue = "salad") {
  let val = read() || defValue;

  val = ref(val);

  function write() {
    localStorage.setItem(key, JSON.stringify(val.value));
  }

  function read() {
    return JSON.parse(localStorage.getItem(key));
  }

  watch(val, () => {
    write();
  });

  return val;
}

import swal from "sweetalert";

export function useFlash() {
  function flash(title, text, condition) {
    return swal(title, text, condition);
  }

  return { flash };
}

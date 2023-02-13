import swal from "sweetalert";

export default {
  methods: {
    flash(text) {
      swal("Success!", text, "success");
    },
  },
};

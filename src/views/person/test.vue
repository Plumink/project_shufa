<template>
  <div>
    <input id="in" type="file">
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  },
  methods: {
    openFile: function () {
      document.getElementById('open').click()
    },
    showRealPath: function () {
      document.getElementById('input01').value = document.getElementById('open').files[0].path
    }
  },
  mounted() {
    console.log(document.getElementById('in').value)
  }
}
</script>
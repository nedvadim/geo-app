<template>
    <div>
        <input-mask
                class="input-styling"
                :class="{ 'error': isError }"
                mask="999.999.99.99" maskChar=" "
                placeholder="000.000.00.00"
                :always-show-mask="false"
                :value="value"
                @input="handleInput"
        ></input-mask>
    </div>
</template>

<script>
  export default {
    name: "CustomInput",
    props: {
      placeholder: {
        type: String,
        default: 'Placeholder'
      },
      label: {
        type: String,
        default: 'Label'
      },
      value: {
        type: String
      },
      isError: {
        type: Boolean
      }
    },
    methods: {
      handleInput(event) {
        this.$emit("input", event);
      }
    }
  }
</script>

<style scoped>
    .input-styling {
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 0 1rem;
        height: 45px;
        width: 100%;
    }
    .input-styling:focus {
        outline: none;
        border: 1px solid #656BF2;
    }
    .error {
        border: 1px solid #FF6C6C;
    }
</style>

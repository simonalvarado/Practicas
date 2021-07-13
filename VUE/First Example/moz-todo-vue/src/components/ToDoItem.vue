<template>
    <div>
        <input type="checkbox" :id="id" :checked="isDone" />
        <label :for="id">{{label}}</label>
    </div>
</template>

<script>
import uniqueId from 'lodash.uniqueid';

//object
export default {
    props: {
        label: {required: true, type: String},
        done: {default: false, type: Boolean},
        id: {required: true, type: String}
    },
    data() {
        return {
            isDone: this.done,
        };
    }
};
</script>
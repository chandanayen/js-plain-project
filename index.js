const { default: axios } = require("axios")

console.log('Hello World')

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
const { format } = require("date-fns");
const name = "Pedro"
const nascimento = new Date(1999, 02, 22);


console.log(format(nascimento,"'Pedro nasceu em uma' eeee"));
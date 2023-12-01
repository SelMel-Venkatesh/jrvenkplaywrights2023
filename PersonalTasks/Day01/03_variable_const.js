// It is used when we need to declare constant value ex: days of week
// Reinitialisation of const value is not allowed.
// const cannot be declared without assigning any value.
// /Reinitialization of const not allowed

const day = 7;
day = 10;
//TypeError: Assignment to constant variable.
console.log(day);
// const' declarations must be initialized.
//const p;

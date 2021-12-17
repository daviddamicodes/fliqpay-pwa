// const formatter = new Intl.NumberFormat('en', {
//     style: 'decimal',
//     useGrouping: true
// });

// export const numFormat = (num) => {
//     formatter.format(num);
// }


export const numFormat = (number) => (new Intl.NumberFormat().format(number));

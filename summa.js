/**
 * Created by Superuser on 20.06.16.
 */

if (process.argv.length <= 2) {
    console.log("Аргументы не заданы");
    process.exit(-1);
}

var summa = 0; i = 2;

for(; process.argv[i]; i++) {
    summa += +(process.argv[i]);
}

console.log("Сумма = " + summa);
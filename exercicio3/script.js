function maiorNumero() {
    const num1 = 5;
    const num2 = 3;
    const num3 = 1;

    if (num1 > num2 && num1 > num3) {
        console.log(`O número ${num1} é maior que os números ${num2} e ${num3}`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`O número ${num2} é maior que os números ${num1} e ${num3}`);
    } else {
        console.log(`O número ${num3} é maior que os números ${num1} e ${num2}`);
    }
}

maiorNumero();
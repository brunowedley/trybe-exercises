let salario = 3000.00;
let salarioInss;
let salarioIr;

if (salario <= 1556.94) {
    salarioInss = salario*0.92;
} else if (salario >= 1556.95 && salario <= 2594.92){
    salarioInss = salario*0.91;    
} else if (salario >= 2594.93 && salario <= 5189.92){
    salarioInss = salario*0.89;
} else if (salario > 5189.82){
    salarioInss = salario - 570.88;
}
    console.log("salario é "+salario);
    console.log("salário subtraido do Inss é de "+ salarioInss);

if (salarioInss <= 1903.98){
    salarioIr = salarioInss;
} else if (salarioInss >= 1903.99 && salarioInss <= 2826.65){
    salarioIr = salarioInss - (salarioInss*0.075 - (142.80));
} else if (salarioInss >= 2826.66 && salarioInss <= 3751.05){
    salarioIr = salarioInss - (salarioInss*0.15 - (354.80));
} else if (salarioInss >= 3751.06 && salarioInss <= 4664.68){
    salarioIr = salarioInss - (salarioInss*0.225 - (636.13));
} else if (salarioInss > 4664,68){
    salarioIr = salarioInss - (salarioInss*0.275 - (869.36));
}

console.log("O salário bruto é de "+ salarioIr);

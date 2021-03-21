function calculoAniversario(){
    let hoje = moment();
    let DataNasc = moment('2021-08-11');
    let niver = (DataNasc.diff (hoje, 'day'))
    console.log(DataNasc.diff (hoje, 'day'))
    alert(`Falta ${niver} dias para seu aniversario`);

}
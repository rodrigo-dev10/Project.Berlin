function calculoAniversario(){
    let hoje = moment();
    let DataNasc = moment('2021-08-11');
    console.log(DataNasc.diff (hoje, 'day'))

}
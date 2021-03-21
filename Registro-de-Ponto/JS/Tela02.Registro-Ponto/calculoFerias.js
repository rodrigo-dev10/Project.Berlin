function calculoFerias (){

    let today = moment();
    let newYear = moment('2021-10-20');
    let ferias = (newYear.diff(today, 'day' ));

    console.log(today);
    console.log(newYear);
    console.log(newYear.diff(today, 'day' ));
    alert(`Falta ${ferias} dias para suas ferias`);


    // console.log(moment().format ('DD/MM/YYYY H:MM:SS));
    //console.log(moment('2020-02-10 20:02:22).format ('DD/MM/YYYY H:MM:SS));
}
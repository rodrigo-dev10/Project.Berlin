function calculoFerias (){

    let today = moment();
    let newYear = moment('2022-03-20');

    console.log(today);
    console.log(newYear);
    console.log(newYear.diff(today, 'day' ));


    // console.log(moment().format ('DD/MM/YYYY H:MM:SS));
    //console.log(moment('2020-02-10 20:02:22).format ('DD/MM/YYYY H:MM:SS));
}
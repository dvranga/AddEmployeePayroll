window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
    output.textContent=salary.value;
    })

    const day=document.querySelector('#day');
    const month=document.querySelector('#month');
    const year=document.querySelector('#year');
    const startdateError=document.querySelector('.startdate-error');
    day.addEventListener('input',function(){
        try{
            (new EmployeePayrollData()).startDate=day.value+month.value+year.value;;
            startdateError.textContent="";
        }catch(e){
            startdateError.textContent=e;
        }
    })
    month.addEventListener('input',function(){
        try{
            (new EmployeePayrollData()).startDate=day.value+month.value+year.value;;
            startdateError.textContent="";
        }catch(e){
            startdateError.textContent=e;
        }
    })
    year.addEventListener('input',function(){
        try{
            (new EmployeePayrollData()).startDate=day.value+month.value+year.value;;
            startdateError.textContent="";
        }catch(e){
            startdateError.textContent=e;
        }
    })

})





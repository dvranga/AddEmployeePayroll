class EmployeePayrollData{

   get id(){
       return this._id;
   }
   set id(id){  
       this._id=id;
   }

   get name(){return this._name};
   set name(name){
       let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
       if(nameRegex.test(name)){
           this._name=name;
       }
       else throw 'Name is Incorrect!';
   }

   get profilePic(){return this._profilePic;}
   set profilePic(profilePic){
       this._profilePic=profilePic;
   }

   get gender(){return this._gender};
   set gender(gender){
       this._gender=gender;
   }

   get department(){return this._department;}
   set department(department){
       this._department=department;
   }

   get salary(){return this._salary;}
   set salary (salary){
       this._salary=salary;
   }

   get note(){return this._note;}
   set note(note){
       this._note=note;
   }


   getTodayDate=()=>{
    var objToday = new Date(),
	dayOfMonth = objToday.getDate(),
	months = new Array('jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'),
	curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();
    var today = dayOfMonth + "-" + curMonth + "-" + curYear;
    return today;
   }
   
   get startDate(){return this._startDate}
   set startDate(startDate){
    let presentDate=this.getTodayDate();
    let newStartDate=startDate;
    var x = new Date(presentDate);
    var y = new Date(newStartDate);
    if(x>y){
        this._startDate=startDate;
    }
    else throw ("Date is Incorrect");
   }

   toString(){
       const options={year:'numeric', month:'long',day:'numberic'};
       const empDate=!this.startDate?"undefined":
                    this.startDate.toLocaleDateString("en-US",options);
        
        return "id="+this.id+", name="+this.name+", gender="+this.gender+
                ", profilePic="+this.profilePic+", department="+this.department+
                ", salary="+this.salary+", startDate="+empDate+", note="+this.note;
   }
}
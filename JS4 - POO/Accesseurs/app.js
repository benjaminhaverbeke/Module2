class User {
    fullName(name, firstName) {
        this._fullName = `${name} ${firstName}`;
        this._job = "";
        return this.fullName;
    }
    set job(jobName){
        if(typeof jobName !== 'string'){
            
            throw new Error('Le job doit etre une string');
        }
        else {
            this._job = jobName;
        }
        
        
        
    }
    get job(){
        return this._job;
    }
}

class Admin extends User {
    canEditArticles() {
        return true;
    }
}

// User >> Object
let user = new User();
user.fullName('Doe', 'John');
console.log(user);

// Admin >> User >> Object
let admin = new Admin();
admin.fullName('Doe', 'Jane');
console.log(admin);
console.log(admin.canEditArticles());


admin.job = 'plombier';

console.log(admin)
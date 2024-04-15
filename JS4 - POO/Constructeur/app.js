class User {

    constructor(name, firstName) {

        this._name = name;
        this._firstName = firstName;


    }
    get fullName() {
        return`${this._name} ${this._firstName}`;

        

    }




}



class Admin extends User {

    constructor(name, firstName, jobName) {

        super(name, firstName);

        this._job = jobName;

    }
    set job(jobName) {
        if (typeof jobName !== 'string') {

            throw new Error('Le job doit etre une string');
        }
        else {
            this._job = jobName;
        }
    }
    canEditArticles() {
        return true;
    }
    get job() {
        return this._job;
    }
}

// User >> Object
let user = new User('Doe', 'John');

console.log(user);

// Admin >> User >> Object
let admin = new Admin('Ben', 'hav', '');

console.log(admin);
console.log(admin.canEditArticles());

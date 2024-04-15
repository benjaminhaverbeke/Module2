class User {
    constructor(name, firstName, job = null, Age) {
        this.name = name;
        this.firstName = firstName;
        this._job = job;
        this.age = Age;

    }

    fullName() {
        this.fullName = `${this.name} ${this.firstName}`;

        return this.fullName;
    }


    get job() {
        return this._job;
    }

    set job(job) {
        return (this._job = job);
    }
    set age(age) {

        if (typeof age !== 'number') {

            throw new Error('Lage doit etre un nombre');

        }
        else if (age < 0 || age > 150) {


            throw new Error('La valeur de age doit etre comprise entre 0 et 150');

        }

        else {

            this._age = age;
        }

    }
    get age() {

        return this._age.age;
    }

}

class Age {
    constructor(age) {

        this._age = age;


    }




}




//



const baby = new Age(30);


const user = new User('Doe', 'John', 'Développeur', baby);

console.log(user)

console.log(user.age)

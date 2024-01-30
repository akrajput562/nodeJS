const person={

    name:'Max',
    age:29,
    greet(){
        console.log('Hi,I am'+this.name);
    }
};

const printName =({name})=>{
    console.log(name);
}
printName(person)


const {name, age} = person;
console.log(name,age);

const hobbies = ['sprots','kungfu']
const [hobbies1,hobbies2]=hobbies;
console.log(hobbies2);
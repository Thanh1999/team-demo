class User {
    name: String;
    age: number;

    constructor(name: String, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Test {
    value:number;

    constructor(value: number) {
        
        this.value = value;
    }

    
    public get Value() : number {
        return this.value;
    }

    
    public set Value(v : number) {
        this.value = v;
    }
    
    
}

export default User;
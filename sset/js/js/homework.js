let koder = {
    name:"Ismael",
    lastName:"Monfil",
    average: [10, 10, 10, 8, 9],
    age: 41,

    getAge: function () {
        return this.age
    },

    get ageKoder() {
        return this.age
    },

    set ageKoder(age) {
        this.age = age
    },

    get fullName() {
        return `${ this.name } ${ this.lastName }`
    },

    set fullName(objFullName) {
        this.name = objFullName[0]
        this.lastName = objFullName[1]
    },


}
let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    age: 30,

    getAge: function () {
        return this.age
    },

    get ageKoder() {
        return this.age
    },

    set ageKoder(age) {
        this.age = age
    },

    get fullName() {
        return `${ this.name } ${ this.lastName }`
    },

    set fullName(objFullName) {
        this.name = objFullName[0]
        this.lastName = objFullName[1]
    }
}

// Metodos
// console.log( koder.getAge() )

// getters
// console.log('Edad inicial: ', koder.ageKoder)
// console.log('Nombre completo: ', koder.fullName)

// setters
koder.ageKoder = 47
koder.fullName = ['jorge luis', 'camarillo']

// getter y setter de 
/**
 * 
 * 1. getter average
 * 2. getter, setter IMC 
 * 3. setter Score
 * 4. setter newProperty
 * 
 * 
 */


/*
 Object.defineProperty( objeto , 'nuevapropiedad', {
    get() {
        return this.average.reduce((acc, cv) => acc += cv, 0) / this.average.length
    }
})
*/

// 1. getter average
Object.defineProperty( koder , 'averagekoder', {
    get() {
        return this.average.reduce((acc, cv) => acc += cv, 0) / this.average.length
    }
})
// console.log(koder.averagekoder)


// 2. getter, setter IMC

koder.weight = 90
koder.height = 1.73
// console.log(koder)

Object.defineProperty( koder , 'IMCKoder', {
    get() {
        return this.weight / (this.height * this.height)
    },
    set(value) {
        console.log(value)
      this.IMC = value
    }
})
// console.log(koder.IMCKoder)

let imcKoder = koder.IMCKoder
koder.IMCKoder = imcKoder


// 3. setter Score
Object.defineProperty( koder , 'score', {
    set(score) {
        this.average.push(score)
    }
})

koder.score = 8

// 4. setter newProperty
Object.defineProperty( koder , 'newProperty', {
    set(objProp) {

        console.log(objProp)
        // koder['nueva'] = 'valor'
        this[objProp.nameProperty] = objProp.valueProperty
    }
})


koder.newProperty = {
    nameProperty: 'gender',
    valueProperty: 'M'
}

koder.newProperty = {
    nameProperty: 'generation',
    valueProperty: 6
}

koder.newProperty = {
    nameProperty: 'random',
    valueProperty: true
}

koder.newProperty = {
    nameProperty: 'random2',
    valueProperty: [1,9,7]
}

/**
 * Estudiar DOM 
 * CSS y HTML
 */
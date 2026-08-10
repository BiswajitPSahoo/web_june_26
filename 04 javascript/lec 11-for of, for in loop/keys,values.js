const student = {
    id : 101,
    nmae : "Ankit",
    age : 25,
    course : "Java Fillstack",
    courseFees : 30000.99
}

const keysStd = Object.keys(student)
for (const key of keysStd) {
    console.log(key);
}

const valuesStd = Object.values(student)

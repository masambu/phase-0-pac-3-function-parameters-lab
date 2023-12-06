function introduction(name) {
    return `Hi, my name is ${name}.`
}
console.log(introduction("Kelvin"));




function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage("Kelvin", "Java"));




{function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional())}




{function introductionWithLanguageOptional(name = "Gracie", language = "Python") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional())}

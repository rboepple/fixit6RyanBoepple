let petNames=[' Darcy',' Jack',' Jerry',' Marty',' Vito',' Vinny',' Riley',' Saddie',' Marge',' Sam']
console.log(petNames)
petNames.splice(5,1)
console.log(petNames)
petNames.splice(3,1)
console.log(petNames)
petNames.unshift(' Nancy')
console.log(petNames)
petNames.push(' Ryan')
console.log(petNames)
let rileyIndex = petNames.indexOf(' Riley')
console.log(rileyIndex)
let cindyIndex=petNames.indexOf('Cindy')
console.log(cindyIndex)
let withMarmaduke= [petNames+', Marmaduke']
console.log(withMarmaduke)
let x=petNames.shift()
console.log(x)
petNames.unshift(' Barney')
console.log(petNames)
let newPets = [' Ted',' Fred',' Jed',' Ned',' Ed',' Zed']
let allPets = [petNames+newPets]
console.log(allPets)
/*let y=allPets.shift()
alert(y)*/
let pets=allPets.join()
console.log(pets)
allPets.unshift('Agnes')
console.log(allPets)




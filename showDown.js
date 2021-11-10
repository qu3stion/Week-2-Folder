function fight(){
  let hero = prompt("Choose your hero:");
    console.log("Hero = " + hero)
  let villain = prompt("Name the villain:");
    console.log("Villain = " + villain)

  let heroHealth = 50
  let villainHealth = 50

  while (heroHealth > 0 && villainHealth > 0) {
    alert("Continue attacking until one attacker dies")

  let heroRoll = Math.floor(Math.random() * 20)
  let villainRoll = Math.floor(Math.random() * 20)
  if (heroRoll === 1 || heroRoll === 2) {
    heroHealth = heroHealth - 5;
    alert(`${hero} misses ${villain} and stabs self and loses 5 hitpoints! ${hero} has ${heroHealth} hitpoints left. ${villain} has ${villainHealth} hitpoints left.`)

  } else if (heroRoll > 2 && heroRoll < 11) {
    villainHealth = villainHealth - 0;
    alert(`${hero} misses ${villain} & does no damage... ${hero} has ${heroHealth} hitpoints left. ${villain} has ${villainHealth} hitpoints left.`)

  } else if (heroRoll > 10 && heroRoll < 19) {
    villainHealth = villainHealth - 10
    alert(`Woah! ${hero} strikes ${villain} for 10 hitpoints! ${hero} has ${heroHealth} hitpoints left. ${villain} has ${villainHealth} hitpoints left.`)

  } else if (heroRoll === 19 || heroRoll === 20) {
    villainHealth = villainHealth - 20
    alert(`Eureka! ${hero} strikes ${villain} for 20 hitpoint! ${hero} has ${heroHealth} hitpoints left. ${villain} has ${villainHealth} hitpoints left.`)
  };

  if (villainRoll === 1 || villainRoll === 2) {
    villainHealth = villainHealth - 5
    alert(`${villain} misses ${hero} and stabs self then loses 5 hitpoints! ${hero} has ${heroHealth} hitpoints left. ${villain} has ${villainHealth} hitpoints left.`)

  } else if (villainRoll > 2 && villainRoll < 11) {
    heroHealth = heroHealth - 0
    alert(`${villain} misses ${hero} & does no damage... ${hero} has ${heroHealth} hitpoints left. ${villain} has ${villainHealth} hitpoints left.`)

  } else if (villainRoll > 10 && villainRoll < 19) {
    heroHealth = heroHealth - 10
    alert(`Yikes! ${villain} strikes ${hero} for 10 hitpoints! ${hero} has ${heroHealth} hitpoints left. ${villain} has ${villainHealth} hitpoints left.`)

  } else if (villainRoll === 19 || villainRoll === 20) {
    heroHealth = heroHealth - 20
    alert(`WOW! ${villain} strikes ${hero} for 20 hitpoint! ${hero} has ${heroHealth} hitpoints left. ${villain} has ${villainHealth} hitpoints left.`)
  }

 }
 if (villainHealth <= 0) {
   alert(`Game Over! ${hero} has won!`)
 }
 if (heroHealth <= 0) {
   alert(`Game Over! ${villain} has won!`)
 }
}
fight()

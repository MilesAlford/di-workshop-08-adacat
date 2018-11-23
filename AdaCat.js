class AdaCat {
  constructor(name, owner) {
    this.name = name // name of cat
    this.owner = owner // name of owner
    this.hunger = 5 // cat starting hunger
    this.isSleeping = false // cat starts awake 
    this.size = 30 // cat's starting size
    this.tiredness = 0
  }

  setHunger(newHunger) { // controls the cat's hunger
    if (newHunger < 0) { // if statement which stops the hunger from going under 0
      newHunger = 0 
    }
    if (newHunger > 10) { // if statement which stops the cat's hunger from going over 10
      newHunger = 10
    }
    this.hunger = newHunger
  }

  setTiredness(newTiredness) {
    if(newTiredness < 0) {
      newTiredness = 0
    }
    if (newTiredness > 15) {
      newTiredness = 15
    }
    this.tiredness = newTiredness
  }

  getDescription() { // description of the actions the cat can take
    var sleepLine // controls if the cat is sleeping or not
    if (this.isSleeping) {
      sleepLine = 'Shh! ' + this.name + ' is sleeping.' // line is played if the cat is sleeping
    } else {
      sleepLine = this.name + ' is awake.' // line is played if the cat is awake
    }
    var lines = [ // controls the cats stats
      this.name + ' is a cat. they belongs to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',
      'their tiredness level is ' + this.tiredness + '/15',
      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.',

      sleepLine
    ]

    return lines.join('\n')
  }

  feed() { // increases and decreases 
    var hunger = this.hunger - 1
    var tiredness = this.tiredness + 1

    if (hunger < 3) {
      this.size = this.size + 1
    }

    this.setHunger(hunger)
    this.setTiredness(tiredness)
  }

  nap() {
    this.isSleeping = true
    this.tiredness = 0
  }

  wakeUp() {
    this.isSleeping = false
    
  }

  play() {
    var tiredness = this.tiredness + 3
    var hunger = this.hunger + 3
    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger)
    this.setTiredness(tiredness)
  }

  getHealth() {
    // the ideal weight for cats is 30
    // this futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal

    // health score gets lower as the cat gets
    // more hungry
    var healthScore = sizeScore - this.hunger

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0
    }

    return healthScore
  }
}

module.exports = AdaCat

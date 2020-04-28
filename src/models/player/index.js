class Player {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.position = 0
        this.money = 1500
        this.jail = false
        this.jailroll = 0
        this.properties = []
        this.firstRoundComplete = false
        this.potluckJailCard = false
        this.opportunityJailCard = false
    }

    // adjusts player's position to a specific position
    adjustPosition = (position) => {
        this.position = position
    }

    updatePosition = (value) => {
        if (this.jail && this.jailroll < 3) {
            this.jailroll += 1
        } else if (this.jail && this.jailroll === 3) {
            this.jailroll = 0
            this.jail = false
            this.position = (this.position + value) % 40
        } else {
            if (this.position + value >= 40) {
                this.money += 200
                this.firstRoundComplete = true
            }
            this.position = (this.position + value) % 40
        }
    }

    getMoney = (money) => {
        this.money += money
    }

    pay = (value) => {
        this.money -= value
    }

    goToJail = () => {
        this.position = 10
        this.jail = true
        this.jailroll = 0
    }

    checkCompleteGroupOwned = (property) => {
        const groupToCheck = property.group
        if (this.properties) {
            let groupPropertiesOwned = this.properties.filter(property => {
                return property.group === groupToCheck
            })

            if ((groupToCheck === 'brown' || groupToCheck === 'dark_blue') && groupPropertiesOwned.length === 2) {
                console.log(groupPropertiesOwned)
                return {
                    check: true,
                    group: groupPropertiesOwned
                }
            } else if (groupPropertiesOwned.length === 3) {
                console.log(groupPropertiesOwned)
                return {
                    check: true,
                    group: groupPropertiesOwned
                }
            } else {
                return {
                    check: false,
                    group: groupPropertiesOwned
                }
            }
        }
    }

    developProperty = (property) => {
        let ownership = this.checkCompleteGroupOwned(property)

        if (!ownership.check) {
            alert('You must own all properties in a group before building houses.')
        } else if (this.money < property.housePrice) {
            alert('Not enough money to develop this property')
        } else if (property.rentIndex === 6) {
            alert("Can't develop this property any further")
        } else {
            console.log('developProperty function')
        }
    }
}

export { Player }
class Player {

    /**
     * Constructor for Player class
     * 
     * @param id - player id
     * @param name  - player name
     */
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
        this.icon = null
    }

    /**
     * Adjusts Player's position according to the arg position
     * 
     * @param position - player position
     */
    adjustPosition = (position) => {
        this.position = position
    }

    /**
     * Updates Player's position according to the arg value.
     * Checks if Player is in jail, if true add 1 to jailroll.
     * If jailroll is 3 and Player is in jail then remove Player from jail
     * Check if Player passes go, if true add 200 pounds to their money
     * 
     * @param value - how many values to move the Player
     */
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

    /**
     * Get paid function
     * 
     * @param money - how much Player is getting paid
     */
    getMoney = (money) => {
        this.money += money
    }

    /**
     * Pay function
     * 
     * @param money - how much Player is paying
     */
    pay = (value) => {
        this.money -= value
    }

    /**
     * Sets Player to go to jail
     * 
     */
    goToJail = () => {
        this.position = 10
        this.jail = true
        this.jailroll = 0
    }

    /**
     * Counts the properties in the group of arg property which are owned by the current Player
     * 
     * @param property - Property objets
     */
    countPropertiesInGroup = (property) => {
        let group = property.group
        let owned
        if (this.properties) {
            owned = this.properties.filter(property => {
                return property.group === group
            })
        }
        return owned.length
    }

    /**
     * Checks if the property's group is owned by the Player
     * 
     * @param property - Property objets
     */
    checkCompleteGroupOwned = (property) => {
        const groupToCheck = property.group
        if (this.properties) {
            let groupPropertiesOwned = this.properties.filter(property => {
                return property.group === groupToCheck
            })

            if ((groupToCheck === 'brown' || groupToCheck === 'dark_blue') && groupPropertiesOwned.length === 2) {
                return {
                    check: true,
                    group: groupPropertiesOwned
                }
            } else if (groupPropertiesOwned.length === 3) {
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

    /**
     * Develops a house on the property argument
     * Checks if the group of the property is owned by the player wanting to develop a house
     * Checks for maximum number of houses on the property
     * 
     * @param property - Property objets
     */
    developProperty = (property) => {
        let ownership = this.checkCompleteGroupOwned(property)
        (ownership)

        if (!ownership.check) {
            alert('You must own all properties in a group before building houses.')
        } else if (this.money < property.housePrice) {
            alert('Not enough money to develop this property')
        } else if (property.rentIndex === 7) {
            alert("Can't develop this property any further")
        } else {
            // list of rent indices
            let rentIndices = ownership.group.map(property => {
                return property.rentIndex
            })
            const areDeveloped = rentIndices.every(index => index === rentIndices[0])
            (areDeveloped)

            
        }
    }
}

export { Player }
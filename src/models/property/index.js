class Property {
    constructor(position, name, group, value, rents, housePrice) {
        this.position = position
        this.name = name
        this.owner = null
        this.group = group
        this.value = value
        this.rentIndex = 0
        this.rents= rents
        this.housePrice = housePrice
        this.mortgaged = false
    }
}

export default Property
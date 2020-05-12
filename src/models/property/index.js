class Property {

    /**
     * 
     * @param position - position of property
     * @param name - name of property
     * @param group - group color of property
     * @param value - value of property
     * @param rents
     * @param housePrice 
     */
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
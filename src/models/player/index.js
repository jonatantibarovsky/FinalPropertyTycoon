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

    pay = (value) => {
        this.money -= value
    }

    goToJail = () => {
        this.position = 10
        this.jail = true
        this.jailroll = 0
    }
}

export { Player }
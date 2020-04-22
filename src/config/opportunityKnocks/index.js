import Card from '../../models/card'

const opportunity1 = new Card('Bank pays you divided of £50', 50)
const opportunity2 = new Card('You have won a lip sync battle. Collect £100', 100)
const opportunity3 = new Card('Advance to Turing Heights', 0)
const opportunity4 = new Card('Advance to Han Xin Gardens. If you pass GO, collect £200')
const opportunity5 = new Card('Fined £15 for speeding', 15)
const opportunity6 = new Card('Pay university fees of £150', 150)
const opportunity7 = new Card('Take a trip to Hove Station. If you pass GO, collect £200', 0)
const opportunity8 = new Card('Loan matures, collect £150', 150)
const opportunity9 = new Card('You are assessed for repairs, £40/house, £115/hotel', 0)
const opportunity10 = new Card('Advance to GO', 0)
const opportunity11 = new Card('You are assessed for repairs, £25/house, £100/hotel', 0)
const opportunity12 = new Card('Go back 3 spaces', 0)
const opportunity13 = new Card('Advance to Skywalker Drive. If you pass GO collect £200', 0)
const opportunity14 = new Card('Go to jail. Do not pass GO, do not collect £200', 0)
const opportunity15 = new Card('Drunk in charge of skateboard. Fine £20', 20)
const opportunity16 = new Card('Get out of jail free / Opportunity', 0)

const opportunityKnocks = [opportunity1, opportunity2, opportunity3, opportunity4, opportunity5, opportunity6,
                            opportunity7, opportunity8, opportunity9, opportunity10, opportunity11, opportunity12,
                            opportunity13, opportunity14, opportunity15, opportunity16]

export default { opportunityKnocks }
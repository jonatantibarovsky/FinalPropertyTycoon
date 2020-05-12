/**
 * Config file with all the pot luck cards
 */


import Card from '../../models/card'

const potluck1 = new Card('You inherit £100', 3)
const potluck2 = new Card('You have won 2nd prize in a beauty contest, collect £20', 3)
const potluck3 = new Card('Go back to Crapper Street', 1)
const potluck4 = new Card('Student loan refund. Collect £20', 3)
const potluck5 = new Card('Bank error in your favour. Collect £200', 3)
const potluck6 = new Card('Pay bill for text books of £100', 2)
const potluck7 = new Card('Mega late night taxi bill pay £50', 2)
const potluck8 = new Card('Advance to GO', 1)
const potluck9 = new Card('From sale of Bitcoin you get £50', 3)
const potluck10 = new Card('Pay a £10 fine or take opportunity knocks', 0)
const potluck11 = new Card('Pay insurance fee of £150', 2)
const potluck12 = new Card('Savings bond matures, collect £100', 3)
const potluck13 = new Card('Go to jail. Do not pass Go, do not collect £200', 5)
const potluck14 = new Card('Received interest on shares of £25', 3)
const potluck15 = new Card("It's your birthday. Collect £10 from each player", 0)
const potluck16 = new Card('Get out of jail free / Potluck', 4)

const potlucks = [potluck1, potluck2, potluck3, potluck4, potluck5, potluck6, potluck7,
                    potluck8, potluck9, potluck10, potluck11, potluck12, potluck13, potluck14,
                    potluck15, potluck16]

export default { potlucks }
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;

    }
    attack(target) {
        target.res -= this.power;
        console.log(this.name + " has attacked " + target.name + "'s , " + target.name + " current resiliance is " + target.res);
    }
}
class Effect extends Card {
    constructor(name, cost, magnitude, stat) {
        super(name, cost);
        this.magnitude = magnitude;
        this.stat = stat
    }

    play(target) {
        if (target instanceof Unit) {
            this.stat === "resilience" ? target.res += this.magnitude : (this.stat === "power" ? target.power += this.magnitude : console.log("error"));
            if (this.stat === "resilience") {
                console.log(this.name + " has been activated on " + target.name + "'s " + this.stat + " ," + target.name + "'s " + this.stat + " has become " + target.res);
            }
            else if (this.stat === "power") {
                console.log(this.name + " has been activated on " + target.name + "'s " + this.stat + " ," + target.name + "'s " + this.stat + " has become " + target.power);
            }
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }

}
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, 3, "resilience");

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, -2, "resilience")

const pairProgramming = new Effect("Pair Programming", 3, 2, "power");

console.log(blackBeltNinja.res)
redBeltNinja.attack(blackBeltNinja);
hardAlgorithm.play(blackBeltNinja);
hardAlgorithm.play(blackBeltNinja);
pairProgramming.play(blackBeltNinja);





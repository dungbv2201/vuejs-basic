var app = new Vue({
    el: '#app',
    data: {
        player1: {
            name: 'Player1',
            score: 0,
            totalScore: 0,
            turn: false
        },
        player2: {
            name: 'Player2',
            score: 0,
            totalScore: 0
        },
        turnNumber: 0
    },
    watch: {
        'player1.turn': async function () {
            if (this.player1.turn) {
                this.player1.score = this.calScore()
                this.player1.totalScore += this.player1.score

            } else {
                this.player2.score = this.calScore()
                this.player2.totalScore += this.player2.score
            }

        },
        turnNumber() {
            if (this.turnNumber === 4) {
                var winner = this.player1.name
                if (this.player1.score < this.player2.score) {
                    winner = this.player2.name
                }
                setTimeout(()=>{this.result(winner)}, 500)
            }
        }
    },
    methods: {
        dice(el) {
            var numberRandom = Math.floor((Math.random() * 6) + 1)
            var classNameResult = 'dice-' + numberRandom
            var elDice = document.getElementById(el)
            var className = elDice.className
            elDice.classList.remove(className.split(" ")[1])
            elDice.classList.add(classNameResult)
            return numberRandom
        },
        calScore() {
            return this.dice('d1') + this.dice('d2')
        },
        play() {
            this.player1.turn = !this.player1.turn
            this.turnNumber++
            console.log(this.turnNumber)
        },
        result(winner) {
            alert(winner + ' win')
            this.player1.score = 0
            this.player2.score = 0
            this.player1.totalScore = 0
            this.player2.totalScore = 0
            this.turnNumber = 0
        }
    }
});

import {BowlingGame} from "../Bowling/BowlingGame";

describe("Bowling Game", () =>{
    it('should score 5 for the first roll',  () => {
        let pins = 5;
        const bowlingGame = new BowlingGame();

        const score = bowlingGame.Score(pins);

        expect(score).toEqual("5-|--|--|--|--|--|--|--|--|--||")
    });
});
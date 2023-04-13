import { Player } from "./Player";

export class GameBoardState {
    constructor(
        public players: Player[],
        public board: string[],
        public currentPlayer: Player,
        public gameActive: boolean
    ) {}
    
}
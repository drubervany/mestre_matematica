export interface Player {
  name: string;
  level: number;
  xp: number;
  hearts: number;
  maxHearts: number;
  coins: number;
  items: string[]; // Itens conquistados
}

export const INITIAL_PLAYER: Player = {
  name: 'Anthony',
  level: 1,
  xp: 0,
  hearts: 3,
  maxHearts: 3,
  coins: 0,
  items: []
};


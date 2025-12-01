export interface GameMissionReward {
  xp: number;
  coins?: number;
  item?: string; // ID do item que será desbloqueado
  theme: 'multiplicacao' | 'medidas' | 'divisao' | 'anexos';
  minCorrectAnswers?: number; // Mínimo de acertos para ganhar recompensa
}

export interface GameMission {
  missionId: number;
  reward: GameMissionReward;
  minCorrectAnswers?: number; // Mínimo de acertos para ganhar recompensa
}


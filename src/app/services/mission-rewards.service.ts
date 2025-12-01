import { Injectable } from '@angular/core';
import { GameMissionReward } from '../models/game-mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionRewardsService {
  private rewards: { [missionId: number]: GameMissionReward } = {
    1: {
      xp: 10,
      coins: 5,
      item: 'calculator_multiply',
      theme: 'multiplicacao',
      minCorrectAnswers: 3
    },
    2: {
      xp: 10,
      coins: 5,
      item: 'ruler_measure',
      theme: 'medidas',
      minCorrectAnswers: 3
    },
    3: {
      xp: 10,
      coins: 5,
      item: 'divide_symbol',
      theme: 'divisao',
      minCorrectAnswers: 3
    },
    4: {
      xp: 15,
      coins: 10,
      item: 'math_badge',
      theme: 'anexos',
      minCorrectAnswers: 3
    }
  };

  getReward(missionId: number): GameMissionReward | undefined {
    return this.rewards[missionId];
  }
}


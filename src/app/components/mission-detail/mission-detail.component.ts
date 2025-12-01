import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionsService } from '../../services/missions.service';
import { GameService } from '../../services/game.service';
import { MissionRewardsService } from '../../services/mission-rewards.service';
import { Mission, Activity } from '../../models/mission.model';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  mission: Mission | undefined;
  allActivitiesCompleted = false;
  showOriginalImage = false;
  selectedMatches: { [key: string]: string } = {};
  selectedImageForMatch: { [activityIndex: number]: string | null } = {};
  shuffledMatchPairs: { [activityIndex: number]: { images: any[], texts: any[] } } = {};
  shuffledOptions: { [activityIndex: number]: any[] } = {};
  environmentAnswers: { [key: number]: boolean | null } = {};
  inputAnswers: { [key: string]: string } = {}; // Respostas dos campos de input
  cduAnswers: { [key: string]: { centena: string; dezena: string; unidade: string } } = {}; // Respostas C D U (resultado)
  cduNumber1Answers: { [key: string]: { centena: string; dezena: string; unidade: string } } = {}; // Respostas C D U do primeiro número
  cduNumber2Answers: { [key: string]: { centena: string; dezena: string; unidade: string } } = {}; // Respostas C D U do segundo número
  cduOperatorAnswers: { [key: string]: string } = {}; // Operador escolhido pelo usuário ('addition', 'subtraction', 'multiplication', 'division')
  cduCarryAnswers: { [key: string]: { centena: string; dezena: string } } = {}; // Respostas de "vai um" (carry) para adição
  cduBorrowAnswers: { [key: string]: { centena: string; dezena: string } } = {}; // Respostas de "emprestar" (borrow) para subtração
  contaAnswers: { [key: string]: { num1: string; num2: string; result: string } } = {}; // Respostas da conta (Desafio 1)
  visualMultiplicationContaAnswers: { [key: string]: string[] } = {}; // Respostas da conta para visual multiplication (3 campos: num1, num2, result)
  iceCreamSelections: { [key: string]: boolean[] } = {}; // Seleções de sorvetes (array de booleanos)
  
  correctAnswers = 0;
  totalQuestions = 0;
  wrongAnswers = 0;
  showBonusChallenge = false;
  bonusChallengeCompleted = false;
  completedActivities: boolean[] = [];
  bonusAnswerSelected: string | null = null;
  showHeartAnimation = false;
  showFinalCard = false;
  showCoinsLossCard = false;
  coinsLost = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private missionsService: MissionsService,
    public gameService: GameService,
    private rewardsService: MissionRewardsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.loadMission(id);
    });

    this.gameService.player$.subscribe(player => {
      if (this.showBonusChallenge && !this.bonusChallengeCompleted && player.hearts > 0) {
        this.bonusChallengeCompleted = true;
        this.showBonusChallenge = false;
        this.enableAllActivities();
      }
    });
  }

  loadMission(id: number): void {
    this.mission = this.missionsService.getMissionById(id);
    this.allActivitiesCompleted = false;
    this.showOriginalImage = !(this.mission?.textContent || this.mission?.textImages);
    this.selectedMatches = {};
    this.selectedImageForMatch = {};
    this.environmentAnswers = {};
    this.shuffledMatchPairs = {};
    this.shuffledOptions = {};
    this.inputAnswers = {};
    this.cduAnswers = {};
    this.cduNumber1Answers = {};
    this.cduNumber2Answers = {};
    this.cduOperatorAnswers = {};
    this.cduCarryAnswers = {};
    this.cduBorrowAnswers = {};
    this.visualMultiplicationContaAnswers = {};
    this.iceCreamSelections = {};
    
    if (this.mission) {
      this.mission.activities.forEach((activity, activityIndex) => {
        if (activity.type === 'match' && activity.matchPairs) {
          this.shuffleMatchPairs(activityIndex, activity.matchPairs);
        } else if (activity.type === 'multiple-choice' && activity.options) {
          this.shuffleOptions(activityIndex, activity.options);
        }
      });
    }
    this.correctAnswers = 0;
    this.totalQuestions = 0;
    if (this.mission) {
      this.mission.activities.forEach(activity => {
        if (activity.type === 'match' && activity.matchPairs) {
          this.totalQuestions += activity.matchPairs.length;
        } else {
          this.totalQuestions += 1;
        }
      });
    }
    this.wrongAnswers = 0;
    this.showBonusChallenge = false;
    this.bonusChallengeCompleted = false;
    this.bonusAnswerSelected = null;
    this.showHeartAnimation = false;
    this.showCoinsLossCard = false;
    this.coinsLost = 0;
    this.completedActivities = new Array(this.totalQuestions).fill(false);
    
    if (!this.mission) {
      this.router.navigate(['/missions']);
      return;
    }
    
    setTimeout(() => {
      const buttons = document.querySelectorAll('.activity-item .option-btn');
      buttons.forEach((btn: any) => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect', 'selected');
      });
      
      const successSection = document.getElementById('success-section');
      if (successSection) {
        successSection.style.display = 'none';
      }
    }, 100);
  }

  toggleOriginalImage(): void {
    this.showOriginalImage = !this.showOriginalImage;
  }

  processActivityReward(activityIndex: number): void {
    if (!this.mission) return;
    
    const activity = this.mission.activities[activityIndex];
    if (!activity || !activity.reward) return;

    const rewardText = activity.reward;
    
    // Extrair XP da recompensa (ex: "⭐ Você ganhou +5 XP!" ou "+10 XP")
    const xpMatch = rewardText.match(/(?:\+|\+)(\d+)\s*XP/i);
    if (xpMatch) {
      const xpAmount = parseInt(xpMatch[1], 10);
      this.gameService.addXP(xpAmount);
    }
    
    // Extrair moedas da recompensa (ex: "💰 Você ganhou +5 moedas!" ou "+3 moedas")
    const coinsMatch = rewardText.match(/(?:\+|\+)(\d+)\s*moedas?/i);
    if (coinsMatch) {
      const coinsAmount = parseInt(coinsMatch[1], 10);
      this.gameService.addCoins(coinsAmount);
    }
  }

  getTextParagraphs(): string[] {
    if (!this.mission || !this.mission.textContent) {
      return [];
    }
    return this.mission.textContent.split('\n').filter(p => p.trim());
  }

  hasImagesInOptions(activity: Activity): boolean {
    return activity.options?.some(opt => !!opt.image) || false;
  }

  goBack(): void {
    this.router.navigate(['/missions']);
  }

  checkAnswer(activityIndex: number, optionIndex: number, isCorrect: boolean, option?: any): void {
    if (!this.mission) return;
    
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    const activity = this.mission.activities[activityIndex];
    const options = this.shuffledOptions[activityIndex] || activity.options || [];
    const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`) as NodeListOf<HTMLElement>;
    
    if (activity.allowMultiple) {
      const clickedBtn = buttons[optionIndex];
      const wasSelected = clickedBtn.classList.contains('selected');
      
      if (wasSelected) {
        clickedBtn.classList.remove('selected', isCorrect ? 'correct' : 'incorrect');
      } else {
        clickedBtn.classList.add('selected');
        clickedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (!isCorrect) {
          this.wrongAnswers++;
          this.gameService.loseHeart();
          this.checkForBonusChallenge();
        }
      }
      
      const allCorrectSelected = options.every((opt: any, idx: number) => {
        if (opt.correct) {
          return buttons[idx].classList.contains('selected');
        }
        return true;
      });
      
      const noIncorrectSelected = options.every((opt: any, idx: number) => {
        if (!opt.correct) {
          return !buttons[idx].classList.contains('selected');
        }
        return true;
      });
      
      const activityCorrect = allCorrectSelected && noIncorrectSelected;
      
      if (allCorrectSelected && activityCorrect && !this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = true;
        this.correctAnswers++;
        this.processActivityReward(activityIndex);
        buttons.forEach((btn: any) => {
          btn.disabled = true;
          options.forEach((opt: any, idx: number) => {
            if (!opt.correct && !buttons[idx].classList.contains('selected')) {
              buttons[idx].classList.add('incorrect');
            }
          });
        });
        this.checkAllActivitiesCompleted();
      } else if (!activityCorrect && this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = false;
        this.correctAnswers--;
      } else if (activityCorrect) {
        this.checkAllActivitiesCompleted();
      }
    } else {
      buttons.forEach((btn: any, index: number) => {
        btn.disabled = true;
        const currentOption = options[index];
        
        if (index === optionIndex) {
          btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (isCorrect) {
          if (currentOption && currentOption.correct) {
            btn.classList.add('correct');
          }
        }
      });
      
      if (isCorrect && !this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = true;
        this.correctAnswers++;
        this.processActivityReward(activityIndex);
      } else if (!isCorrect) {
        this.wrongAnswers++;
        this.gameService.loseHeart();
        this.checkForBonusChallenge();
      }
      
      this.checkAllActivitiesCompleted();
    }
  }
  
  checkForBonusChallenge(): void {
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      if (!this.showBonusChallenge) {
        this.showBonusChallenge = true;
        this.disableAllActivities();
        const successSection = document.getElementById('success-section');
        if (successSection) {
          successSection.style.display = 'none';
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
  
  closeBonusPopup(): void {
    // Não permitir fechar o popup sem completar o desafio
    // O popup só fecha quando o desafio é completado
  }
  
  disableAllActivities(): void {
    if (!this.mission) return;
    
    this.mission.activities.forEach((activity, activityIndex) => {
      const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
      buttons.forEach((btn: any) => {
        if (!btn.disabled || !btn.classList.contains('correct')) {
          btn.disabled = true;
          btn.style.opacity = '0.5';
          btn.style.cursor = 'not-allowed';
        }
      });
    });
  }
  
  enableAllActivities(): void {
    if (!this.mission) return;
    
    this.mission.activities.forEach((activity, activityIndex) => {
      if (!this.completedActivities[activityIndex]) {
        const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
        buttons.forEach((btn: any) => {
          if (!btn.classList.contains('correct')) {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
          }
        });
      }
    });
  }

  checkTrueFalse(activityIndex: number, userAnswer: boolean, isCorrect: boolean): void {
    if (!this.mission) return;
    
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    const isActivityCorrect = isCorrect === userAnswer;
    if (isActivityCorrect && !this.completedActivities[activityIndex]) {
      this.completedActivities[activityIndex] = true;
      this.correctAnswers++;
      this.processActivityReward(activityIndex);
    } else if (!isActivityCorrect) {
      this.wrongAnswers++;
      this.gameService.loseHeart();
      this.checkForBonusChallenge();
    }
    
    const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
    buttons.forEach((btn: any) => {
      btn.disabled = true;
      const isTrueBtn = btn.textContent.includes('Verdadeiro');
      if ((isTrueBtn && userAnswer) || (!isTrueBtn && !userAnswer)) {
        btn.classList.add(isCorrect ? 'correct' : 'incorrect');
      } else {
        btn.classList.add(!isCorrect ? 'correct' : 'incorrect');
      }
    });
    
    this.checkAllActivitiesCompleted();
  }

  checkAllActivitiesCompleted(): void {
    if (!this.mission) return;
    
    let allCompleted = true;
    
    this.mission.activities.forEach((activity, activityIndex) => {
      if (activity.type === 'multiple-choice' || activity.type === 'true-false') {
        if (activity.allowMultiple) {
          if (!this.completedActivities[activityIndex]) {
            allCompleted = false;
          }
        } else {
          const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
          const allDisabled = Array.from(buttons).every((btn: any) => btn.disabled);
          if (!allDisabled) {
            allCompleted = false;
          }
        }
      } else if (activity.type === 'match') {
        if (activity.matchPairs) {
          const allMatched = activity.matchPairs.every((pair, idx) => {
            const key = `${activityIndex}-${pair.matchId}`;
            return this.selectedMatches[key] === pair.description;
          });
          if (!allMatched) {
            allCompleted = false;
          }
        }
      } else if (activity.type === 'environment-check') {
        if (activity.environmentImages) {
          const allAnswered = activity.environmentImages.every((_, idx) => {
            return this.environmentAnswers[idx] !== null && this.environmentAnswers[idx] !== undefined;
          });
          if (!allAnswered) {
            allCompleted = false;
          }
        }
      } else if (activity.type === 'fill-blank' || activity.type === 'math-input') {
        if (!this.completedActivities[activityIndex]) {
          allCompleted = false;
        }
      } else if (activity.type === 'cdu-operation') {
        if (!this.completedActivities[activityIndex]) {
          allCompleted = false;
        }
      } else if (activity.type === 'visual-multiplication') {
        if (!this.completedActivities[activityIndex]) {
          allCompleted = false;
        }
      }
    });
    
    if (allCompleted && !this.allActivitiesCompleted) {
      this.allActivitiesCompleted = true;
      const player = this.gameService.getPlayer();
      if (player.hearts === 0 && !this.bonusChallengeCompleted) {
        this.checkForBonusChallenge();
        return;
      }
      setTimeout(() => {
        this.showSuccessMessage();
      }, 1000);
    }
  }

  showSuccessMessage(): void {
    if (this.mission) {
      if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
        return;
      }
      
      this.missionsService.markMissionAsCompleted(this.mission.id);
      
      const reward = this.rewardsService.getReward(this.mission.id);
      if (reward) {
        this.gameService.completeMission(reward, this.correctAnswers, this.totalQuestions);
      }
      
      const successSection = document.getElementById('success-section');
      if (successSection) {
        successSection.style.display = 'block';
        successSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  selectBonusAnswer(answer: string): void {
    this.bonusAnswerSelected = answer;
  }

  completeBonusChallenge(): void {
    if (!this.mission || !this.bonusAnswerSelected) return;
    
    let correctAnswer: string;
    if (this.mission.bonusQuestion) {
      correctAnswer = this.mission.bonusCorrectAnswer || "Sim";
    } else {
      correctAnswer = "Somar um número várias vezes";
    }
    
    const isCorrect = this.bonusAnswerSelected === correctAnswer;
    
    if (isCorrect) {
      this.gameService.recoverHeart();
      this.bonusChallengeCompleted = true;
      this.showBonusChallenge = false;
      this.enableAllActivities();
      this.showHeartAnimation = true;
      setTimeout(() => {
        this.showHeartAnimation = false;
        if (this.allActivitiesCompleted) {
          this.showSuccessMessage();
        } else {
          this.checkAllActivitiesCompleted();
        }
      }, 3000);
    } else {
      const player = this.gameService.getPlayer();
      const livesLost = player.maxHearts - player.hearts;
      const coinsToDeduct = livesLost * 3;
      
      if (coinsToDeduct > 0) {
        this.coinsLost = coinsToDeduct;
        this.gameService.removeCoins(coinsToDeduct);
        this.showCoinsLossCard = true;
        setTimeout(() => {
          this.showCoinsLossCard = false;
        }, 3000);
      }
      
      this.bonusAnswerSelected = null;
      this.showBonusChallenge = true;
      this.disableAllActivities();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextMission(): void {
    if (!this.mission) return;
    
    const nextId = this.mission.id + 1;
    const nextMission = this.missionsService.getMissionById(nextId);
    
    if (nextMission) {
      this.router.navigate(['/mission', nextId]).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else {
      this.showFinalCard = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  closeFinalCard(): void {
    this.showFinalCard = false;
    this.router.navigate(['/missions']);
  }

  shuffleOptions(activityIndex: number, options: any[]): void {
    const shuffle = (array: any[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    this.shuffledOptions[activityIndex] = shuffle(options);
  }

  shuffleMatchPairs(activityIndex: number, matchPairs: any[]): void {
    const images = [...matchPairs];
    const texts = [...matchPairs];
    
    const shuffle = (array: any[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    this.shuffledMatchPairs[activityIndex] = {
      images: shuffle(images),
      texts: shuffle(texts)
    };
  }

  selectImageForMatch(activityIndex: number, imageId: string): void {
    if (!this.mission) return;
    
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    if (this.selectedImageForMatch[activityIndex] === imageId) {
      this.selectedImageForMatch[activityIndex] = null;
    } else {
      this.selectedImageForMatch[activityIndex] = imageId;
    }
  }

  selectMatch(activityIndex: number, imageId: string, description: string): void {
    if (!this.mission) return;
    
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    if (!this.selectedImageForMatch[activityIndex]) {
      return;
    }
    
    const selectedImageId = this.selectedImageForMatch[activityIndex];
    const key = `${activityIndex}-${selectedImageId}`;
    
    const activity = this.mission.activities[activityIndex];
    if (activity.matchPairs) {
      const correctPair = activity.matchPairs.find(pair => pair.matchId === selectedImageId);
      const isCorrect = correctPair && correctPair.description === description;
      
      if (isCorrect) {
        const wasAlreadyMatched = this.selectedMatches[key] !== undefined;
        this.selectedMatches[key] = description;
        
        if (!wasAlreadyMatched) {
          this.correctAnswers++;
        }
        
        this.selectedImageForMatch[activityIndex] = null;
      } else {
        this.wrongAnswers++;
        this.gameService.loseHeart();
        this.checkForBonusChallenge();
        this.selectedImageForMatch[activityIndex] = null;
      }
      
      const allCorrect = activity.matchPairs.every(pair => {
        const matchKey = `${activityIndex}-${pair.matchId}`;
        return this.selectedMatches[matchKey] === pair.description;
      });
      
      const allMatched = activity.matchPairs.every(pair => {
        const matchKey = `${activityIndex}-${pair.matchId}`;
        return this.selectedMatches[matchKey] !== undefined;
      });
      
      if (allCorrect && allMatched && !this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = true;
        this.correctAnswers++;
        this.processActivityReward(activityIndex);
        this.checkAllActivitiesCompleted();
      } else if ((!allCorrect || !allMatched) && this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = false;
      }
    }
  }

  checkEnvironment(activityIndex: number, imageIndex: number, hasProblem: boolean): void {
    if (!this.mission) return;
    
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    const activity = this.mission.activities[activityIndex];
    if (activity.type === 'environment-check' && activity.environmentImages) {
      this.environmentAnswers[imageIndex] = hasProblem;
      
      const correct = activity.environmentImages[imageIndex].hasProblem === hasProblem;
      
      const allAnswered = activity.environmentImages.every((img, idx) => {
        return this.environmentAnswers[idx] !== null && this.environmentAnswers[idx] !== undefined;
      });
      
      let allImagesCorrect = true;
      for (let i = 0; i < activity.environmentImages.length; i++) {
        const img = activity.environmentImages[i];
        const userAnswer = this.environmentAnswers[i];
        if (userAnswer === null || userAnswer === undefined) {
          allImagesCorrect = false;
          break;
        }
        if (userAnswer !== img.hasProblem) {
          allImagesCorrect = false;
          break;
        }
      }
      
      if (allImagesCorrect && allAnswered && !this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = true;
        this.correctAnswers++;
        this.processActivityReward(activityIndex);
        this.checkAllActivitiesCompleted();
      } else if ((!allImagesCorrect || !allAnswered) && this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = false;
        this.correctAnswers--;
      } else if (!correct) {
        this.wrongAnswers++;
        this.gameService.loseHeart();
        this.checkForBonusChallenge();
      }
    }
  }

  isEnvironmentCorrect(imageIndex: number): boolean | null {
    return this.environmentAnswers[imageIndex] ?? null;
  }

  getCurrentHeartsArray(): boolean[] {
    const player = this.gameService.getPlayer();
    return Array(player.maxHearts).fill(false).map((_, i) => i < player.hearts);
  }

  // Métodos para campos de input
  getInputKey(activityIndex: number, fieldIndex: number): string {
    return `${activityIndex}-${fieldIndex}`;
  }

  getInputValue(activityIndex: number, fieldIndex: number): string {
    return this.inputAnswers[this.getInputKey(activityIndex, fieldIndex)] || '';
  }

  setInputValue(activityIndex: number, fieldIndex: number, value: string): void {
    const key = this.getInputKey(activityIndex, fieldIndex);
    this.inputAnswers[key] = value;
    
    // Se for os Desafios 1, 2, 3, 4 ou 5 e estiver alterando o campo de total (fieldIndex 0)
    // Atualizar os campos C D U automaticamente
    if ((activityIndex === 0 || activityIndex === 1 || activityIndex === 2 || activityIndex === 3 || activityIndex === 4) && fieldIndex === 0 && this.mission) {
      const num = parseInt(value) || 0;
      if (num > 0) {
        const cduKey = `${activityIndex}-cdu-total`;
        if (!this.cduAnswers[cduKey]) {
          this.cduAnswers[cduKey] = { centena: '', dezena: '', unidade: '' };
        }
        this.cduAnswers[cduKey].centena = Math.floor(num / 100) > 0 ? String(Math.floor(num / 100)) : '';
        this.cduAnswers[cduKey].dezena = Math.floor((num % 100) / 10) > 0 ? String(Math.floor((num % 100) / 10)) : '';
        this.cduAnswers[cduKey].unidade = String(num % 10);
      } else {
        const cduKey = `${activityIndex}-cdu-total`;
        if (this.cduAnswers[cduKey]) {
          this.cduAnswers[cduKey] = { centena: '', dezena: '', unidade: '' };
        }
      }
    }
    
    // Verificar tipo de atividade
    if (this.mission) {
      const activity = this.mission.activities[activityIndex];
      if (activity.type === 'visual-multiplication') {
        setTimeout(() => {
          this.checkVisualMultiplication(activityIndex);
        }, 100);
      } else {
        this.checkInputActivity(activityIndex);
      }
    }
  }

  checkInputActivity(activityIndex: number): void {
    if (!this.mission) return;
    
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    const activity = this.mission.activities[activityIndex];
    if (activity.type === 'ice-cream-selection') {
      // Verificar seleção de sorvetes e campos de input
      const selectionCorrect = this.isIceCreamSelectionCorrect(activityIndex);
      
      if (activity.inputFields) {
        let allFilled = true;
        activity.inputFields.forEach((field, fieldIndex) => {
          const key = this.getInputKey(activityIndex, fieldIndex);
          const userAnswer = this.inputAnswers[key] || '';
          if (!userAnswer.trim()) {
            allFilled = false;
          }
        });
        
        if (!allFilled) {
          return;
        }
        
        let allInputsCorrect = true;
        let hasError = false;
        activity.inputFields.forEach((field, fieldIndex) => {
          const key = this.getInputKey(activityIndex, fieldIndex);
          const userAnswer = this.inputAnswers[key] || '';
          const correctValue = String(field.correctValue).trim().toLowerCase();
          const userValue = userAnswer.trim().toLowerCase();
          
          if (userValue !== correctValue) {
            allInputsCorrect = false;
            hasError = true;
          }
        });
        
        const allCorrect = selectionCorrect && allInputsCorrect;
        
        if (allCorrect && !this.completedActivities[activityIndex]) {
          this.completedActivities[activityIndex] = true;
          this.correctAnswers++;
          this.checkAllActivitiesCompleted();
        } else if (!allCorrect && this.completedActivities[activityIndex]) {
          this.completedActivities[activityIndex] = false;
          this.correctAnswers--;
        } else if (hasError && !this.completedActivities[activityIndex]) {
          this.wrongAnswers++;
          this.gameService.loseHeart();
          this.checkForBonusChallenge();
        }
      }
    } else if (activity.type === 'fill-blank' || activity.type === 'math-input') {
      if (activity.inputFields) {
        // Para Desafios 1 e 2 (activityIndex 0-1), usar validação de conta em vez de input simples
        const isContaCase = (activityIndex === 0 || activityIndex === 1);
        // Para Desafios 3, 4 e 5 (activityIndex 2-4), validar apenas o campo 0 (número)
        const isSpecialCase = (activityIndex === 2 || activityIndex === 3 || activityIndex === 4);
        
        if (isContaCase) {
          // Validar usando conta (num1 x num2 = result)
          const key = `${activityIndex}-conta`;
          const conta = this.contaAnswers[key];
          
          if (!conta || !conta.num1 || !conta.num2 || !conta.result) {
            return; // Ainda não preencheu tudo
          }
          
          // Obter valores corretos usando o método isContaFieldCorrect
          const correctValues = this.getContaCorrectValues(activityIndex);
          if (!correctValues) {
            // Se não conseguir determinar os valores corretos, usar validação padrão apenas do primeiro campo
            const fieldsToCheck = [0];
            let allFilled = true;
            fieldsToCheck.forEach((fieldIndex) => {
              const key = this.getInputKey(activityIndex, fieldIndex);
              const userAnswer = this.inputAnswers[key] || '';
              if (!userAnswer.trim()) {
                allFilled = false;
              }
            });
            
            if (!allFilled) {
              return;
            }
            
            // Validar apenas o primeiro campo (número)
            const field = activity.inputFields[0];
            const key = this.getInputKey(activityIndex, 0);
            const userAnswer = this.inputAnswers[key] || '';
            const correctValue = String(field.correctValue).trim().toLowerCase();
            const userValue = userAnswer.trim().toLowerCase();
            
            const allCorrect = userValue === correctValue;
            
            if (allCorrect && !this.completedActivities[activityIndex]) {
              this.completedActivities[activityIndex] = true;
              this.correctAnswers++;
              this.processActivityReward(activityIndex);
              this.checkAllActivitiesCompleted();
            } else if (!allCorrect && this.completedActivities[activityIndex]) {
              this.completedActivities[activityIndex] = false;
              this.correctAnswers--;
            } else if (!allCorrect && !this.completedActivities[activityIndex]) {
              this.wrongAnswers++;
              this.gameService.loseHeart();
              this.checkForBonusChallenge();
            }
            return;
          }
          
          const { correctNum1, correctNum2, correctResult } = correctValues;
          const userNum1 = conta.num1.trim();
          const userNum2 = conta.num2.trim();
          const userResult = conta.result.trim();
          
          // Verificar se é subtração ou divisão (não comutativas)
          const isSubtraction = this.mission.id === 2 && (activityIndex === 14 || activityIndex === 15 || activityIndex === 21 || activityIndex === 22 || activityIndex === 24 || activityIndex === 25);
          const isDivision = (this.mission.id === 3 || activityIndex === 9);
          
          let allCorrect: boolean;
          if (isSubtraction || isDivision) {
            // Subtração e divisão não são comutativas - ordem importa
            allCorrect = userNum1 === correctNum1 && userNum2 === correctNum2 && userResult === correctResult;
          } else {
            // Multiplicação é comutativa: a ordem dos fatores não altera o resultado
            // Aceita tanto "2 x 8 = 16" quanto "8 x 2 = 16"
            const isCorrectOrder = userNum1 === correctNum1 && userNum2 === correctNum2 && userResult === correctResult;
            const isCommutativeOrder = userNum1 === correctNum2 && userNum2 === correctNum1 && userResult === correctResult;
            allCorrect = isCorrectOrder || isCommutativeOrder;
          }
          
          if (allCorrect && !this.completedActivities[activityIndex]) {
            this.completedActivities[activityIndex] = true;
            this.correctAnswers++;
            this.processActivityReward(activityIndex);
            this.checkAllActivitiesCompleted();
          } else if (!allCorrect && this.completedActivities[activityIndex]) {
            this.completedActivities[activityIndex] = false;
            this.correctAnswers--;
          } else if (!allCorrect && !this.completedActivities[activityIndex]) {
            // Erro ao tentar completar - perde uma vida
            this.wrongAnswers++;
            this.gameService.loseHeart();
            this.checkForBonusChallenge();
          }
          return;
        }
        
        const fieldsToCheck = isSpecialCase ? [0] : null; // null significa verificar todos
        
        // Verificar se todos os campos relevantes estão preenchidos
        let allFilled = true;
        const fieldsToValidate = fieldsToCheck || activity.inputFields.map((_, idx) => idx);
        
        fieldsToValidate.forEach((fieldIndex) => {
          const key = this.getInputKey(activityIndex, fieldIndex);
          const userAnswer = this.inputAnswers[key] || '';
          if (!userAnswer.trim()) {
            allFilled = false;
          }
        });
        
        if (!allFilled) {
          return; // Ainda não preencheu tudo
        }
        
        let allCorrect = true;
        let hasError = false;
        fieldsToValidate.forEach((fieldIndex) => {
          const field = activity.inputFields?.[fieldIndex];
          if (!field) return;
          const key = this.getInputKey(activityIndex, fieldIndex);
          const userAnswer = this.inputAnswers[key] || '';
          const correctValue = String(field.correctValue).trim().toLowerCase();
          const userValue = userAnswer.trim().toLowerCase();
          
          if (userValue !== correctValue) {
            allCorrect = false;
            hasError = true;
          }
        });
        
        if (allCorrect && !this.completedActivities[activityIndex]) {
          this.completedActivities[activityIndex] = true;
          this.correctAnswers++;
          this.processActivityReward(activityIndex);
          this.checkAllActivitiesCompleted();
        } else if (!allCorrect && this.completedActivities[activityIndex]) {
          this.completedActivities[activityIndex] = false;
          this.correctAnswers--;
        } else if (hasError && !this.completedActivities[activityIndex]) {
          // Erro ao tentar completar - perde uma vida
          this.wrongAnswers++;
          this.gameService.loseHeart();
          this.checkForBonusChallenge();
        }
      }
    } else if (activity.type === 'cdu-operation' && activity.cduOperation) {
      const op = activity.cduOperation;
      const key = `${activityIndex}-cdu`;
      const keyNumber1 = `${activityIndex}-cdu-number1`;
      const keyNumber2 = `${activityIndex}-cdu-number2`;
      const keyOperator = `${activityIndex}-cdu-operator`;
      
      const userCDU = this.cduAnswers[key];
      const userCDU1 = this.cduNumber1Answers[keyNumber1];
      const userCDU2 = this.cduNumber2Answers[keyNumber2];
      const userOperator = this.cduOperatorAnswers[keyOperator];
      
      // Verificar se todos os campos estão preenchidos (operador, number1, number2 e resultado)
      const allFilled = userCDU && userCDU.centena && userCDU.dezena && userCDU.unidade &&
                        userCDU1 && userCDU1.centena && userCDU1.dezena && userCDU1.unidade &&
                        userCDU2 && userCDU2.centena && userCDU2.dezena && userCDU2.unidade &&
                        userOperator;
      
      if (allFilled) {
        // Verificar número 1
        const userCentena1 = parseInt(userCDU1.centena) || 0;
        const userDezena1 = parseInt(userCDU1.dezena) || 0;
        const userUnidade1 = parseInt(userCDU1.unidade) || 0;
        const userNumber1 = userCentena1 * 100 + userDezena1 * 10 + userUnidade1;
        
        // Verificar número 2
        const userCentena2 = parseInt(userCDU2.centena) || 0;
        const userDezena2 = parseInt(userCDU2.dezena) || 0;
        const userUnidade2 = parseInt(userCDU2.unidade) || 0;
        const userNumber2 = userCentena2 * 100 + userDezena2 * 10 + userUnidade2;
        
        // Verificar resultado
        const userCentena = parseInt(userCDU.centena) || 0;
        const userDezena = parseInt(userCDU.dezena) || 0;
        const userUnidade = parseInt(userCDU.unidade) || 0;
        const userAnswer = userCentena * 100 + userDezena * 10 + userUnidade;
        
        // Verificar se todos estão corretos (incluindo o operador)
        const number1Correct = userNumber1 === op.number1;
        const number2Correct = userNumber2 === op.number2;
        const operatorCorrect = userOperator === op.operation;
        const resultCorrect = userAnswer === op.correctAnswer;
        
        // Verificar carry (apenas para adição)
        let carryCorrect = true;
        if (op.operation === 'addition') {
          const carryKey = `${activityIndex}-cdu-carry`;
          const userCarry = this.cduCarryAnswers[carryKey];
          
          // Calcular carry correto
          const somaUnidade = userUnidade1 + userUnidade2;
          const carryDezenaCorreto = somaUnidade >= 10 ? '1' : '';
          const carryUnidade = somaUnidade >= 10 ? 1 : 0;
          const somaDezena = userDezena1 + userDezena2 + carryUnidade;
          const carryCentenaCorreto = somaDezena >= 10 ? '1' : '';
          
          if (userCarry) {
            const carryDezenaCorrect = userCarry.dezena === carryDezenaCorreto;
            const carryCentenaCorrect = userCarry.centena === carryCentenaCorreto;
            carryCorrect = carryDezenaCorrect && carryCentenaCorrect;
          } else {
            carryCorrect = carryDezenaCorreto === '' && carryCentenaCorreto === '';
          }
        }
        
        // Verificar borrow (apenas para subtração)
        let borrowCorrect = true;
        if (op.operation === 'subtraction') {
          const borrowKey = `${activityIndex}-cdu-borrow`;
          const userBorrow = this.cduBorrowAnswers[borrowKey];
          const correctBorrow = this.calculateCDUBorrow(activityIndex);
          
          if (correctBorrow) {
            if (userBorrow) {
              const borrowDezenaCorrect = userBorrow.dezena === correctBorrow.dezena;
              const borrowCentenaCorrect = userBorrow.centena === correctBorrow.centena;
              borrowCorrect = borrowDezenaCorrect && borrowCentenaCorrect;
            } else {
              borrowCorrect = correctBorrow.dezena === '' && correctBorrow.centena === '';
            }
          }
        }
        
        const allCorrect = number1Correct && number2Correct && operatorCorrect && resultCorrect && carryCorrect && borrowCorrect;
        
        if (allCorrect && !this.completedActivities[activityIndex]) {
          this.completedActivities[activityIndex] = true;
          this.correctAnswers++;
          this.processActivityReward(activityIndex);
          this.checkAllActivitiesCompleted();
        } else if (!allCorrect && this.completedActivities[activityIndex]) {
          this.completedActivities[activityIndex] = false;
          this.correctAnswers--;
        } else if (!allCorrect && !this.completedActivities[activityIndex]) {
          // Erro ao tentar completar - perde uma vida
          this.wrongAnswers++;
          this.gameService.loseHeart();
          this.checkForBonusChallenge();
        }
      }
    }
  }

  getCDUValue(activityIndex: number, position: 'centena' | 'dezena' | 'unidade'): string {
    const key = `${activityIndex}-cdu`;
    return this.cduAnswers[key]?.[position] || '';
  }

  setCDUValue(activityIndex: number, position: 'centena' | 'dezena' | 'unidade', value: string): void {
    const key = `${activityIndex}-cdu`;
    if (!this.cduAnswers[key]) {
      this.cduAnswers[key] = { centena: '', dezena: '', unidade: '' };
    }
    this.cduAnswers[key][position] = value;
    // O total será calculado automaticamente pelo getCDUTotalValue
    this.checkInputActivity(activityIndex);
  }

  getCDUTotalValue(activityIndex: number): string {
    const key = `${activityIndex}-cdu`;
    const userCDU = this.cduAnswers[key];
    if (!userCDU) return '';
    
    const centena = userCDU.centena || '0';
    const dezena = userCDU.dezena || '0';
    const unidade = userCDU.unidade || '0';
    
    const total = parseInt(centena) * 100 + parseInt(dezena) * 10 + parseInt(unidade);
    return total > 0 ? String(total) : '';
  }

  setCDUTotalValue(activityIndex: number, value: string): void {
    const key = `${activityIndex}-cdu`;
    if (!this.cduAnswers[key]) {
      this.cduAnswers[key] = { centena: '', dezena: '', unidade: '' };
    }
    
    // Se o valor estiver vazio, limpar todos os campos
    if (!value || value.trim() === '') {
      this.cduAnswers[key].centena = '';
      this.cduAnswers[key].dezena = '';
      this.cduAnswers[key].unidade = '';
      this.checkInputActivity(activityIndex);
      return;
    }
    
    // Converter o valor total em C D U
    const num = parseInt(value) || 0;
    const centena = Math.floor(num / 100);
    const dezena = Math.floor((num % 100) / 10);
    const unidade = num % 10;
    
    this.cduAnswers[key].centena = centena > 0 ? String(centena) : '';
    this.cduAnswers[key].dezena = dezena > 0 ? String(dezena) : '';
    this.cduAnswers[key].unidade = String(unidade);
    
    this.checkInputActivity(activityIndex);
  }

  isCDUCorrect(activityIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'cdu-operation' || !activity.cduOperation) return null;
    
    const key = `${activityIndex}-cdu`;
    const userCDU = this.cduAnswers[key];
    if (!userCDU || !userCDU.centena || !userCDU.dezena || !userCDU.unidade) return null;
    
    const userCentena = parseInt(userCDU.centena) || 0;
    const userDezena = parseInt(userCDU.dezena) || 0;
    const userUnidade = parseInt(userCDU.unidade) || 0;
    const userAnswer = userCentena * 100 + userDezena * 10 + userUnidade;
    
    return userAnswer === activity.cduOperation.correctAnswer;
  }

  // Métodos para o primeiro número (number1)
  getCDUNumber1Value(activityIndex: number, position: 'centena' | 'dezena' | 'unidade'): string {
    const key = `${activityIndex}-cdu-number1`;
    return this.cduNumber1Answers[key]?.[position] || '';
  }

  setCDUNumber1Value(activityIndex: number, position: 'centena' | 'dezena' | 'unidade', value: string): void {
    const key = `${activityIndex}-cdu-number1`;
    if (!this.cduNumber1Answers[key]) {
      this.cduNumber1Answers[key] = { centena: '', dezena: '', unidade: '' };
    }
    this.cduNumber1Answers[key][position] = value;
    this.checkInputActivity(activityIndex);
  }

  isCDUNumber1Correct(activityIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'cdu-operation' || !activity.cduOperation) return null;
    
    const key = `${activityIndex}-cdu-number1`;
    const userCDU = this.cduNumber1Answers[key];
    if (!userCDU || !userCDU.centena || !userCDU.dezena || !userCDU.unidade) return null;
    
    const userCentena = parseInt(userCDU.centena) || 0;
    const userDezena = parseInt(userCDU.dezena) || 0;
    const userUnidade = parseInt(userCDU.unidade) || 0;
    const userAnswer = userCentena * 100 + userDezena * 10 + userUnidade;
    
    return userAnswer === activity.cduOperation.number1;
  }

  // Métodos para o segundo número (number2)
  getCDUNumber2Value(activityIndex: number, position: 'centena' | 'dezena' | 'unidade'): string {
    const key = `${activityIndex}-cdu-number2`;
    return this.cduNumber2Answers[key]?.[position] || '';
  }

  setCDUNumber2Value(activityIndex: number, position: 'centena' | 'dezena' | 'unidade', value: string): void {
    const key = `${activityIndex}-cdu-number2`;
    if (!this.cduNumber2Answers[key]) {
      this.cduNumber2Answers[key] = { centena: '', dezena: '', unidade: '' };
    }
    this.cduNumber2Answers[key][position] = value;
    this.checkInputActivity(activityIndex);
  }

  isCDUNumber2Correct(activityIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'cdu-operation' || !activity.cduOperation) return null;
    
    const key = `${activityIndex}-cdu-number2`;
    const userCDU = this.cduNumber2Answers[key];
    if (!userCDU || !userCDU.centena || !userCDU.dezena || !userCDU.unidade) return null;
    
    const userCentena = parseInt(userCDU.centena) || 0;
    const userDezena = parseInt(userCDU.dezena) || 0;
    const userUnidade = parseInt(userCDU.unidade) || 0;
    const userAnswer = userCentena * 100 + userDezena * 10 + userUnidade;
    
    return userAnswer === activity.cduOperation.number2;
  }

  // Métodos para o operador
  getCDUOperator(activityIndex: number): string {
    const key = `${activityIndex}-cdu-operator`;
    return this.cduOperatorAnswers[key] || '';
  }

  setCDUOperator(activityIndex: number, operator: 'addition' | 'subtraction' | 'multiplication' | 'division'): void {
    const key = `${activityIndex}-cdu-operator`;
    this.cduOperatorAnswers[key] = operator;
    this.checkInputActivity(activityIndex);
  }

  isCDUOperatorCorrect(activityIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'cdu-operation' || !activity.cduOperation) return null;
    
    const key = `${activityIndex}-cdu-operator`;
    const userOperator = this.cduOperatorAnswers[key];
    if (!userOperator) return null;
    
    return userOperator === activity.cduOperation.operation;
  }

  getOperatorSymbol(operator: string): string {
    switch (operator) {
      case 'addition': return '+';
      case 'subtraction': return '-';
      case 'multiplication': return '×';
      case 'division': return '÷';
      default: return '';
    }
  }

  // Obter o valor de "vai um" (carry) que o Anthony digitou
  getCDUCarry(activityIndex: number, position: 'centena' | 'dezena'): string {
    const key = `${activityIndex}-cdu-carry`;
    return this.cduCarryAnswers[key]?.[position] || '';
  }

  // Definir o valor de "vai um" (carry) que o Anthony digitou
  setCDUCarry(activityIndex: number, position: 'centena' | 'dezena', value: string): void {
    const key = `${activityIndex}-cdu-carry`;
    if (!this.cduCarryAnswers[key]) {
      this.cduCarryAnswers[key] = { centena: '', dezena: '' };
    }
    this.cduCarryAnswers[key][position] = value;
    this.checkInputActivity(activityIndex);
  }

  // Verificar se o "vai um" (carry) está correto
  isCDUCarryCorrect(activityIndex: number, position: 'centena' | 'dezena'): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'cdu-operation' || !activity.cduOperation) return null;
    
    // Só verificar carry para adição
    if (activity.cduOperation.operation !== 'addition') return null;
    
    const key1 = `${activityIndex}-cdu-number1`;
    const key2 = `${activityIndex}-cdu-number2`;
    const userCDU1 = this.cduNumber1Answers[key1];
    const userCDU2 = this.cduNumber2Answers[key2];
    
    if (!userCDU1 || !userCDU2) return null;
    
    const num1 = {
      centena: parseInt(userCDU1.centena) || 0,
      dezena: parseInt(userCDU1.dezena) || 0,
      unidade: parseInt(userCDU1.unidade) || 0
    };
    
    const num2 = {
      centena: parseInt(userCDU2.centena) || 0,
      dezena: parseInt(userCDU2.dezena) || 0,
      unidade: parseInt(userCDU2.unidade) || 0
    };
    
    const key = `${activityIndex}-cdu-carry`;
    const userCarry = this.cduCarryAnswers[key];
    if (!userCarry || !userCarry[position]) return null;
    
    // Calcular carry correto da unidade para dezena
    if (position === 'dezena') {
      const somaUnidade = num1.unidade + num2.unidade;
      const carryCorreto = somaUnidade >= 10 ? '1' : '';
      return userCarry.dezena === carryCorreto;
    }
    
    // Calcular carry correto da dezena para centena
    if (position === 'centena') {
      const somaUnidade = num1.unidade + num2.unidade;
      const carryUnidade = somaUnidade >= 10 ? 1 : 0;
      const somaDezena = num1.dezena + num2.dezena + carryUnidade;
      const carryCorreto = somaDezena >= 10 ? '1' : '';
      return userCarry.centena === carryCorreto;
    }
    
    return null;
  }

  // Métodos para "emprestar" (borrow) na subtração
  getCDUBorrow(activityIndex: number, position: 'centena' | 'dezena'): string {
    const key = `${activityIndex}-cdu-borrow`;
    return this.cduBorrowAnswers[key]?.[position] || '';
  }

  setCDUBorrow(activityIndex: number, position: 'centena' | 'dezena', value: string): void {
    const key = `${activityIndex}-cdu-borrow`;
    if (!this.cduBorrowAnswers[key]) {
      this.cduBorrowAnswers[key] = { centena: '', dezena: '' };
    }
    this.cduBorrowAnswers[key][position] = value;
    this.checkInputActivity(activityIndex);
  }

  // Calcular se precisa emprestar e qual o valor correto
  calculateCDUBorrow(activityIndex: number): { dezena: string; centena: string } | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'cdu-operation' || !activity.cduOperation) return null;
    if (activity.cduOperation.operation !== 'subtraction') return null;

    const key1 = `${activityIndex}-cdu-number1`;
    const key2 = `${activityIndex}-cdu-number2`;
    const userCDU1 = this.cduNumber1Answers[key1];
    const userCDU2 = this.cduNumber2Answers[key2];

    if (!userCDU1 || !userCDU2) return null;

    const num1 = {
      centena: parseInt(userCDU1.centena) || 0,
      dezena: parseInt(userCDU1.dezena) || 0,
      unidade: parseInt(userCDU1.unidade) || 0
    };

    const num2 = {
      centena: parseInt(userCDU2.centena) || 0,
      dezena: parseInt(userCDU2.dezena) || 0,
      unidade: parseInt(userCDU2.unidade) || 0
    };

    let dezenaBorrow = '';
    let centenaBorrow = '';

    // Verificar se precisa emprestar na unidade
    if (num1.unidade < num2.unidade) {
      // Precisa emprestar da dezena para a unidade
      dezenaBorrow = '1';
      
      // Se a dezena é 0 ou menor que 1 (após considerar que vai emprestar), precisa emprestar da centena
      if (num1.dezena === 0) {
        centenaBorrow = '1';
      }
    }
    
    // Verificar se precisa emprestar na dezena (considerando que pode ter emprestado para unidade)
    const dezenaAposEmprestimo = num1.dezena - (dezenaBorrow === '1' ? 1 : 0);
    if (dezenaAposEmprestimo < num2.dezena) {
      // Precisa emprestar da centena para a dezena
      centenaBorrow = '1';
    }

    return { dezena: dezenaBorrow, centena: centenaBorrow };
  }

  isCDUBorrowCorrect(activityIndex: number, position: 'centena' | 'dezena'): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'cdu-operation' || !activity.cduOperation) return null;
    if (activity.cduOperation.operation !== 'subtraction') return null;

    const correctBorrow = this.calculateCDUBorrow(activityIndex);
    if (!correctBorrow) return null;

    const key = `${activityIndex}-cdu-borrow`;
    const userBorrow = this.cduBorrowAnswers[key];
    if (!userBorrow || !userBorrow[position]) return null;

    return userBorrow[position] === correctBorrow[position];
  }

  // Métodos para seleção de sorvetes
  getIceCreamSelections(activityIndex: number): boolean[] {
    const key = `${activityIndex}-ice-cream`;
    if (!this.iceCreamSelections[key]) {
      if (!this.mission) return [];
      const activity = this.mission.activities[activityIndex];
      if (activity.type !== 'ice-cream-selection' || !activity.iceCreamSelection) return [];
      this.iceCreamSelections[key] = new Array(activity.iceCreamSelection.totalIceCreams).fill(false);
    }
    return this.iceCreamSelections[key];
  }

  toggleIceCream(activityIndex: number, index: number): void {
    if (!this.mission) return;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'ice-cream-selection' || !activity.iceCreamSelection) return;
    
    const key = `${activityIndex}-ice-cream`;
    if (!this.iceCreamSelections[key]) {
      this.iceCreamSelections[key] = new Array(activity.iceCreamSelection.totalIceCreams).fill(false);
    }
    
    const currentSelections = this.iceCreamSelections[key].filter(s => s).length;
    const isSelected = this.iceCreamSelections[key][index];
    
    // Se já tem 12 selecionados e está tentando selecionar mais, não permite
    // Se está desmarcando, sempre permite
    if (!isSelected && currentSelections >= activity.iceCreamSelection.targetCount) {
      return;
    }
    
    this.iceCreamSelections[key][index] = !isSelected;
    this.checkInputActivity(activityIndex);
  }

  isIceCreamSelected(activityIndex: number, index: number): boolean {
    const selections = this.getIceCreamSelections(activityIndex);
    return selections[index] || false;
  }

  getSelectedIceCreamCount(activityIndex: number): number {
    const selections = this.getIceCreamSelections(activityIndex);
    return selections.filter(s => s).length;
  }

  isIceCreamSelectionCorrect(activityIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'ice-cream-selection' || !activity.iceCreamSelection) return null;
    
    const selectedCount = this.getSelectedIceCreamCount(activityIndex);
    return selectedCount === activity.iceCreamSelection.targetCount;
  }

  isInputFieldCorrect(activityIndex: number, fieldIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if ((activity.type !== 'fill-blank' && activity.type !== 'math-input') || !activity.inputFields) return null;
    
    const field = activity.inputFields[fieldIndex];
    if (!field) return null;
    
    const key = this.getInputKey(activityIndex, fieldIndex);
    const userAnswer = this.inputAnswers[key] || '';
    if (!userAnswer) return null;
    
    const correctValue = String(field.correctValue).trim().toLowerCase();
    const userValue = userAnswer.trim().toLowerCase();
    
    return userValue === correctValue;
  }

  getCDUDisplay(number: number, position: number): string {
    const str = String(number).padStart(3, '0');
    return str[position] || '0';
  }

  // Métodos para Visual Multiplication
  checkVisualMultiplication(activityIndex: number): void {
    if (!this.mission) return;
    
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'visual-multiplication' || !activity.visualMultiplication) return;
    
    const vm = activity.visualMultiplication;
    const key = `${activityIndex}-visual-conta`;
    const userConta = this.visualMultiplicationContaAnswers[key];
    
    // Verificar se todos os campos estão preenchidos
    if (!userConta || !userConta[0] || !userConta[1] || !userConta[2]) {
      return; // Ainda não preencheu tudo
    }
    
    // Construir a resposta do usuário
    const userAnswer1 = `${userConta[0]} x ${userConta[1]} = ${userConta[2]}`;
    const userAnswer2 = `${userConta[1]} x ${userConta[0]} = ${userConta[2]}`;
    
    // Verificar se a resposta está nas respostas corretas
    const isCorrect = vm.correctAnswers.some(correct => {
      const normalizedCorrect = correct.trim().toLowerCase();
      return normalizedCorrect === userAnswer1.trim().toLowerCase() || 
             normalizedCorrect === userAnswer2.trim().toLowerCase();
    });
    
    if (isCorrect && !this.completedActivities[activityIndex]) {
      this.completedActivities[activityIndex] = true;
      this.correctAnswers++;
      this.processActivityReward(activityIndex);
      this.checkAllActivitiesCompleted();
    } else if (!isCorrect && this.completedActivities[activityIndex]) {
      this.completedActivities[activityIndex] = false;
      this.correctAnswers--;
    } else if (!isCorrect && !this.completedActivities[activityIndex]) {
      // Erro ao tentar completar - perde uma vida
      this.wrongAnswers++;
      this.gameService.loseHeart();
      this.checkForBonusChallenge();
    }
  }

  getVisualMultiplicationValue(activityIndex: number, fieldIndex: number): string {
    return this.getInputValue(activityIndex, fieldIndex);
  }

  setVisualMultiplicationValue(activityIndex: number, fieldIndex: number, value: string): void {
    this.setInputValue(activityIndex, fieldIndex, value);
    // Verificar após atualizar
    setTimeout(() => {
      this.checkVisualMultiplication(activityIndex);
    }, 100);
  }

  isVisualMultiplicationCorrect(activityIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'visual-multiplication' || !activity.visualMultiplication) return null;
    
    const vm = activity.visualMultiplication;
    const key = `${activityIndex}-visual-conta`;
    const userConta = this.visualMultiplicationContaAnswers[key];
    
    // Verificar se todos os campos estão preenchidos
    if (!userConta || !userConta[0] || !userConta[1] || !userConta[2]) return null;
    
    // Construir a resposta do usuário
    const userAnswer1 = `${userConta[0]} x ${userConta[1]} = ${userConta[2]}`;
    const userAnswer2 = `${userConta[1]} x ${userConta[0]} = ${userConta[2]}`;
    
    const isCorrect = vm.correctAnswers.some(correct => {
      const normalizedCorrect = correct.trim().toLowerCase();
      return normalizedCorrect === userAnswer1.trim().toLowerCase() || 
             normalizedCorrect === userAnswer2.trim().toLowerCase();
    });
    
    return isCorrect;
  }

  // Métodos para Visual Multiplication com campos separados (Conta: __ x __ = __)
  getVisualMultiplicationContaFieldValue(activityIndex: number, fieldIndex: number): string {
    const key = `${activityIndex}-visual-conta`;
    return this.visualMultiplicationContaAnswers[key]?.[fieldIndex] || '';
  }

  setVisualMultiplicationContaFieldValue(activityIndex: number, fieldIndex: number, value: string): void {
    const key = `${activityIndex}-visual-conta`;
    if (!this.visualMultiplicationContaAnswers[key]) {
      this.visualMultiplicationContaAnswers[key] = ['', '', ''];
    }
    this.visualMultiplicationContaAnswers[key][fieldIndex] = value;
    this.checkVisualMultiplication(activityIndex);
  }

  isVisualMultiplicationContaFieldCorrect(activityIndex: number, fieldIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'visual-multiplication' || !activity.visualMultiplication) return null;

    const key = `${activityIndex}-visual-conta`;
    const userConta = this.visualMultiplicationContaAnswers[key];
    if (!userConta || !userConta[0] || !userConta[1] || !userConta[2]) return null;

    const userAnswer = `${userConta[0]} x ${userConta[1]} = ${userConta[2]}`;
    const vm = activity.visualMultiplication;

    // Verificar propriedade comutativa
    const userAnswer2 = `${userConta[1]} x ${userConta[0]} = ${userConta[2]}`;

    const isCorrect = vm.correctAnswers.some(correct => {
      const normalizedCorrect = correct.trim().toLowerCase();
      return normalizedCorrect === userAnswer.trim().toLowerCase() || 
             normalizedCorrect === userAnswer2.trim().toLowerCase();
    });

    if (isCorrect) {
      return true;
    } else if (userConta[0] && userConta[1] && userConta[2]) {
      return false;
    }
    return null;
  }

  isVisualMultiplicationContaComplete(activityIndex: number): boolean | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'visual-multiplication' || !activity.visualMultiplication) return null;

    const key = `${activityIndex}-visual-conta`;
    const userConta = this.visualMultiplicationContaAnswers[key];
    if (!userConta || !userConta[0] || !userConta[1] || !userConta[2]) return null;

    return this.isVisualMultiplicationCorrect(activityIndex);
  }

  getArray(length: number): number[] {
    return Array(length).fill(0).map((_, i) => i);
  }

  getEmojiNumber(num: number): string {
    const emojiNumbers: { [key: number]: string } = {
      1: '1️⃣',
      2: '2️⃣',
      3: '3️⃣',
      4: '4️⃣',
      5: '5️⃣',
      6: '6️⃣',
      7: '7️⃣',
      8: '8️⃣',
      9: '9️⃣',
      10: '🔟'
    };
    return emojiNumbers[num] || num.toString();
  }

  // Método para filtrar apenas números
  filterNumbers(value: string): string {
    return value.replace(/[^0-9]/g, '');
  }

  // Método para calcular raiz quadrada (para usar no template)
  sqrt(value: number): number {
    return Math.sqrt(value);
  }

  // Métodos para C D U nos Desafios 1, 2, 3 e 4 (math-input especial)
  getCDUFromTotal(activityIndex: number, position: 'centena' | 'dezena' | 'unidade'): string {
    if (activityIndex !== 0 && activityIndex !== 1 && activityIndex !== 2 && activityIndex !== 3) return '';
    
    const totalValue = this.getInputValue(activityIndex, 0);
    if (!totalValue) return '';
    
    const num = parseInt(totalValue) || 0;
    if (num === 0) return '';
    
    if (position === 'centena') {
      return Math.floor(num / 100) > 0 ? String(Math.floor(num / 100)) : '';
    } else if (position === 'dezena') {
      return Math.floor((num % 100) / 10) > 0 ? String(Math.floor((num % 100) / 10)) : '';
    } else {
      return String(num % 10);
    }
  }

  setCDUFromTotal(activityIndex: number, position: 'centena' | 'dezena' | 'unidade', value: string): void {
    if (activityIndex !== 0 && activityIndex !== 1 && activityIndex !== 2 && activityIndex !== 3) return;
    
    const key = `${activityIndex}-cdu-total`;
    if (!this.cduAnswers[key]) {
      this.cduAnswers[key] = { centena: '', dezena: '', unidade: '' };
    }
    
    this.cduAnswers[key][position] = value;
    
    // Recalcular o total a partir dos valores C D U
    const centena = parseInt(this.cduAnswers[key].centena || '0') || 0;
    const dezena = parseInt(this.cduAnswers[key].dezena || '0') || 0;
    const unidade = parseInt(this.cduAnswers[key].unidade || '0') || 0;
    const total = centena * 100 + dezena * 10 + unidade;
    
    // Atualizar o campo de total
    if (total > 0) {
      this.setInputValue(activityIndex, 0, String(total));
    } else {
      this.setInputValue(activityIndex, 0, '');
    }
  }

  // Métodos para campos da conta (Desafios 1 até 22, 28-33, 36, 41-45, 48, 51-55, 58 e 63-64)
  getContaFieldValue(activityIndex: number, fieldIndex: number): string {
    if ((activityIndex < 0 || activityIndex > 21) && (activityIndex < 27 || activityIndex > 32) && activityIndex !== 35 && (activityIndex < 40 || activityIndex > 44) && activityIndex !== 47 && (activityIndex < 50 || activityIndex > 54) && activityIndex !== 57 && (activityIndex < 62 || activityIndex > 63)) return '';
    const key = `${activityIndex}-conta`;
    const conta = this.contaAnswers[key];
    if (!conta) return '';
    
    if (fieldIndex === 0) return conta.num1 || '';
    if (fieldIndex === 1) return conta.num2 || '';
    if (fieldIndex === 2) return conta.result || '';
    return '';
  }

  setContaFieldValue(activityIndex: number, fieldIndex: number, value: string): void {
    if ((activityIndex < 0 || activityIndex > 21) && (activityIndex < 27 || activityIndex > 32) && activityIndex !== 35 && (activityIndex < 40 || activityIndex > 44) && activityIndex !== 47 && (activityIndex < 50 || activityIndex > 54) && activityIndex !== 57 && (activityIndex < 62 || activityIndex > 63)) return;
    
    const key = `${activityIndex}-conta`;
    if (!this.contaAnswers[key]) {
      this.contaAnswers[key] = { num1: '', num2: '', result: '' };
    }
    
    if (fieldIndex === 0) {
      this.contaAnswers[key].num1 = value;
    } else if (fieldIndex === 1) {
      this.contaAnswers[key].num2 = value;
    } else if (fieldIndex === 2) {
      this.contaAnswers[key].result = value;
    }
    
    // Atualizar o campo de conta completo no inputAnswers
    const num1 = this.contaAnswers[key].num1 || '';
    const num2 = this.contaAnswers[key].num2 || '';
    const result = this.contaAnswers[key].result || '';
    
    if (num1 && num2 && result) {
      this.setInputValue(activityIndex, 1, `${num1} x ${num2} = ${result}`);
    } else {
      this.setInputValue(activityIndex, 1, '');
    }
    
    // Para Desafios 1 e 2, validar diretamente usando checkInputActivity
    if (activityIndex === 0 || activityIndex === 1) {
      setTimeout(() => {
        this.checkInputActivity(activityIndex);
      }, 100);
    }
  }

  getContaCorrectValues(activityIndex: number): { correctNum1: string; correctNum2: string; correctResult: string } | null {
    if (!this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'math-input' || !activity.inputFields || activity.inputFields.length < 2) return null;
    
    // Determinar valores corretos baseados no activityIndex ou na instrução
    let correctNum1 = '';
    let correctNum2 = '';
    let correctResult = '';
    
    // Usar a mesma lógica do isContaFieldCorrect
    const result = this.getContaCorrectValuesFromIndex(activityIndex);
    if (result && result.correctNum1 && result.correctNum2 && result.correctResult) {
      return result;
    }
    
    return null;
  }

  getContaCorrectValuesFromIndex(activityIndex: number): { correctNum1: string; correctNum2: string; correctResult: string } | null {
    if (!this.mission) return null;
    
    let correctNum1 = '';
    let correctNum2 = '';
    let correctResult = '';
    
    // Para Desafios 1 e 2 (rodas de carros)
    if (activityIndex === 0) {
      // Desafio 1: 1 x 4 = 4
      correctNum1 = '1';
      correctNum2 = '4';
      correctResult = '4';
    } else if (activityIndex === 1) {
      // Desafio 2: 2 x 4 = 8
      correctNum1 = '2';
      correctNum2 = '4';
      correctResult = '8';
    } else if (activityIndex === 2) {
      // Desafio 3: 3 x 4 = 12
      correctNum1 = '3';
      correctNum2 = '4';
      correctResult = '12';
    } else if (activityIndex === 3) {
      // Desafio 4: 4 x 4 = 16
      correctNum1 = '4';
      correctNum2 = '4';
      correctResult = '16';
    } else if (activityIndex === 4) {
      // Desafio 5: 5 x 4 = 20
      correctNum1 = '5';
      correctNum2 = '4';
      correctResult = '20';
    } else if (activityIndex === 5) {
      // Desafio 6: 6 x 4 = 24
      correctNum1 = '6';
      correctNum2 = '4';
      correctResult = '24';
    } else if (activityIndex === 6) {
      // Desafio 7: 2 x 5 = 10
      correctNum1 = '2';
      correctNum2 = '5';
      correctResult = '10';
    } else if (activityIndex === 7) {
      // Desafio 8: 3 x 5 = 15
      correctNum1 = '3';
      correctNum2 = '5';
      correctResult = '15';
    } else if (activityIndex === 8) {
      // Desafio 9: 4 x 5 = 20
      correctNum1 = '4';
      correctNum2 = '5';
      correctResult = '20';
    } else if (activityIndex === 9) {
      // Desafio 10: 30 ÷ 5 = 6 (divisão)
      correctNum1 = '30';
      correctNum2 = '5';
      correctResult = '6';
    } else if (this.mission.id === 2 && activityIndex === 14) {
      // Missão 2, Desafio 15: 1000 - 800 = 200 (subtração)
      correctNum1 = '1000';
      correctNum2 = '800';
      correctResult = '200';
    } else if (this.mission.id === 2 && activityIndex === 15) {
      // Missão 2, Desafio 16: 1000 - 400 = 600 (subtração)
      correctNum1 = '1000';
      correctNum2 = '400';
      correctResult = '600';
    } else if (this.mission.id === 2 && activityIndex === 21) {
      // Missão 2, Desafio 9 (duplicado): 1000 - 700 = 300 (subtração)
      correctNum1 = '1000';
      correctNum2 = '700';
      correctResult = '300';
    } else if (this.mission.id === 2 && activityIndex === 22) {
      // Missão 2, Desafio 10 (duplicado): 1000 - 500 = 500 (subtração)
      correctNum1 = '1000';
      correctNum2 = '500';
      correctResult = '500';
    } else if (this.mission.id === 2 && activityIndex === 24) {
      // Missão 2, Desafio 12 (duplicado): 1000 - 950 = 50 (subtração)
      correctNum1 = '1000';
      correctNum2 = '950';
      correctResult = '50';
    } else if (this.mission.id === 2 && activityIndex === 25) {
      // Missão 2, Desafio 13 (duplicado): 1000 - 500 = 500 (subtração)
      correctNum1 = '1000';
      correctNum2 = '500';
      correctResult = '500';
    } else if (activityIndex === 10) {
      // Desafio 11: 2 x 9 = 18
      correctNum1 = '2';
      correctNum2 = '9';
      correctResult = '18';
    } else if (activityIndex === 11 || activityIndex === 12) {
      // Desafio 12 e 13: Não tem multiplicação clara, não validar
      return null;
    } else if (activityIndex === 13) {
      // Desafio 14: 6 x 3 = 18
      correctNum1 = '6';
      correctNum2 = '3';
      correctResult = '18';
    } else if (this.mission.id === 1 && (activityIndex === 14 || activityIndex === 15)) {
      // Missão 1, Desafio 15 e 16: Não tem multiplicação clara, não validar
      return null;
    } else if (activityIndex === 17) {
      // Desafio 18: 10 x 2 = 20
      correctNum1 = '10';
      correctNum2 = '2';
      correctResult = '20';
    } else if (activityIndex === 18) {
      // Desafio 19: 3 x 5 = 15
      correctNum1 = '3';
      correctNum2 = '5';
      correctResult = '15';
    } else if (activityIndex === 19) {
      // Desafio 20: 1 x 2 = 2
      correctNum1 = '1';
      correctNum2 = '2';
      correctResult = '2';
    } else if (activityIndex === 20) {
      // Desafio 21: 2 x 2 = 4
      correctNum1 = '2';
      correctNum2 = '2';
      correctResult = '4';
    } else if (activityIndex === 21) {
      // Desafio 22: 3 x 2 = 6
      correctNum1 = '3';
      correctNum2 = '2';
      correctResult = '6';
    } else if (activityIndex === 27) {
      // Desafio 28: 8 x 2 = 16
      correctNum1 = '8';
      correctNum2 = '2';
      correctResult = '16';
    } else if (activityIndex === 28) {
      // Desafio 29: 5 x 2 = 10
      correctNum1 = '5';
      correctNum2 = '2';
      correctResult = '10';
    } else if (activityIndex === 29) {
      // Desafio 30: 10 x 2 = 20
      correctNum1 = '10';
      correctNum2 = '2';
      correctResult = '20';
    } else if (activityIndex === 30) {
      // Desafio 31: 1 x 3 = 3
      correctNum1 = '1';
      correctNum2 = '3';
      correctResult = '3';
    } else if (activityIndex === 31) {
      // Desafio 32: 2 x 3 = 6
      correctNum1 = '2';
      correctNum2 = '3';
      correctResult = '6';
    } else if (activityIndex === 32) {
      // Desafio 33: 3 x 3 = 9
      correctNum1 = '3';
      correctNum2 = '3';
      correctResult = '9';
    } else if (activityIndex === 35) {
      // Desafio 36: 4 x 3 = 12
      correctNum1 = '4';
      correctNum2 = '3';
      correctResult = '12';
    } else if (activityIndex === 40) {
      // Desafio 41: 5 x 3 = 15
      correctNum1 = '5';
      correctNum2 = '3';
      correctResult = '15';
    } else if (activityIndex === 41) {
      // Desafio 42: 10 x 3 = 30
      correctNum1 = '10';
      correctNum2 = '3';
      correctResult = '30';
    } else if (activityIndex === 42) {
      // Desafio 43: 1 x 4 = 4
      correctNum1 = '1';
      correctNum2 = '4';
      correctResult = '4';
    } else if (activityIndex === 43) {
      // Desafio 44: 2 x 4 = 8
      correctNum1 = '2';
      correctNum2 = '4';
      correctResult = '8';
    } else if (activityIndex === 44) {
      // Desafio 45: 3 x 4 = 12
      correctNum1 = '3';
      correctNum2 = '4';
      correctResult = '12';
    } else if (activityIndex === 47) {
      // Desafio 48: 4 x 4 = 16
      correctNum1 = '4';
      correctNum2 = '4';
      correctResult = '16';
    } else if (activityIndex === 50) {
      // Desafio 51: 5 x 4 = 20
      correctNum1 = '5';
      correctNum2 = '4';
      correctResult = '20';
    } else if (activityIndex === 51) {
      // Desafio 52: 11 x 4 = 44
      correctNum1 = '11';
      correctNum2 = '4';
      correctResult = '44';
    } else if (activityIndex === 52) {
      // Desafio 53: 1 x 5 = 5
      correctNum1 = '1';
      correctNum2 = '5';
      correctResult = '5';
    } else if (activityIndex === 53) {
      // Desafio 54: 2 x 5 = 10
      correctNum1 = '2';
      correctNum2 = '5';
      correctResult = '10';
    } else if (activityIndex === 54) {
      // Desafio 55: 3 x 5 = 15
      correctNum1 = '3';
      correctNum2 = '5';
      correctResult = '15';
    } else if (activityIndex === 57) {
      // Desafio 58: 4 x 5 = 20
      correctNum1 = '4';
      correctNum2 = '5';
      correctResult = '20';
    } else if (activityIndex === 62) {
      // Desafio 63: 5 x 5 = 25
      correctNum1 = '5';
      correctNum2 = '5';
      correctResult = '25';
    } else if (activityIndex === 63) {
      // Desafio 64: 10 x 5 = 50
      correctNum1 = '10';
      correctNum2 = '5';
      correctResult = '50';
    } else {
      // Para outros desafios, tentar extrair do correctValue
      const correctAnswer = activity.inputFields[1].correctValue as string;
      const parts = correctAnswer.split(' x ');
      if (parts.length !== 2) return null;
      
      const [num1Part, num2Part] = parts;
      const num2Parts = num2Part.split(' = ');
      if (num2Parts.length !== 2) return null;
      
      correctNum1 = num1Part.trim();
      correctNum2 = num2Parts[0].trim();
      correctResult = num2Parts[1].trim();
    }
    
    // Retornar os valores corretos se todos foram preenchidos
    if (correctNum1 && correctNum2 && correctResult) {
      return { correctNum1, correctNum2, correctResult };
    }
    
    return null;
  }

  isContaFieldCorrect(activityIndex: number, fieldIndex: number): boolean | null {
    if (((activityIndex < 0 || activityIndex > 21) && (activityIndex < 27 || activityIndex > 32) && activityIndex !== 35 && (activityIndex < 40 || activityIndex > 44) && activityIndex !== 47 && (activityIndex < 50 || activityIndex > 54) && activityIndex !== 57 && (activityIndex < 62 || activityIndex > 63)) || !this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'math-input' || !activity.inputFields || activity.inputFields.length < 2) return null;
    
    // Obter valores corretos
    const correctValues = this.getContaCorrectValuesFromIndex(activityIndex);
    if (!correctValues) return null;
    
    const { correctNum1, correctNum2, correctResult } = correctValues;
    
    const key = `${activityIndex}-conta`;
    const conta = this.contaAnswers[key];
    if (!conta) return null;
    
    // Verificar se todos os campos estão preenchidos
    if (!conta.num1 || !conta.num2 || !conta.result) return null;
    
    // Verificar se a conta está correta
    const userNum1 = conta.num1.trim();
    const userNum2 = conta.num2.trim();
    const userResult = conta.result.trim();
    
    // Verificar se é subtração ou divisão (não comutativas)
    const isSubtraction = this.mission.id === 2 && (activityIndex === 14 || activityIndex === 15 || activityIndex === 21 || activityIndex === 22 || activityIndex === 24 || activityIndex === 25);
    const isDivision = (this.mission.id === 3 || activityIndex === 9);
    
    let isCorrect: boolean;
    if (isSubtraction || isDivision) {
      // Subtração e divisão não são comutativas - ordem importa
      isCorrect = userNum1 === correctNum1 && userNum2 === correctNum2 && userResult === correctResult;
    } else {
      // Multiplicação é comutativa: a ordem dos fatores não altera o resultado
      // Aceita tanto "2 x 8 = 16" quanto "8 x 2 = 16"
      const isCorrectOrder = userNum1 === correctNum1 && userNum2 === correctNum2 && userResult === correctResult;
      const isCommutativeOrder = userNum1 === correctNum2 && userNum2 === correctNum1 && userResult === correctResult;
      isCorrect = isCorrectOrder || isCommutativeOrder;
    }
    
    if (fieldIndex === 0) {
      // Primeiro número
      if (isSubtraction || isDivision) {
        return isCorrect ? (userNum1 === correctNum1) : false;
      } else {
        // Multiplicação: pode ser qualquer um dos dois corretos
        return isCorrect ? (userNum1 === correctNum1 || userNum1 === correctNum2) : false;
      }
    } else if (fieldIndex === 1) {
      // Segundo número
      if (isSubtraction || isDivision) {
        return isCorrect ? (userNum2 === correctNum2) : false;
      } else {
        // Multiplicação: deve ser o outro número correto
        return isCorrect ? (userNum2 === correctNum1 || userNum2 === correctNum2) : false;
      }
    } else if (fieldIndex === 2) {
      // Resultado deve ser sempre o mesmo
      return userResult === correctResult;
    }
    
    return null;
  }

  isContaComplete(activityIndex: number): boolean | null {
    if (((activityIndex < 0 || activityIndex > 21) && (activityIndex < 27 || activityIndex > 32) && activityIndex !== 35 && (activityIndex < 40 || activityIndex > 44) && activityIndex !== 47 && (activityIndex < 50 || activityIndex > 54) && activityIndex !== 57 && (activityIndex < 62 || activityIndex > 63)) || !this.mission) return null;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'math-input' || !activity.inputFields || activity.inputFields.length < 2) return null;
    
    const key = `${activityIndex}-conta`;
    const conta = this.contaAnswers[key];
    if (!conta || !conta.num1 || !conta.num2 || !conta.result) return null;
    
    return this.isInputFieldCorrect(activityIndex, 1);
  }

  // Verificar se a questão termina com "= ?" e precisa de input inline
  hasInlineEqualsQuestion(activityIndex: number): boolean {
    if (!this.mission || activityIndex < 0 || activityIndex >= this.mission.activities.length) return false;
    const activity = this.mission.activities[activityIndex];
    if (activity.type !== 'math-input' || !activity.question) return false;
    return activity.question.includes('= ?');
  }


  // Obter a parte da pergunta antes do "= ?"
  getQuestionBeforeEquals(activityIndex: number): string {
    if (!this.mission || activityIndex < 0 || activityIndex >= this.mission.activities.length) return '';
    const activity = this.mission.activities[activityIndex];
    if (!activity.question) return '';
    return activity.question.replace('= ?', '=').trim();
  }
}


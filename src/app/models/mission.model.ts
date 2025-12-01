export interface ActivityOption {
  text: string;
  correct: boolean;
  image?: string; // Imagem opcional para a opção
}

export interface MatchPair {
  image: string;
  description: string;
  matchId: string;
}

export interface MathInputField {
  label: string;
  correctValue: string | number;
  placeholder?: string;
  type?: 'number' | 'text';
}

export interface CDUOperation {
  operation: 'addition' | 'subtraction' | 'multiplication';
  number1: number;
  number2: number;
  correctAnswer: number; // Resposta correta
  correctCDU?: { centena: number; dezena: number; unidade: number }; // Resposta em C D U
}

export interface EmojiGroup {
  emoji: string;
  count: number; // Quantidade de emojis neste grupo
}

export interface VisualMultiplication {
  emojiGroups?: EmojiGroup[]; // Grupos de emojis para visualizar
  gridCells?: number; // Número de células na grade (4, 9, etc.)
  gridRows?: number; // Número de linhas na grade
  gridCols?: number; // Número de colunas na grade
  correctAnswers: string[]; // Múltiplas respostas corretas (ex: ["7 x 3 = 21", "3 x 7 = 21"])
  inputFields: MathInputField[]; // Campos para preencher (ex: [número1, número2, resultado])
}

export interface IceCreamSelection {
  totalIceCreams: number; // Total de sorvetes (18)
  targetCount: number; // Quantidade a selecionar (12 para uma dúzia)
  emoji: string; // Emoji do sorvete (🍦)
}

export interface Activity {
  type: 'multiple-choice' | 'true-false' | 'match' | 'environment-check' | 'fill-blank' | 'math-input' | 'cdu-operation' | 'visual-multiplication' | 'ice-cream-selection';
  question: string;
  title?: string; // Título do desafio
  instruction?: string; // Instrução do desafio
  imageDescription?: string; // Descrição da imagem sugerida
  reward?: string; // Recompensa lúdica (ex: "+10 moedas de energia")
  options?: ActivityOption[];
  correct?: boolean;
  allowMultiple?: boolean; // Permite múltiplas respostas corretas
  matchPairs?: MatchPair[]; // Para atividade de ligar colunas
  environmentImages?: { image: string; hasProblem: boolean; problemDescription?: string }[]; // Para fiscal do meio ambiente
  inputFields?: MathInputField[]; // Campos de input para preencher
  cduOperation?: CDUOperation; // Operação com C D U
  visualMultiplication?: VisualMultiplication; // Visualização de grupos/quadrados para multiplicação
  iceCreamSelection?: IceCreamSelection; // Seleção de sorvetes
}

export interface Mission {
  id: number;
  title: string;
  icon: string;
  image: string;
  observationQuestions: string[];
  explanation: string;
  activities: Activity[];
  successMessage: string;
  completed?: boolean;
  textContent?: string; // Texto para mostrar no lugar da imagem
  textTitle?: string; // Título do texto
  showImageIcon?: boolean; // Mostrar ícone para visualizar imagem original
  textImages?: string[]; // Imagens para mostrar no texto (lado a lado)
  textImageTitles?: string[]; // Títulos para cada imagem
  bonusQuestion?: string; // Pergunta bônus quando perde todas as vidas
  bonusCorrectAnswer?: string; // Resposta correta da pergunta bônus
}


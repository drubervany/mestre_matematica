import { Injectable } from '@angular/core';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private missions: Mission[] = [
    {
      id: 1,
      title: "Multiplicação / Quantas vezes",
      icon: "✖️",
      image: "assets/imagens_livro/multiplicacao.jpg",
      textTitle: "MULTIPLICAÇÃO / QUANTAS VEZES",
      textContent: `Olá, Mestre da Matemática! 👋

Bem-vindo ao desafio de Multiplicação! ✖️

Aqui você vai aprender sobre:
✖️ Adição de parcelas iguais
✖️ Multiplicando por 2, 3, 4, 5
✖️ Dobro e triplo
✖️ Contando possibilidades
✖️ Sequências

Módulo 3: Páginas 86 até 193
Caderno Mais 4: Páginas 41 a 43

Cada desafio que você completar te dará moedas de energia e XP! 💰⭐

Vamos começar? 🚀`,
      showImageIcon: true,
      observationQuestions: [
        "Como transformar adição de parcelas iguais em multiplicação?",
        "O que é dobro e triplo?",
        "Como contar possibilidades?"
      ],
      explanation: `Estes são desafios sobre multiplicação para você aprender de forma divertida! 🎮

Você vai aprender sobre:
- Adição de parcelas iguais: 4+4+4 = 3 x 4 = 12
- Multiplicando por 2, 3, 4, 5
- Dobro: multiplicar por 2
- Triplo: multiplicar por 3
- Contando possibilidades: combinações

Cada desafio tem uma recompensa especial quando você acerta! 💰
Lembre-se: você pode tentar quantas vezes precisar, mas cuidado com seus corações! ❤️

Vamos lá, você consegue! 🌟`,
      activities: [
        {
          type: "math-input",
          title: "🚗 Desafio 1: Rodas de Carros",
          instruction: "Em 1 carro, sabemos que há 4 rodas.",
          question: "1️⃣ a) 1 carro tem quantas rodas?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" },
            { label: "", correctValue: "rodas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 2: Mais Rodas",
          instruction: "Em 1 carro há 4 rodas.",
          question: "2️⃣ b) 2 carros têm quantas rodas?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "8", placeholder: "___" },
            { label: "", correctValue: "rodas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 3: Rodas em 3 Carros",
          instruction: "Complete: 4 + 4 + 4 = ? ou 3 x 4 = ?",
          question: "3️⃣ Quantas rodas têm 3 carros?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "12", placeholder: "___" },
            { label: "", correctValue: "rodas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 4: Rodas em 4 Carros",
          instruction: "Complete: 4 + 4 + 4 + 4 = ? ou 4 x 4 = ?",
          question: "4️⃣ Quantas rodas têm 4 carros?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "16", placeholder: "___" },
            { label: "", correctValue: "rodas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 5: Rodas em 5 Carros",
          instruction: "Complete: 4 + 4 + 4 + 4 + 4 = ? ou 5 x 4 = ?",
          question: "5️⃣ Quantas rodas têm 5 carros?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "rodas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 6: Rodas em 6 Carros",
          instruction: "Complete: 4 + 4 + 4 + 4 + 4 + 4 = ? ou 6 x 4 = ?",
          question: "6️⃣ Quantas rodas têm 6 carros?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "24", placeholder: "___" },
            { label: "", correctValue: "rodas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 7: Passageiros em Carros",
          instruction: "No carro, além do motorista, cabem 4 passageiros. Então cada carro leva 5 pessoas.",
          question: "7️⃣ a) Quantas pessoas cabem em 2 carros iguais a esse?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "10", placeholder: "___" },
            { label: "", correctValue: "pessoas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 8: Mais Passageiros",
          instruction: "Cada carro leva 5 pessoas.",
          question: "8️⃣ b) Quantas pessoas cabem em 3 carros iguais a esse?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "pessoas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 9: Ainda Mais Passageiros",
          instruction: "Cada carro leva 5 pessoas.",
          question: "9️⃣ c) Quantas pessoas cabem em 4 carros iguais a esse?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "pessoas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚗 Desafio 10: Quantos Carros?",
          instruction: "Cada carro leva 5 pessoas.",
          question: "🔟 d) Quantos carros como esse são necessários para acomodar 30 pessoas?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "carros", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🅿️ Desafio 11: Vagas de Estacionamento",
          instruction: "Em outro trecho do estacionamento, há 2 linhas de vagas com 9 vagas em cada uma.",
          question: "1️⃣1️⃣ Quantas vagas há ao todo?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "18", placeholder: "___" },
            { label: "", correctValue: "vagas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍫 Desafio 12: Bombons em Caixas",
          instruction: "Paulo faz bombons caseiros e os coloca em caixas para vender.",
          question: "1️⃣2️⃣ a) Quantas colunas há nessa caixa de bombons?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "colunas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍫 Desafio 13: Bombons por Coluna",
          instruction: "Paulo coloca bombons em caixas.",
          question: "1️⃣3️⃣ b) Quantos bombons Paulo coloca em cada coluna dessa caixa?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "3", placeholder: "___" },
            { label: "", correctValue: "bombons", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍫 Desafio 14: Total de Bombons",
          instruction: "Complete: 3 + 3 + 3 + 3 + 3 + 3 = ? ou 6 x 3 = ?",
          question: "1️⃣4️⃣ c) Quantos bombons cabem nessa caixa?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "18", placeholder: "___" },
            { label: "", correctValue: "bombons", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍫 Desafio 15: Outras Caixas de Bombons",
          instruction: "Observe outras caixas de bombons que Paulo vende.",
          question: "1️⃣5️⃣ a) Quantos bombons Paulo coloca em cada uma? (Primeira caixa)",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "bombons", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍫 Desafio 16: Segunda Caixa",
          instruction: "Observe outra caixa de bombons.",
          question: "1️⃣6️⃣ b) Quantos bombons Paulo coloca nessa caixa?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "25", placeholder: "___" },
            { label: "", correctValue: "bombons", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "👕 Desafio 17: Combinações de Roupas",
          instruction: "Karina vai ao parque e precisa escolher uma bermuda e uma camiseta. Ela tem 3 bermudas e 4 camisetas.",
          question: "1️⃣7️⃣ De quantas maneiras diferentes Karina pode combinar uma camiseta e uma bermuda?",
          reward: "⭐ Você ganhou +10 XP!",
          options: [
            { text: "12 maneiras (3 x 4 = 12)", correct: true },
            { text: "7 maneiras (3 + 4 = 7)", correct: false },
            { text: "10 maneiras", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "🍦 Desafio 18: Tabela de Picolés",
          instruction: "Complete o quadro com as quantidades de picolés.",
          question: "1️⃣8️⃣ Se 1 picolé custa 2 reais, quanto custam 10 picolés?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍿 Desafio 19: Tabela de Pipoca",
          instruction: "Complete o quadro de acordo com a quantidade de pacotes de pipoca. Cada pacote custa 5 reais.",
          question: "1️⃣9️⃣ Se 1 pacote custa 5 reais, quanto custam 3 pacotes?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🧼 Desafio 20: Multiplicando por 2 - Sabonetes",
          instruction: "Bruna embala sabonetes em caixas. Cada caixa tem 2 sabonetes.",
          question: "2️⃣0️⃣ a) Quantos sabonetes Bruna coloca em 1 caixa?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "2", placeholder: "___" },
            { label: "", correctValue: "sabonetes", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🧼 Desafio 21: Mais Sabonetes",
          instruction: "Cada caixa tem 2 sabonetes.",
          question: "2️⃣1️⃣ b) Quantos sabonetes Bruna coloca em 2 caixas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" },
            { label: "", correctValue: "sabonetes", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🧼 Desafio 22: Ainda Mais Sabonetes",
          instruction: "Cada caixa tem 2 sabonetes.",
          question: "2️⃣2️⃣ c) Quantos sabonetes Bruna coloca em 3 caixas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "sabonetes", placeholder: "___" }
          ]
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 23: Quadrados na Malha",
          instruction: "Observe a quantidade de quadrados coloridos em cada malha quadriculada e complete as operações.",
          question: "2️⃣3️⃣ a) Quantos quadrados há na malha? Complete:",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 8,
            gridRows: 4,
            gridCols: 2,
            correctAnswers: ["4 x 2 = 8", "2 x 4 = 8"],
            inputFields: [
              { label: "4 x", correctValue: "2", placeholder: "__" },
              { label: "=", correctValue: "8", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 24: Mais Quadrados",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "2️⃣4️⃣ b) Quantos quadrados há na malha? Complete:",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 10,
            gridRows: 5,
            gridCols: 2,
            correctAnswers: ["5 x 2 = 10", "2 x 5 = 10"],
            inputFields: [
              { label: "5 x", correctValue: "2", placeholder: "__" },
              { label: "=", correctValue: "10", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 25: Quadrados Maiores",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "2️⃣5️⃣ c) Quantos quadrados há na malha? Complete:",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 21,
            gridRows: 7,
            gridCols: 3,
            correctAnswers: ["7 x 3 = 21", "3 x 7 = 21"],
            inputFields: [
              { label: "7 x", correctValue: "3", placeholder: "__" },
              { label: "=", correctValue: "21", placeholder: "__" }
            ]
          }
        },
        {
          type: "multiple-choice",
          title: "🍔 Desafio 26: Promoção de Lanchonete",
          instruction: "A lanchonete está com uma promoção: um lanche e um refresco por 15 reais. Há 8 opções de lanche e 2 opções de refresco.",
          question: "2️⃣6️⃣ a) Quantas opções de lanche estão nessa promoção?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "8 opções", correct: true },
            { text: "2 opções", correct: false },
            { text: "10 opções", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🍔 Desafio 27: Opções de Refresco",
          instruction: "Há 8 opções de lanche e 2 opções de refresco.",
          question: "2️⃣7️⃣ b) Para cada opção de lanche, quantas opções de refresco o cliente tem para escolher?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "2 opções", correct: true },
            { text: "8 opções", correct: false },
            { text: "10 opções", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "🍔 Desafio 28: Total de Combinações",
          instruction: "Há 8 opções de lanche e 2 opções de refresco.",
          question: "2️⃣8️⃣ c) De quantas maneiras diferentes um cliente pode escolher um lanche e um refresco?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "16", placeholder: "___" },
            { label: "", correctValue: "maneiras", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "✏️ Desafio 29: Tabela de Lápis",
          instruction: "Karina observou que 1 lápis custa 2 reais. Complete a tabela.",
          question: "2️⃣9️⃣ Se 1 lápis custa 2 reais, quanto custam 5 lápis?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "10", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "✏️ Desafio 30: Mais Lápis",
          instruction: "1 lápis custa 2 reais.",
          question: "3️⃣0️⃣ Quanto custam 10 lápis?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📷 Desafio 31: Multiplicando por 3 - Tripés",
          instruction: "Camila é fotógrafa e usa tripés. Cada tripé tem 3 pés.",
          question: "3️⃣1️⃣ a) Quantos pés tem 1 tripé?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "3", placeholder: "___" },
            { label: "", correctValue: "pés", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📷 Desafio 32: Mais Tripés",
          instruction: "Cada tripé tem 3 pés.",
          question: "3️⃣2️⃣ b) Quantos pés têm 2 tripés?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "pés", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📷 Desafio 33: Ainda Mais Tripés",
          instruction: "Cada tripé tem 3 pés.",
          question: "3️⃣3️⃣ c) Quantos pés têm 3 tripés?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "9", placeholder: "___" },
            { label: "", correctValue: "pés", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "👗 Desafio 34: Combinações de Roupas e Sapatos",
          instruction: "Gabriela está decidindo o que vai vestir e o que vai calçar. Ela tem 4 opções de roupa e 3 opções de sapatos.",
          question: "3️⃣4️⃣ a) Quantas opções de peça de roupa Gabriela separou para usar?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "4 opções", correct: true },
            { text: "3 opções", correct: false },
            { text: "7 opções", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "👗 Desafio 35: Opções de Sapatos",
          instruction: "Gabriela tem 4 opções de roupa e 3 opções de sapatos.",
          question: "3️⃣5️⃣ b) Para cada opção de roupa, quantas opções de pares de sapato Gabriela tem para usar?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "3 opções", correct: true },
            { text: "4 opções", correct: false },
            { text: "7 opções", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "👗 Desafio 36: Total de Combinações",
          instruction: "Gabriela tem 4 opções de roupa e 3 opções de sapatos.",
          question: "3️⃣6️⃣ c) De quantas maneiras diferentes Gabriela pode combinar uma opção de peça de roupa com um par de sapatos?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "12", placeholder: "___" },
            { label: "", correctValue: "maneiras", placeholder: "___" }
          ]
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 37: Quadrados por 3",
          instruction: "Observe a quantidade de quadrados coloridos em cada malha quadriculada e complete as operações.",
          question: "3️⃣7️⃣ a) Quantos quadrados há na malha? Complete: __ x 3 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 15,
            gridRows: 5,
            gridCols: 3,
            correctAnswers: ["5 x 3 = 15", "3 x 5 = 15"],
            inputFields: [
              { label: "5 x", correctValue: "3", placeholder: "__" },
              { label: "=", correctValue: "15", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 38: Mais Quadrados por 3",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "3️⃣8️⃣ b) Quantos quadrados há na malha? Complete: __ x 3 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 21,
            gridRows: 7,
            gridCols: 3,
            correctAnswers: ["7 x 3 = 21", "3 x 7 = 21"],
            inputFields: [
              { label: "7 x", correctValue: "3", placeholder: "__" },
              { label: "=", correctValue: "21", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 39: Quadrados Maiores por 3",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "3️⃣9️⃣ c) Quantos quadrados há na malha? Complete: __ x 3 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 24,
            gridRows: 8,
            gridCols: 3,
            correctAnswers: ["8 x 3 = 24", "3 x 8 = 24"],
            inputFields: [
              { label: "8 x", correctValue: "3", placeholder: "__" },
              { label: "=", correctValue: "24", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 40: Quadrados por 3 - Parte 2",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "4️⃣0️⃣ d) Quantos quadrados há na malha? Complete: __ x 3 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 18,
            gridRows: 6,
            gridCols: 3,
            correctAnswers: ["6 x 3 = 18", "3 x 6 = 18"],
            inputFields: [
              { label: "6 x", correctValue: "3", placeholder: "__" },
              { label: "=", correctValue: "18", placeholder: "__" }
            ]
          }
        },
        {
          type: "math-input",
          title: "🖊️ Desafio 41: Tabela de Canetas",
          instruction: "Karina observou que 1 caneta custa 3 reais. Complete a tabela.",
          question: "4️⃣1️⃣ Se 1 caneta custa 3 reais, quanto custam 5 canetas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🖊️ Desafio 42: Mais Canetas",
          instruction: "1 caneta custa 3 reais.",
          question: "4️⃣2️⃣ Quanto custam 10 canetas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "30", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🪑 Desafio 43: Multiplicando por 4 - Cadeiras",
          instruction: "Karina está sentada em uma cadeira. Cada cadeira tem 4 pernas.",
          question: "4️⃣3️⃣ a) Quantas pernas tem 1 cadeira?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" },
            { label: "", correctValue: "pernas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🪑 Desafio 44: Mais Cadeiras",
          instruction: "Cada cadeira tem 4 pernas.",
          question: "4️⃣4️⃣ b) Quantas pernas têm 2 cadeiras?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "8", placeholder: "___" },
            { label: "", correctValue: "pernas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🪑 Desafio 45: Ainda Mais Cadeiras",
          instruction: "Cada cadeira tem 4 pernas.",
          question: "4️⃣5️⃣ c) Quantas pernas têm 3 cadeiras?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "12", placeholder: "___" },
            { label: "", correctValue: "pernas", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🍕 Desafio 46: Promoção de Pizzaria",
          instruction: "A pizzaria está com uma promoção: escolha 1 sabor de pizza e ganhe 1 tipo de bebida. Há 4 sabores de pizza e 4 tipos de bebida.",
          question: "4️⃣6️⃣ a) Quantas opções de sabor de pizza há nessa promoção?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "4 opções", correct: true },
            { text: "2 opções", correct: false },
            { text: "8 opções", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🍕 Desafio 47: Opções de Bebida",
          instruction: "Há 4 sabores de pizza e 4 tipos de bebida.",
          question: "4️⃣7️⃣ b) Para cada opção de sabor de pizza, quantas opções de bebida o cliente tem para escolher?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "4 opções", correct: true },
            { text: "2 opções", correct: false },
            { text: "8 opções", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "🍕 Desafio 48: Total de Combinações de Pizza",
          instruction: "Há 4 sabores de pizza e 4 tipos de bebida.",
          question: "4️⃣8️⃣ c) De quantas maneiras diferentes um cliente pode escolher um sabor de pizza e um tipo de bebida?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "16", placeholder: "___" },
            { label: "", correctValue: "maneiras", placeholder: "___" }
          ]
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 49: Quadrados por 4",
          instruction: "Observe a quantidade de quadrados coloridos em cada malha quadriculada e complete as operações.",
          question: "4️⃣9️⃣ a) Quantos quadrados há na malha? Complete: __ x 4 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 20,
            gridRows: 5,
            gridCols: 4,
            correctAnswers: ["5 x 4 = 20", "4 x 5 = 20"],
            inputFields: [
              { label: "5 x", correctValue: "4", placeholder: "__" },
              { label: "=", correctValue: "20", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 50: Mais Quadrados por 4",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "5️⃣0️⃣ b) Quantos quadrados há na malha? Complete: __ x 4 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 24,
            gridRows: 6,
            gridCols: 4,
            correctAnswers: ["6 x 4 = 24", "4 x 6 = 24"],
            inputFields: [
              { label: "6 x", correctValue: "4", placeholder: "__" },
              { label: "=", correctValue: "24", placeholder: "__" }
            ]
          }
        },
        {
          type: "math-input",
          title: "✏️ Desafio 51: Tabela de Lapiseiras",
          instruction: "Karina observou que 1 lapiseira custa 4 reais. Complete a tabela.",
          question: "5️⃣1️⃣ Se 1 lapiseira custa 4 reais, quanto custam 5 lapiseiras?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "✏️ Desafio 52: Mais Lapiseiras",
          instruction: "1 lapiseira custa 4 reais.",
          question: "5️⃣2️⃣ Se uma pessoa comprar 11 lapiseiras, quantos reais vai pagar?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "44", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍑 Desafio 53: Multiplicando por 5 - Pêssegos",
          instruction: "Karina tem uma caixa de pêssegos. Cada caixa tem 5 pêssegos.",
          question: "5️⃣3️⃣ a) Quantos pêssegos há em 1 caixa?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "5", placeholder: "___" },
            { label: "", correctValue: "pêssegos", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍑 Desafio 54: Mais Pêssegos",
          instruction: "Cada caixa tem 5 pêssegos.",
          question: "5️⃣4️⃣ b) Quantos pêssegos há em 2 caixas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "10", placeholder: "___" },
            { label: "", correctValue: "pêssegos", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍑 Desafio 55: Ainda Mais Pêssegos",
          instruction: "Cada caixa tem 5 pêssegos.",
          question: "5️⃣5️⃣ c) Quantos pêssegos há em 3 caixas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "pêssegos", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🥬 Desafio 56: Cestas de Feira",
          instruction: "Um feirante vende cestas com um tipo de legume e um tipo de fruta. Ele tem 4 opções de legumes e 5 opções de frutas.",
          question: "5️⃣6️⃣ a) Quantas opções de legumes esse feirante tem para montar as cestas?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "4 opções", correct: true },
            { text: "5 opções", correct: false },
            { text: "9 opções", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🥬 Desafio 57: Opções de Frutas",
          instruction: "O feirante tem 4 opções de legumes e 5 opções de frutas.",
          question: "5️⃣7️⃣ b) Para cada opção de legumes, quantas opções de frutas esse feirante tem para montar as cestas?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "5 opções", correct: true },
            { text: "4 opções", correct: false },
            { text: "9 opções", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "🥬 Desafio 58: Total de Combinações de Cestas",
          instruction: "O feirante tem 4 opções de legumes e 5 opções de frutas.",
          question: "5️⃣8️⃣ c) De quantas maneiras diferentes esse feirante pode combinar um tipo de legume com um tipo de fruta?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "maneiras", placeholder: "___" }
          ]
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 59: Quadrados por 5",
          instruction: "Observe a quantidade de quadrados coloridos em cada malha quadriculada e complete as operações.",
          question: "5️⃣9️⃣ a) Quantos quadrados há na malha? Complete: __ x 5 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 25,
            gridRows: 5,
            gridCols: 5,
            correctAnswers: ["5 x 5 = 25"],
            inputFields: [
              { label: "5 x", correctValue: "5", placeholder: "__" },
              { label: "=", correctValue: "25", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 60: Mais Quadrados por 5",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "6️⃣0️⃣ b) Quantos quadrados há na malha? Complete: __ x 5 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 30,
            gridRows: 6,
            gridCols: 5,
            correctAnswers: ["6 x 5 = 30", "5 x 6 = 30"],
            inputFields: [
              { label: "6 x", correctValue: "5", placeholder: "__" },
              { label: "=", correctValue: "30", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 61: Quadrados Maiores por 5",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "6️⃣1️⃣ c) Quantos quadrados há na malha? Complete: __ x 5 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 35,
            gridRows: 7,
            gridCols: 5,
            correctAnswers: ["7 x 5 = 35", "5 x 7 = 35"],
            inputFields: [
              { label: "7 x", correctValue: "5", placeholder: "__" },
              { label: "=", correctValue: "35", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 62: Quadrados por 5 - Parte 2",
          instruction: "Observe a quantidade de quadrados coloridos na malha.",
          question: "6️⃣2️⃣ d) Quantos quadrados há na malha? Complete: __ x 5 = __",
          reward: "⭐ Você ganhou +5 XP!",
          visualMultiplication: {
            gridCells: 40,
            gridRows: 8,
            gridCols: 5,
            correctAnswers: ["8 x 5 = 40", "5 x 8 = 40"],
            inputFields: [
              { label: "8 x", correctValue: "5", placeholder: "__" },
              { label: "=", correctValue: "40", placeholder: "__" }
            ]
          }
        },
        {
          type: "math-input",
          title: "🧽 Desafio 63: Tabela de Borrachas",
          instruction: "Karina observou que 1 borracha custa 5 reais. Complete a tabela.",
          question: "6️⃣3️⃣ Se 1 borracha custa 5 reais, quanto custam 5 borrachas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "25", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🧽 Desafio 64: Mais Borrachas",
          instruction: "1 borracha custa 5 reais.",
          question: "6️⃣4️⃣ Quanto custam 10 borrachas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "50", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 65: Dobro da Pontuação",
          instruction: "Fabiano e Carol estão jogando trilha. Eles lançam um dado e deslocam o marcador para a quantidade de casas correspondente ao dobro da pontuação obtida no dado.",
          question: "6️⃣5️⃣ a) Calcule o dobro da pontuação: 2 x 1 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "2", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 66: Mais Dobro",
          instruction: "Calcule o dobro da pontuação obtida no dado.",
          question: "6️⃣6️⃣ b) 2 x 2 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 67: Dobro de 3",
          instruction: "Calcule o dobro da pontuação obtida no dado.",
          question: "6️⃣7️⃣ c) 2 x 3 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 68: Dobro de 4",
          instruction: "Calcule o dobro da pontuação obtida no dado.",
          question: "6️⃣8️⃣ d) 2 x 4 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "8", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 69: Dobro de 5",
          instruction: "Calcule o dobro da pontuação obtida no dado.",
          question: "6️⃣9️⃣ e) 2 x 5 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "10", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 70: Dobro de 6",
          instruction: "Calcule o dobro da pontuação obtida no dado.",
          question: "7️⃣0️⃣ f) 2 x 6 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "12", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 71: Triplo da Pontuação",
          instruction: "Agora a regra do jogo é outra: os jogadores lançam um dado e deslocam o marcador para a quantidade de casas correspondente ao triplo da pontuação obtida no dado.",
          question: "7️⃣1️⃣ a) Calcule o triplo da pontuação: 3 x 1 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "3", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 72: Triplo de 2",
          instruction: "Calcule o triplo da pontuação obtida no dado.",
          question: "7️⃣2️⃣ b) 3 x 2 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 73: Triplo de 3",
          instruction: "Calcule o triplo da pontuação obtida no dado.",
          question: "7️⃣3️⃣ c) 3 x 3 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "9", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 74: Triplo de 4",
          instruction: "Calcule o triplo da pontuação obtida no dado.",
          question: "7️⃣4️⃣ d) 3 x 4 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "12", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 75: Triplo de 5",
          instruction: "Calcule o triplo da pontuação obtida no dado.",
          question: "7️⃣5️⃣ e) 3 x 5 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎲 Desafio 76: Triplo de 6",
          instruction: "Calcule o triplo da pontuação obtida no dado.",
          question: "7️⃣6️⃣ f) 3 x 6 = ?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "18", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🎲 Desafio 77: Jogo de Trilha",
          instruction: "Carol e Fabiano mudaram a regra do jogo. Agora eles lançam dois dados e podem deslocar o marcador para a casa correspondente ao dobro ou ao triplo da pontuação obtida nos dados. Carol obteve 8 (dobro = 16, triplo = 24) e Fabiano obteve 6 (dobro = 12, triplo = 18).",
          question: "7️⃣7️⃣ a) Qual das crianças calculou o dobro da pontuação que obteve nos dados?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Fabiano (dobro de 6 = 12)", correct: true },
            { text: "Carol (dobro de 8 = 16)", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🎲 Desafio 78: Triplo no Jogo",
          instruction: "Carol obteve 8 (triplo = 24) e Fabiano obteve 6 (triplo = 18).",
          question: "7️⃣8️⃣ b) Qual das crianças calculou o triplo da pontuação que obteve nos dados?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Carol (triplo de 8 = 24)", correct: true },
            { text: "Fabiano (triplo de 6 = 18)", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "⚙️ Desafio 79: Sequência - Máquina de Dobro",
          instruction: "Imagine uma sequência de máquinas que calculam o dobro. Se entrar 2, sai 4. Se entrar 4, sai 8.",
          question: "7️⃣9️⃣ Que número vai sair da quarta máquina dessa sequência se entrar 1?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "16", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "⚙️ Desafio 80: Sequência - Máquina de Triplo",
          instruction: "A máquina foi reprogramada para calcular o triplo. Se entrar 2, sai 6. Se entrar 6, sai 18.",
          question: "8️⃣0️⃣ Que número vai sair da terceira máquina dessa sequência se entrar 3?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "27", placeholder: "___" }
          ]
        },
      ],
      successMessage: "🎉 PARABÉNS, ANTHONY! 🎉\n\nVocê completou TODOS os desafios de Multiplicação! 🏆\n\nVocê é um verdadeiro MESTRE DA MULTIPLICAÇÃO! ⭐\n\nContinue assim e você vai se tornar um campeão! 💪✨"
    },
    {
      id: 2,
      title: "Vamos medir (medidas de comprimento)",
      icon: "📏",
      image: "assets/imagens_livro/medidas.jpg",
      textTitle: "VAMOS MEDIR - MEDIDAS DE COMPRIMENTO",
      textContent: `Olá, Mestre da Matemática! 👋

Bem-vindo ao desafio de Medidas! 📏

Aqui você vai aprender sobre:
📏 Medidas de comprimento (metro e centímetro)
🥤 Medidas de capacidade (litro e mililitro)
⚖️ Medidas de massa (quilograma e grama)

Módulo 4: Páginas 74 até 84
Caderno Mais 4: Páginas 32 até 37

Cada desafio que você completar te dará moedas de energia e XP! 💰⭐

Vamos começar? 🚀`,
      showImageIcon: true,
      observationQuestions: [
        "Quais instrumentos usamos para medir comprimento?",
        "Qual a relação entre metro e centímetro?",
        "Como medimos capacidade e massa?"
      ],
      explanation: `Estes são desafios sobre medidas para você aprender de forma divertida! 🎮

Você vai aprender sobre:
- O metro (m) e o centímetro (cm): 1 metro = 100 centímetros
- O litro (L) e o mililitro (mL): 1 litro = 1000 mililitros
- O quilograma (kg) e o grama (g): 1 quilograma = 1000 gramas

Cada desafio tem uma recompensa especial quando você acerta! 💰
Lembre-se: você pode tentar quantas vezes precisar, mas cuidado com seus corações! ❤️

Vamos lá, você consegue! 🌟`,
      activities: [
        {
          type: "multiple-choice",
          title: "📏 Desafio 1: Instrumentos de Medida",
          instruction: "O metro é uma unidade de medida de comprimento padronizada. Veja alguns instrumentos que usamos para medir comprimento em metros.",
          question: "1️⃣ Quais são os instrumentos usados para medir comprimento em metros?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Trena, fita métrica e metro de carpinteiro", correct: true },
            { text: "Régua e balança", correct: false },
            { text: "Copo e xícara", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "📐 Desafio 2: O Centímetro",
          instruction: "O centímetro também é uma unidade de medida de comprimento padronizada. Podemos usar a régua para medir comprimentos em centímetros.",
          question: "2️⃣ Na régua, a distância entre um número e o próximo mede:",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "1 centímetro (1 cm)", correct: true },
            { text: "10 centímetros (10 cm)", correct: false },
            { text: "100 centímetros (100 cm)", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "📏 Desafio 3: Comparando Metro e Centímetro",
          instruction: "Compare a fita métrica com a régua e responda:",
          question: "3️⃣ O comprimento de 1 centímetro é menor, maior ou igual ao comprimento de 1 metro?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Menor", correct: true },
            { text: "Maior", correct: false },
            { text: "Igual", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "📏 Desafio 4: Quantos Centímetros?",
          instruction: "Quantos centímetros tem uma fita métrica?",
          question: "4️⃣ Uma fita métrica mede 1 metro. Quantos centímetros isso representa?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "100", placeholder: "___" },
            { label: "", correctValue: "cm", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "📏 Desafio 5: Relação Metro e Centímetro",
          instruction: "O metro e o centímetro são unidades padronizadas de comprimento.",
          question: "5️⃣ Se um comprimento mede 100 centímetros, podemos dizer que ele mede:",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "1 metro (1 m)", correct: true },
            { text: "10 metros (10 m)", correct: false },
            { text: "100 metros (100 m)", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "📏 Desafio 6: Medindo com Régua",
          instruction: "Observe os objetos e escreva a medida aproximada de comprimento obtida.",
          question: "6️⃣ Um objeto mede 12 centímetros. Como escrevemos isso?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "12", placeholder: "___" },
            { label: "", correctValue: "cm", placeholder: "___" }
          ]
        },
        {
          type: "match",
          title: "🔗 Desafio 7: Relacionando Objetos e Unidades",
          instruction: "Relacione os objetos abaixo com a unidade de medida apropriada para medir seus comprimentos.",
          question: "7️⃣ Relacione cada objeto com a unidade de medida mais apropriada:",
          reward: "⭐ Você ganhou +10 XP!",
          matchPairs: [
            { image: "assets/imagens_livro/carro.jpg", description: "Carro", matchId: "metro" },
            { image: "assets/imagens_livro/casa.jpg", description: "Casa", matchId: "metro" },
            { image: "assets/imagens_livro/garfo.jpg", description: "Garfo", matchId: "centimetro" },
            { image: "assets/imagens_livro/caderno.jpg", description: "Caderno", matchId: "centimetro" },
            { image: "assets/imagens_livro/controle.jpg", description: "Controle remoto", matchId: "centimetro" },
            { image: "assets/imagens_livro/copo.jpg", description: "Copo", matchId: "centimetro" },
            { image: "assets/imagens_livro/pincel.jpg", description: "Pincel", matchId: "centimetro" },
            { image: "assets/imagens_livro/lapis.jpg", description: "Lápis", matchId: "centimetro" },
            { image: "assets/imagens_livro/borracha.jpg", description: "Borracha", matchId: "milimetro" },
            { image: "assets/imagens_livro/parafusos.jpg", description: "Parafusos e pregos", matchId: "milimetro" }
          ]
        },
        {
          type: "multiple-choice",
          title: "📏 Desafio 8: Estimando Medidas",
          instruction: "Observe a imagem em cada item, imagine o objeto real e estime a medida de comprimento indicada.",
          question: "8️⃣ a) Qual é a altura aproximada de uma porta?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "2 centímetros", correct: false },
            { text: "2 metros", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          title: "📏 Desafio 9: Mais Estimativas",
          instruction: "Observe a imagem e estime a medida de comprimento.",
          question: "9️⃣ b) Qual é a altura aproximada de um micro-ondas?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "30 metros", correct: false },
            { text: "30 centímetros", correct: true }
          ]
        },
        {
          type: "math-input",
          title: "🥤 Desafio 10: Capacidade das Garrafas",
          instruction: "Observe as garrafas abaixo e responda ao que se pede.",
          question: "🔟 a) Qual é a capacidade de cada garrafa?",
          reward: "💰 Você ganhou +3 moedas!",
          inputFields: [
            { label: "", correctValue: "2", placeholder: "___" },
            { label: "", correctValue: "L", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🥤 Desafio 11: Contando Garrafas",
          instruction: "Observe as garrafas na imagem.",
          question: "1️⃣1️⃣ b) Quantas garrafas há na imagem?",
          reward: "💰 Você ganhou +3 moedas!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🥤 Desafio 12: Total de Litros",
          instruction: "Juntando o líquido de todas as garrafas, há quantos litros ao todo?",
          question: "1️⃣2️⃣ c) Juntando o líquido de todas as garrafas, há quantos litros ao todo?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "6 litros", correct: false },
            { text: "10 litros", correct: false },
            { text: "12 litros", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          title: "🥤 Desafio 13: Produtos em Litro",
          instruction: "Contorne as imagens que representam produtos que compram em litro.",
          question: "1️⃣3️⃣ Quais produtos são comprados em litro?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Leite, suco e gasolina", correct: true },
            { text: "Feijão, ovos e livros", correct: false },
            { text: "Todos os produtos", correct: false }
          ],
          allowMultiple: false
        },
        {
          type: "math-input",
          title: "🥤 Desafio 14: Chá Gelado de Catarina",
          instruction: "Catarina fez chá gelado e encheu completamente 3 jarras. Cada jarra enche 5 xícaras.",
          question: "1️⃣4️⃣ Quantas xícaras de chá gelado Catarina fez ao todo?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "xícaras", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🥤 Desafio 15: Completando 1 Litro (Parte 1)",
          instruction: "Escreva quanto falta para completar 1 litro. Lembre-se: 1L = 1000 mL",
          question: "1️⃣5️⃣ a) Um recipiente tem 800 mL. Quantos mililitros faltam para completar 1 litro?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "200", placeholder: "___" },
            { label: "", correctValue: "mL", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🥤 Desafio 16: Completando 1 Litro (Parte 2)",
          instruction: "Escreva quanto falta para completar 1 litro.",
          question: "1️⃣6️⃣ b) Um recipiente tem 400 mL. Quantos mililitros faltam para completar 1 litro?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "600", placeholder: "___" },
            { label: "", correctValue: "mL", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "⚖️ Desafio 17: Comparando Massas",
          instruction: "Alice comprou kiwis e bananas. Para pesar quanto de cada produto estava levando, foi utilizada a balança da quitanda.",
          question: "1️⃣7️⃣ Qual dos produtos é o mais pesado?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "A banana", correct: true },
            { text: "O kiwi", correct: false },
            { text: "São iguais", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🍽️ Desafio 18: Receita de Esfirras",
          instruction: "Veja os ingredientes da receita de esfirras que Joaquim costuma fazer: 500g de manteiga, 500g de farinha de trigo, 200ml de leite, 1kg de queijo, 15g de orégano.",
          question: "1️⃣8️⃣ a) Qual é o ingrediente, medido em massa, utilizado em menor quantidade?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Orégano (15g)", correct: true },
            { text: "Manteiga (500g)", correct: false },
            { text: "Farinha de trigo (500g)", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🍽️ Desafio 19: Ingrediente em Maior Quantidade",
          instruction: "Veja os ingredientes da receita de esfirras: 500g de manteiga, 500g de farinha de trigo, 200ml de leite, 1kg de queijo, 15g de orégano.",
          question: "1️⃣9️⃣ b) Qual é o ingrediente, medido em massa, usado em maior quantidade?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Queijo (1kg)", correct: true },
            { text: "Manteiga (500g)", correct: false },
            { text: "Farinha de trigo (500g)", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "🍽️ Desafio 20: Convertendo Quilograma para Gramas",
          instruction: "Lembre-se: 1kg = 1000g. Qual é a quantidade, em gramas, do produto medido em massa usado em maior quantidade?",
          question: "2️⃣0️⃣ c) Qual é a quantidade, em gramas, do queijo usado na receita?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "1000", placeholder: "___" },
            { label: "", correctValue: "g", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🥤 Desafio 8: Medindo Capacidades",
          instruction: "O litro e o mililitro são unidades padronizadas de medidas de capacidade.",
          question: "8️⃣ Quantos mililitros tem 1 litro?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "1000 mililitros (1000 mL)", correct: true },
            { text: "100 mililitros (100 mL)", correct: false },
            { text: "10 mililitros (10 mL)", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "🥤 Desafio 9: Completando 1 Litro",
          instruction: "Observe a quantidade de água em cada recipiente e escreva quanto falta para completar 1 litro.",
          question: "9️⃣ Um recipiente tem 700 mL de água. Quantos mililitros faltam para completar 1 litro?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "300", placeholder: "___" },
            { label: "", correctValue: "mL", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🥤 Desafio 10: Mais Capacidade",
          instruction: "Outro recipiente tem 500 mL de água.",
          question: "🔟 Quantos mililitros faltam para completar 1 litro?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "500", placeholder: "___" },
            { label: "", correctValue: "mL", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "⚖️ Desafio 11: Medindo Massas",
          instruction: "O quilograma e o grama são unidades padronizadas de medidas de massa.",
          question: "1️⃣1️⃣ Quantos gramas tem 1 quilograma?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "1000 gramas (1000 g)", correct: true },
            { text: "100 gramas (100 g)", correct: false },
            { text: "10 gramas (10 g)", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "⚖️ Desafio 12: Completando 1 Quilograma",
          instruction: "Observe as indicações das balanças digitais e escreva quanto falta para completar 1 quilograma.",
          question: "1️⃣2️⃣ Uma balança mostra 950 g. Quantos gramas faltam para completar 1 quilograma?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "50", placeholder: "___" },
            { label: "", correctValue: "g", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "⚖️ Desafio 13: Mais Massa",
          instruction: "Outra balança mostra 500 g.",
          question: "1️⃣3️⃣ Quantos gramas faltam para completar 1 quilograma?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "Resposta:", correctValue: "500", placeholder: "___" },
            { label: "Unidade:", correctValue: "g", placeholder: "___" }
          ]
        }
      ],
      successMessage: "🎉 PARABÉNS, ANTHONY! 🎉\n\nVocê completou TODOS os desafios de Medidas! 🏆\n\nVocê é um verdadeiro MESTRE DAS MEDIDAS! ⭐\n\nContinue assim e você vai se tornar um campeão! 💪✨"
    },
    {
      id: 3,
      title: "Vamos dividir (distribuindo igualmente)",
      icon: "➗",
      image: "assets/imagens_livro/divisao.jpg",
      textTitle: "VAMOS DIVIDIR - DISTRIBUINDO IGUALMENTE",
      textContent: `Olá, Mestre da Matemática! 👋

Bem-vindo ao desafio de Divisão! ➗

Aqui você vai aprender sobre:
➗ Distribuindo igualmente
➗ Metade, terça parte e quarta parte
➗ Multiplicações e problemas práticos

Módulo 4: Páginas 88 até 101
Caderno Mais 4: Páginas 38 a 47

Cada desafio que você completar te dará moedas de energia e XP! 💰⭐

Vamos começar? 🚀`,
      showImageIcon: true,
      observationQuestions: [
        "Como distribuir coisas igualmente?",
        "O que é metade, terça parte e quarta parte?",
        "Como resolver problemas com divisão e multiplicação?"
      ],
      explanation: `Estes são desafios sobre divisão e multiplicação para você aprender de forma divertida! 🎮

Você vai aprender sobre:
- Distribuir igualmente: 18 ÷ 2 = 9
- Metade: dividir por 2
- Terça parte: dividir por 3
- Quarta parte: dividir por 4
- Multiplicações e problemas práticos

Cada desafio tem uma recompensa especial quando você acerta! 💰
Lembre-se: você pode tentar quantas vezes precisar, mas cuidado com seus corações! ❤️

Vamos lá, você consegue! 🌟`,
      activities: [
        {
          type: "math-input",
          title: "📚 Desafio 1: Distribuindo Livros",
          instruction: "Uma prateleira da biblioteca precisa de manutenção. Os livros dessa prateleira serão distribuídos igualmente em duas caixas.",
          question: "1️⃣ Distribuímos igualmente 18 livros em 2 caixas. Quantos livros devem ser colocados em cada caixa?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "9", placeholder: "___" },
            { label: "", correctValue: "livros", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📚 Desafio 2: Mais Livros",
          instruction: "Distribua igualmente os livros nas caixas.",
          question: "2️⃣ Distribuí igualmente 15 livros em 3 caixas. Quantos livros obtive em cada caixa?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "5", placeholder: "___" },
            { label: "", correctValue: "livros", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🪑 Desafio 3: Organizando Cadeiras",
          instruction: "A professora do 2º ano está organizando a sala de aula. Ela quer distribuir igualmente 18 cadeiras em 3 mesas.",
          question: "3️⃣ Quantas cadeiras ela vai colocar em cada mesa?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "cadeiras", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🚐 Desafio 4: Visitando a Biblioteca",
          instruction: "Os estudantes do 2º ano vão visitar a biblioteca da cidade. Ao todo, 30 pessoas, entre estudantes e professores, serão distribuídas igualmente em 2 vans.",
          question: "4️⃣ Quantas pessoas irão em cada van?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "pessoas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍫 Desafio 5: Distribuindo Bombons",
          instruction: "Rafael fez 35 bombons para vender. Ele distribuirá igualmente esses bombons em 5 caixas.",
          question: "5️⃣ Quantos bombons ele deve colocar em cada caixa?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "7", placeholder: "___" },
            { label: "", correctValue: "bombons", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🔵 Desafio 6: Bolinhas de Gude",
          instruction: "Vanessa tem 40 bolinhas de gude em sua coleção. Ela guarda essas bolinhas em 4 sacos com quantidades iguais.",
          question: "6️⃣ Quantas bolinhas Vanessa guarda em cada saco?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "10", placeholder: "___" },
            { label: "", correctValue: "bolinhas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "👥 Desafio 7: Formando Grupos",
          instruction: "A turma da professora Clarissa tem 20 estudantes. Ela precisa formar grupos de 5 estudantes para realizar uma atividade.",
          question: "7️⃣ Quantos grupos a professora vai formar?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" },
            { label: "", correctValue: "grupos", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🐕 Desafio 8: Passeando com Cães",
          instruction: "Rogério é cuidador de cães. Ele passeia com 4 cães de cada vez pela manhã.",
          question: "8️⃣ Quantas vezes Rogério sairá para passear em uma manhã em que ele cuidará de 12 cães?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "3", placeholder: "___" },
            { label: "", correctValue: "vezes", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🧸 Desafio 9: Organizando Brinquedos",
          instruction: "Giovana organiza seus brinquedos em caixas, colocando 5 brinquedos em cada uma.",
          question: "9️⃣ De quantas caixas ela vai precisar para guardar 15 brinquedos?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "3", placeholder: "___" },
            { label: "", correctValue: "caixas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🌹 Desafio 10: Fazendo Buquês",
          instruction: "Sandro é florista. Ele faz buquês de 3 rosas para presentear seus clientes.",
          question: "🔟 Quantos buquês Sandro pode formar com 24 rosas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "8", placeholder: "___" },
            { label: "", correctValue: "buquês", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🛋️ Desafio 11: Presenteando Amigas",
          instruction: "Maria fez 12 almofadas para presentear as amigas. Ela dará 2 almofadas para cada uma.",
          question: "1️⃣1️⃣ Quantas amigas ela pode presentear?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "amigas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "👥 Desafio 12: Metade da Turma",
          instruction: "A professora Clarissa dividiu a turma em 2 grupos e cada grupo ficou com quantidades iguais de estudantes.",
          question: "1️⃣2️⃣ a) Quantos estudantes há na turma da professora Clarissa?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "16", placeholder: "___" },
            { label: "", correctValue: "estudantes", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "👥 Desafio 13: Metade",
          instruction: "A professora dividiu a turma pela metade.",
          question: "1️⃣3️⃣ b) Quantos estudantes ficaram em cada grupo? (Metade de 16)",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "8", placeholder: "___" },
            { label: "", correctValue: "estudantes", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "👕 Desafio 14: Metade das Camisetas",
          instruction: "Luciano precisa separar a metade de suas camisetas para doar.",
          question: "1️⃣4️⃣ a) Luciano tem 18 camisetas. Quantas camisetas ele vai doar? (Metade de 18)",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "9", placeholder: "___" },
            { label: "", correctValue: "camisetas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🛋️ Desafio 15: Metade dos Sofás",
          instruction: "No fim de semana, um lojista vendeu metade do estoque de sofás. Ele vendeu 30 sofás.",
          question: "1️⃣5️⃣ a) Quantos sofás o lojista tinha no estoque antes desse fim de semana?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "60", placeholder: "___" },
            { label: "", correctValue: "sofás", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📚 Desafio 16: Metade das Revistas",
          instruction: "Renato tem 40 revistas de quadrinhos e vai doar metade para a biblioteca do bairro.",
          question: "1️⃣6️⃣ Com quantas revistas Renato vai ficar? (Metade de 40)",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "revistas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🌸 Desafio 17: Terça Parte",
          instruction: "Carolina distribuiu igualmente 15 flores em 3 vasos. A quantidade de flores de cada grupo é chamada de terça parte.",
          question: "1️⃣7️⃣ Qual é a terça parte de 15?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "5", placeholder: "___" },
            { label: "", correctValue: "flores", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "💰 Desafio 18: Gastando a Terça Parte",
          instruction: "Fabrício tinha 18 reais. Ele gastou a terça parte dessa quantia no lanche de ontem na escola.",
          question: "1️⃣8️⃣ a) Quantos reais Fabrício gastou com o lanche? (Terça parte de 18)",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "💰 Desafio 19: Reais Restantes",
          instruction: "Fabrício tinha 18 reais e gastou 6 reais com o lanche.",
          question: "1️⃣9️⃣ b) Com quantos reais Fabrício ficou depois de comprar o lanche?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "12", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎮 Desafio 20: Quarta Parte",
          instruction: "Simone vai distribuir igualmente seus jogos de videogame em 4 caixas. A quantidade de jogos de cada grupo é chamada de quarta parte.",
          question: "2️⃣0️⃣ Simone tem 24 jogos. Qual é a quarta parte de 24?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "jogos", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍎 Desafio 21: Quarta Parte das Maçãs",
          instruction: "Lucas comprou 12 maçãs na feira. Ele vai usar a quarta parte dessas maçãs para fazer uma torta.",
          question: "2️⃣1️⃣ a) Quantas maçãs ele vai usar na torta? (Quarta parte de 12)",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "3", placeholder: "___" },
            { label: "", correctValue: "maçãs", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍎 Desafio 22: Maçãs Restantes",
          instruction: "Lucas comprou 12 maçãs e usou 3 para fazer uma torta.",
          question: "2️⃣2️⃣ b) Quantas maçãs não serão usadas na torta?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "9", placeholder: "___" },
            { label: "", correctValue: "maçãs", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🔘 Desafio 23: Botões nas Camisas",
          instruction: "Em uma camisa são pregados 5 botões.",
          question: "2️⃣3️⃣ Quantos botões são necessários para pregar em 4 camisas desse mesmo modelo?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "botões", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🥭 Desafio 24: Comprando Mangas",
          instruction: "Em uma barraca na feira, 2 mangas custam 5 reais.",
          question: "2️⃣4️⃣ a) Uma pessoa comprou 6 mangas. Quantos reais ela pagou?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍎 Desafio 25: Comprando Maçãs",
          instruction: "Em uma barraca na feira, 5 maçãs custam 2 reais.",
          question: "2️⃣5️⃣ b) Ao comprar 10 maçãs, quanto será gasto?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🦒 Desafio 26: Visitando o Zoológico",
          instruction: "A turma do 2º ano foi ao zoológico. Metade dos 30 estudantes gostou de ver as girafas. A terça parte do restante gostou dos elefantes.",
          question: "2️⃣6️⃣ Quantos estudantes gostaram de ver os elefantes?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "5", placeholder: "___" },
            { label: "", correctValue: "estudantes", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📏 Desafio 27: Convertendo Metros",
          instruction: "Rafaela é artesã e precisa de 2 metros de fita para completar o trabalho. Lembre-se: 1 metro = 100 centímetros.",
          question: "2️⃣7️⃣ Quantos centímetros correspondem a 2 metros?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "200", placeholder: "___" },
            { label: "", correctValue: "cm", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📚 Desafio 28: Distribuindo Livros (Caderno Mais)",
          instruction: "Distribua igualmente os livros nas caixas.",
          question: "2️⃣8️⃣ Distribuí igualmente 16 livros em 2 caixas. Quantos livros obtive em cada caixa?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "8", placeholder: "___" },
            { label: "", correctValue: "livros", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🖍️ Desafio 29: Distribuindo Canetinhas",
          instruction: "Ronaldo vai distribuir igualmente 28 canetinhas coloridas em 4 potes.",
          question: "2️⃣9️⃣ Quantas canetinhas ele deve colocar em cada pote?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "7", placeholder: "___" },
            { label: "", correctValue: "canetinhas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📚 Desafio 30: Dividindo Revistas com Irmão",
          instruction: "Lucas ganhou 14 revistas em quadrinhos para dividir igualmente com seu irmão.",
          question: "3️⃣0️⃣ Quantas revistas Lucas deve dar ao irmão?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "7", placeholder: "___" },
            { label: "", correctValue: "revistas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "✏️ Desafio 31: Lápis de Cor em Estojos",
          instruction: "Bruno tem 20 lápis de cor e quer colocá-los em 2 estojos separando as cores escuras das cores claras. Distribuindo igualmente os lápis.",
          question: "3️⃣1️⃣ Quantos lápis ficarão em cada estojo?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "10", placeholder: "___" },
            { label: "", correctValue: "lápis", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📚 Desafio 32: Guardando Gibis",
          instruction: "Mariana quer guardar a sua coleção de 28 gibis igualmente em 4 caixas.",
          question: "3️⃣2️⃣ Quantos gibis ficarão em cada caixa?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "7", placeholder: "___" },
            { label: "", correctValue: "gibis", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🐕 Desafio 33: Ração da Luna",
          instruction: "Luna é uma cachorrinha que só pode comer 60 g de ração por dia, divididos entre café da manhã, almoço e jantar.",
          question: "3️⃣3️⃣ Se dividirmos igualmente a quantidade de ração por refeição, quantos gramas de ração ela pode comer por refeição?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "20", placeholder: "___" },
            { label: "", correctValue: "gramas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "⚽ Desafio 34: Organizando Bolas",
          instruction: "O zelador da escola estava arrumando as bolas para a hora do recreio. Ele encontrou 18 bolas e deve dividi-las igualmente em 3 prateleiras do armário.",
          question: "3️⃣4️⃣ Quantas bolas ficarão em cada prateleira?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "6", placeholder: "___" },
            { label: "", correctValue: "bolas", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🍬 Desafio 35: Escolhendo Caixas",
          instruction: "Lina faz docinhos para vender. Ela tem duas opções de caixa: a caixa 1, que tem 3 linhas e 4 colunas (12 docinhos), e a caixa 2, que tem 2 linhas e 5 colunas (10 docinhos).",
          question: "3️⃣5️⃣ a) Se Lina fizer 12 docinhos, qual caixa ela deverá usar?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Caixa 1", correct: true },
            { text: "Caixa 2", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🍬 Desafio 36: Mais Caixas",
          instruction: "Lina faz docinhos para vender. Caixa 1: 3x4=12 docinhos, Caixa 2: 2x5=10 docinhos.",
          question: "3️⃣6️⃣ b) Lina fez 10 docinhos. Qual caixa ela deve usar?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Caixa 1", correct: false },
            { text: "Caixa 2", correct: true }
          ]
        },
        {
          type: "math-input",
          title: "🍬 Desafio 37: Muitos Docinhos",
          instruction: "Lina faz docinhos para vender. Caixa 1: 3x4=12 docinhos, Caixa 2: 2x5=10 docinhos.",
          question: "3️⃣7️⃣ c) Se Lina fizer 20 docinhos, quantas caixas 2 serão usadas?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "2", placeholder: "___" },
            { label: "", correctValue: "caixas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍫 Desafio 38: Metade do Chocolate",
          instruction: "Camila comeu metade de uma barra de chocolate com 100g.",
          question: "3️⃣8️⃣ a) Quanto é a metade de 100 g?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "50", placeholder: "___" },
            { label: "", correctValue: "g", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍫 Desafio 39: Chocolate Restante",
          instruction: "Camila comeu metade de uma barra de chocolate com 100g (50g).",
          question: "3️⃣9️⃣ b) Quantos gramas da barra de chocolate restaram?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "50", placeholder: "___" },
            { label: "", correctValue: "g", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🛋️ Desafio 40: Almofadas nos Sofás",
          instruction: "Na sala da casa de Marta, há 2 sofás e 22 almofadas. Ela quer colocar metade em cada sofá.",
          question: "4️⃣0️⃣ Quantas almofadas deverão ser colocadas em cada sofá?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "11", placeholder: "___" },
            { label: "", correctValue: "almofadas", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🧸 Desafio 41: Bichinhos de Pelúcia",
          instruction: "Jana quer dividir a coleção de 21 bichinhos de pelúcia em 3 baús. Se ela dividir os bichinhos em quantidades iguais.",
          question: "4️⃣1️⃣ Quantos bichinhos ficarão em cada baú?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "7", placeholder: "___" },
            { label: "", correctValue: "bichinhos", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "💰 Desafio 42: Doando Terça Parte",
          instruction: "Jussara tem 45 reais e quer doar a terça parte dessa quantia.",
          question: "4️⃣2️⃣ Qual valor será doado por Jussara?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "15", placeholder: "___" },
            { label: "", correctValue: "reais", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🎮 Desafio 43: Vendendo Quarta Parte",
          instruction: "Gustavo quer vender a quarta parte dos seus jogos de videogame. Ele tem, no total, 36 jogos.",
          question: "4️⃣3️⃣ Quantos jogos ele quer vender?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "9", placeholder: "___" },
            { label: "", correctValue: "jogos", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📚 Desafio 44: Doando Livros",
          instruction: "Miguel decidiu doar os livros que ele já leu para outras crianças. Ele tem, no total, 40 livros e vai doar a quarta parte desses livros.",
          question: "4️⃣4️⃣ Quantos livros ele doará?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "10", placeholder: "___" },
            { label: "", correctValue: "livros", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍎 Desafio 45: Maçãs na Feira",
          instruction: "Para as vendas da feira de domingo, um comerciante separou algumas caixas de maçã e limão.",
          question: "4️⃣5️⃣ a) Havia 10 caixas com 8 maçãs em cada. Quantas maçãs havia ao todo?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "80", placeholder: "___" },
            { label: "", correctValue: "maçãs", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🍋 Desafio 46: Limões na Feira",
          instruction: "Para as vendas da feira de domingo, um comerciante separou algumas caixas de maçã e limão.",
          question: "4️⃣6️⃣ b) Havia 4 caixas com 10 limões em cada. Quantas limões havia ao todo?",
          reward: "💰 Você ganhou +5 moedas!",
          inputFields: [
            { label: "", correctValue: "40", placeholder: "___" },
            { label: "", correctValue: "limões", placeholder: "___" }
          ]
        },
        {
          type: "match",
          title: "🔗 Desafio 47: Relacionando Multiplicações",
          instruction: "Relacione cada multiplicação ao resultado correto.",
          question: "4️⃣7️⃣ Relacione cada multiplicação ao resultado correto:",
          reward: "⭐ Você ganhou +10 XP!",
          matchPairs: [
            { image: "assets/imagens_livro/multiplicacao_3x5.jpg", description: "3️⃣ ✖️ 5️⃣", matchId: "15" },
            { image: "assets/imagens_livro/multiplicacao_4x2.jpg", description: "4️⃣ ✖️ 2️⃣", matchId: "8" },
            { image: "assets/imagens_livro/multiplicacao_5x2.jpg", description: "5️⃣ ✖️ 2️⃣", matchId: "10" },
            { image: "assets/imagens_livro/multiplicacao_5x5.jpg", description: "5️⃣ ✖️ 5️⃣", matchId: "25" },
            { image: "assets/imagens_livro/multiplicacao_4x3.jpg", description: "4️⃣ ✖️ 3️⃣", matchId: "12" },
            { image: "assets/imagens_livro/multiplicacao_1x2.jpg", description: "1️⃣ ✖️ 2️⃣", matchId: "2" }
          ]
        }
      ],
      successMessage: "🎉 PARABÉNS, ANTHONY! 🎉\n\nVocê completou TODOS os desafios de Divisão! 🏆\n\nVocê é um verdadeiro MESTRE DA DIVISÃO! ⭐\n\nContinue assim e você vai se tornar um campeão! 💪✨"
    },
    {
      id: 4,
      title: "🌟 Desafio: Grupos e Multiplicação",
      icon: "🌟",
      image: "assets/anexos/IMG-20251129-WA0003.jpg",
      textTitle: "🌟 DESAFIO: GRUPOS E MULTIPLICAÇÃO 🌟",
      textImages: [],
      textImageTitles: [],
      textContent: `Olá, Mestre da Matemática! 👋

Bem-vindo ao desafio de Grupos e Multiplicação! 🌟

Aqui você vai praticar:
✨ Seleção e contagem de objetos
✨ Transformar repetições em multiplicação
✨ Contar grupos e visualizar multiplicação

Cada desafio que você completar te dará moedas de energia e XP! 💰⭐

Vamos começar? 🚀`,
      showImageIcon: false,
      observationQuestions: [
        "Quantos grupos você consegue ver?",
        "Como transformar repetições em multiplicação?",
        "Consegue contar os grupos?"
      ],
      explanation: `Estes são desafios de grupos e multiplicação para você praticar de forma divertida! 🎮
      
Cada desafio tem uma recompensa especial quando você acerta! 💰

Lembre-se: você pode tentar quantas vezes precisar, mas cuidado com seus corações! ❤️

Vamos lá, você consegue! 🌟`,
      activities: [
        {
          type: "ice-cream-selection",
          title: "🍦 Projeto Matemática na Palma da Mão",
          instruction: "Pinte uma dúzia de sorvetes. Clique nos sorvetes para selecioná-los!",
          question: "1️⃣ Pinte uma dúzia de sorvete",
          reward: "⭐ Você ganhou +10 XP!",
          iceCreamSelection: {
            totalIceCreams: 18,
            targetCount: 12,
            emoji: "🍦"
          },
          inputFields: [
            { label: "a) Quantos sorvetes você pintou?", correctValue: "12", placeholder: "___" },
            { label: "b) Quantos sorvetes ficaram sem pintar?", correctValue: "6", placeholder: "___" },
            { label: "c) Quantos sorvetes faltam para completar 20?", correctValue: "2", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🌟 Repetição Vira Multiplicação",
          instruction: "Olhe quantas vezes o número 3 aparece! Conte e transforme em multiplicação.",
          question: "2️⃣ Complete: 3+3+3+3+3+3+3 é igual a:",
          reward: "💰 Você ganhou +5 moedas de energia!",
          inputFields: [
            { label: "Valor total:", correctValue: "21", placeholder: "___" },
            { label: "Conta:", correctValue: "3 x 7 = 21", placeholder: "__ x __ = __" }
          ]
        },
        {
          type: "math-input",
          instruction: "Agora vamos contar quantas vezes o número 7 aparece!",
          question: "3️⃣ Complete: 7+7+7+7 é igual a:",
          reward: "💰 Você ganhou +5 moedas de energia!",
          inputFields: [
            { label: "Valor total:", correctValue: "28", placeholder: "___" },
            { label: "Conta:", correctValue: "7 x 4 = 28", placeholder: "__ x __ = __" }
          ]
        },
        {
          type: "math-input",
          instruction: "Vamos contar quantas vezes o número 5 aparece!",
          question: "4️⃣ Complete: 5+5+5+5+5 é igual a:",
          reward: "💰 Você ganhou +5 moedas de energia!",
          inputFields: [
            { label: "Valor total:", correctValue: "25", placeholder: "___" },
            { label: "Conta:", correctValue: "5 x 5 = 25", placeholder: "__ x __ = __" }
          ]
        },
        {
          type: "math-input",
          instruction: "Agora vamos contar quantas vezes o número 9 aparece!",
          question: "5️⃣ Complete: 9+9+9 é igual a:",
          reward: "💰 Você ganhou +5 moedas de energia!",
          inputFields: [
            { label: "Valor total:", correctValue: "27", placeholder: "___" },
            { label: "Conta:", correctValue: "9 x 3 = 27", placeholder: "__ x __ = __" }
          ]
        },
        {
          type: "visual-multiplication",
          title: "🌟 Desafio 6: Contando Grupos de Peões",
          instruction: "Olhe os grupos de peões! Conte quantos peões tem em cada grupo e quantos grupos existem.",
          question: "6️⃣ Junte as 🔴 em grupos e complete a multiplicação:",
          reward: "⭐ Você ganhou +15 XP e +5 moedas!",
          visualMultiplication: {
            emojiGroups: [
              { emoji: "🔴", count: 7 },
              { emoji: "🔴", count: 7 },
              { emoji: "🔴", count: 7 }
            ],
            correctAnswers: ["7 x 3 = 21", "3 x 7 = 21"],
            inputFields: [
              { label: "Primeiro número:", correctValue: "7", placeholder: "__" },
              { label: "Segundo número:", correctValue: "3", placeholder: "__" },
              { label: "Resultado:", correctValue: "21", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          instruction: "Olhe os grupos de petecas! Conte quantas petecas tem em cada grupo e quantos grupos existem.",
          question: "7️⃣ Junte as 🏸 em grupos e complete a multiplicação:",
          reward: "⭐ Você ganhou +10 XP e +3 moedas!",
          visualMultiplication: {
            emojiGroups: [
              { emoji: "🏸", count: 3 },
              { emoji: "🏸", count: 3 },
              { emoji: "🏸", count: 3 },
              { emoji: "🏸", count: 3 }
            ],
            correctAnswers: ["3 x 4 = 12", "4 x 3 = 12"],
            inputFields: [
              { label: "Primeiro número:", correctValue: "3", placeholder: "__" },
              { label: "Segundo número:", correctValue: "4", placeholder: "__" },
              { label: "Resultado:", correctValue: "12", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 8: Quadradinhos na Malha",
          instruction: "Conte os quadradinhos na malha! Quantos tem em cada linha? E quantas linhas?",
          question: "8️⃣ Observe os quadrados na malha e complete a operação:",
          reward: "💰 Você ganhou +8 moedas!",
          visualMultiplication: {
            gridCells: 4,
            gridRows: 2,
            gridCols: 2,
            correctAnswers: ["2 x 2 = 4"],
            inputFields: [
              { label: "2 x", correctValue: "2", placeholder: "__" },
              { label: "=", correctValue: "4", placeholder: "__" }
            ]
          }
        },
        {
          type: "visual-multiplication",
          title: "📐 Desafio 9: Mais Quadradinhos!",
          instruction: "Agora uma malha maior! Conte com cuidado!",
          question: "9️⃣ Observe os quadrados na malha e complete a operação:",
          reward: "💰 Você ganhou +8 moedas!",
          visualMultiplication: {
            gridCells: 9,
            gridRows: 3,
            gridCols: 3,
            correctAnswers: ["3 x 3 = 9"],
            inputFields: [
              { label: "3 x", correctValue: "3", placeholder: "__" },
              { label: "=", correctValue: "9", placeholder: "__" }
            ]
          }
        }
      ],
      successMessage: "🎉 PARABÉNS, ANTHONY! 🎉\n\nVocê completou TODOS os desafios de Grupos e Multiplicação! 🏆\n\nVocê é um verdadeiro MESTRE DA MULTIPLICAÇÃO! ⭐\n\nContinue assim e você vai se tornar um campeão! 💪✨"
    },
    {
      id: 5,
      title: "🎯 Desafio: Situações Problemas",
      icon: "🎯",
      image: "assets/anexos/IMG-20251129-WA0004.jpg",
      textTitle: "🎯 DESAFIO: SITUAÇÕES PROBLEMAS 🎯",
      textImages: [],
      textImageTitles: [],
      textContent: `Olá, Mestre da Matemática! 👋

Bem-vindo ao desafio de Situações Problemas! 🎯

Aqui você vai resolver problemas do dia a dia usando matemática:
🎯 Problemas com zoológico
🎯 Problemas com futebol
🎯 E muito mais!

Cada desafio que você completar te dará moedas de energia e XP! 💰⭐

Vamos começar? 🚀`,
      showImageIcon: false,
      observationQuestions: [
        "Quais situações aparecem nos problemas?",
        "Quais operações você precisa usar?",
        "Consegue identificar os números importantes?"
      ],
      explanation: `Estes são problemas do dia a dia para você resolver usando matemática! 🎮
      
Cada problema tem uma recompensa especial quando você acerta! 💰

Lembre-se: você pode tentar quantas vezes precisar, mas cuidado com seus corações! ❤️

Vamos lá, você consegue! 🌟`,
      activities: [
        {
          type: "cdu-operation",
          title: "🎯 Desafio 1: Aventura no Zoológico",
          instruction: "Monte a conta usando Centena, Dezena e Unidade para descobrir quantas pessoas visitaram o zoológico!",
          question: "1️⃣ O zoológico foi visitado por 432 pessoas no sábado e 219 no domingo. Quantas pessoas visitaram no total?",
          reward: "⭐ Você ganhou +10 XP!",
          cduOperation: {
            operation: 'addition',
            number1: 432,
            number2: 219,
            correctAnswer: 651
          }
        },
        {
          type: "cdu-operation",
          title: "⚽ Desafio 2: Partida de Futebol",
          instruction: "Vamos descobrir quantos adultos estavam assistindo o jogo!",
          question: "2️⃣ Estavam assistindo uma partida 360 pessoas. Dessas, 55 eram crianças. Quantos adultos assistiam?",
          reward: "⭐ Você ganhou +10 XP!",
          cduOperation: {
            operation: 'subtraction',
            number1: 360,
            number2: 55,
            correctAnswer: 305
          }
        },
        {
          type: "cdu-operation",
          title: "🎯 Desafio 3: Nova Situação Problema",
          instruction: "Monte a conta usando Centena, Dezena e Unidade para resolver o problema!",
          question: "3️⃣ Uma escola tem 287 alunos no período da manhã e 156 alunos no período da tarde. Quantos alunos tem a escola no total?",
          reward: "⭐ Você ganhou +10 XP!",
          cduOperation: {
            operation: 'addition',
            number1: 287,
            number2: 156,
            correctAnswer: 443
          }
        },
        {
          type: "cdu-operation",
          title: "🎯 Desafio 4: Mais Uma Situação Problema",
          instruction: "Vamos resolver mais um problema usando C D U!",
          question: "4️⃣ Em uma biblioteca havia 425 livros. Foram emprestados 138 livros. Quantos livros ainda estão na biblioteca?",
          reward: "⭐ Você ganhou +10 XP!",
          cduOperation: {
            operation: 'subtraction',
            number1: 425,
            number2: 138,
            correctAnswer: 287
          }
        }
      ],
      successMessage: "🎉 PARABÉNS, ANTHONY! 🎉\n\nVocê completou TODOS os desafios de Situações Problemas! 🏆\n\nVocê é um verdadeiro RESOLVEDOR DE PROBLEMAS! ⭐\n\nContinue assim e você vai se tornar um campeão! 💪✨"
    },
    {
      id: 6,
      title: "⚡ Desafio: Continhas Rápidas",
      icon: "⚡",
      image: "assets/anexos/IMG-20251129-WA0005.jpg",
      textTitle: "⚡ DESAFIO: CONTINHAS RÁPIDAS ⚡",
      textImages: [],
      textImageTitles: [],
      textContent: `Olá, Mestre da Matemática! 👋

Bem-vindo ao desafio de Continhas Rápidas! ⚡

Aqui você vai praticar adições e subtrações:
⚡ Continhas de adição
⚡ Continhas de subtração
⚡ Monte a conta usando C D U

Cada desafio que você completar te dará moedas de energia e XP! 💰⭐

Vamos começar? 🚀`,
      showImageIcon: false,
      observationQuestions: [
        "Quais operações aparecem?",
        "Como montar a conta usando C D U?",
        "Consegue resolver rapidamente?"
      ],
      explanation: `Estas são continhas rápidas para você praticar! 🎮
      
Cada continha tem uma recompensa especial quando você acerta! 💰

Lembre-se: você pode tentar quantas vezes precisar, mas cuidado com seus corações! ❤️

Vamos lá, você consegue! 🌟`,
      activities: [
        {
          type: "cdu-operation",
          title: "⚡ Desafio 1: Continha Rápida - Adição",
          instruction: "Vamos somar! Monte a conta usando C D U.",
          question: "1️⃣ Complete: 122 + 16 =",
          reward: "💰 Você ganhou +3 moedas!",
          cduOperation: {
            operation: 'addition',
            number1: 122,
            number2: 16,
            correctAnswer: 138
          }
        },
        {
          type: "cdu-operation",
          title: "⚡ Desafio 2: Mais Uma Continha!",
          instruction: "Outra adição para você praticar!",
          question: "2️⃣ Complete: 348 + 14 =",
          reward: "💰 Você ganhou +3 moedas!",
          cduOperation: {
            operation: 'addition',
            number1: 348,
            number2: 14,
            correctAnswer: 362
          }
        },
        {
          type: "cdu-operation",
          title: "⚡ Desafio 3: Continha de Subtração",
          instruction: "Agora vamos subtrair! Cuidado com os números!",
          question: "3️⃣ Complete: 190 - 32 =",
          reward: "💰 Você ganhou +3 moedas!",
          cduOperation: {
            operation: 'subtraction',
            number1: 190,
            number2: 32,
            correctAnswer: 158
          }
        },
        {
          type: "cdu-operation",
          title: "⚡ Desafio 4: Continha Rápida - Adição",
          instruction: "Mais uma adição para você praticar!",
          question: "4️⃣ Complete: 245 + 37 =",
          reward: "💰 Você ganhou +3 moedas!",
          cduOperation: {
            operation: 'addition',
            number1: 245,
            number2: 37,
            correctAnswer: 282
          }
        },
        {
          type: "cdu-operation",
          title: "⚡ Desafio 5: Continha de Subtração",
          instruction: "Outra subtração para você praticar!",
          question: "5️⃣ Complete: 278 - 45 =",
          reward: "💰 Você ganhou +3 moedas!",
          cduOperation: {
            operation: 'subtraction',
            number1: 278,
            number2: 45,
            correctAnswer: 233
          }
        },
        {
          type: "cdu-operation",
          title: "⚡ Desafio 6: Continha de Multiplicação",
          instruction: "Agora vamos multiplicar! Monte a conta usando C D U.",
          question: "6️⃣ Complete: 23 x 4 =",
          reward: "💰 Você ganhou +5 moedas!",
          cduOperation: {
            operation: 'multiplication',
            number1: 23,
            number2: 4,
            correctAnswer: 92
          }
        }
      ],
      successMessage: "🎉 PARABÉNS, ANTHONY! 🎉\n\nVocê completou TODOS os desafios de Continhas Rápidas! 🏆\n\nVocê é um verdadeiro MESTRE DAS CONTINHAS! ⭐\n\nContinue assim e você vai se tornar um campeão! 💪✨"
    },
    {
      id: 7,
      title: "📐 Desafio: Tabuada e Formas",
      icon: "📐",
      image: "assets/anexos/IMG-20251129-WA0006.jpg",
      textTitle: "📐 DESAFIO: TABUADA E FORMAS 📐",
      textImages: [
        "assets/anexos/IMG-20251129-WA0006.jpg"
      ],
      textImageTitles: [
        "Tabuada e Formas"
      ],
      textContent: `Olá, Mestre da Matemática! 👋

Bem-vindo ao desafio de Tabuada e Formas! 📐

Aqui você vai praticar:
📐 Tabuada do 2
📐 Formas geométricas
📐 Tabuada rápida

Cada desafio que você completar te dará moedas de energia e XP! 💰⭐

Vamos começar? 🚀`,
      showImageIcon: false,
      observationQuestions: [
        "Consegue ver a tabuada do 2?",
        "Quais formas geométricas aparecem?",
        "Consegue resolver rapidamente?"
      ],
      explanation: `Estes são desafios de tabuada e formas para você praticar! 🎮
      
Cada desafio tem uma recompensa especial quando você acerta! 💰

Lembre-se: você pode tentar quantas vezes precisar, mas cuidado com seus corações! ❤️

Vamos lá, você consegue! 🌟`,
      activities: [
        {
          type: "math-input",
          title: "📊 Desafio 1: Tabuada do 2",
          instruction: "Joana vai comprar um lápis que custa 2 reais. Complete o quadro abaixo com o valor dos lápis.",
          question: "1️⃣ Complete a tabela de multiplicação do 2:",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "2 x 1 =", correctValue: "2", placeholder: "___" },
            { label: "2 x 2 =", correctValue: "4", placeholder: "___" },
            { label: "2 x 3 =", correctValue: "6", placeholder: "___" },
            { label: "2 x 4 =", correctValue: "8", placeholder: "___" },
            { label: "2 x 5 =", correctValue: "10", placeholder: "___" },
            { label: "2 x 6 =", correctValue: "12", placeholder: "___" },
            { label: "2 x 7 =", correctValue: "14", placeholder: "___" },
            { label: "2 x 8 =", correctValue: "16", placeholder: "___" },
            { label: "2 x 9 =", correctValue: "18", placeholder: "___" },
            { label: "2 x 10 =", correctValue: "20", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "💡 Desafio 2: Observando a Tabela",
          instruction: "Observe o quadro que você acabou de preencher e responda:",
          question: "2️⃣ Quando aumentamos a quantidade de lápis em 1 unidade, de quanto é o aumento no valor total?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "2", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📊 Desafio 3: Tabuada do 3",
          instruction: "Pedro vai comprar canetas que custam 3 reais cada. Complete o quadro abaixo com o valor das canetas.",
          question: "3️⃣ Complete a tabela de multiplicação do 3:",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "3 x 1 =", correctValue: "3", placeholder: "___" },
            { label: "3 x 2 =", correctValue: "6", placeholder: "___" },
            { label: "3 x 3 =", correctValue: "9", placeholder: "___" },
            { label: "3 x 4 =", correctValue: "12", placeholder: "___" },
            { label: "3 x 5 =", correctValue: "15", placeholder: "___" },
            { label: "3 x 6 =", correctValue: "18", placeholder: "___" },
            { label: "3 x 7 =", correctValue: "21", placeholder: "___" },
            { label: "3 x 8 =", correctValue: "24", placeholder: "___" },
            { label: "3 x 9 =", correctValue: "27", placeholder: "___" },
            { label: "3 x 10 =", correctValue: "30", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "💡 Desafio 4: Observando a Tabela do 3",
          instruction: "Observe o quadro que você acabou de preencher e responda:",
          question: "4️⃣ Quando aumentamos a quantidade de canetas em 1 unidade, de quanto é o aumento no valor total?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "3", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📊 Desafio 5: Tabuada do 4",
          instruction: "Maria vai comprar lapiseiras que custam 4 reais cada. Complete o quadro abaixo com o valor das lapiseiras.",
          question: "5️⃣ Complete a tabela de multiplicação do 4:",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "4 x 1 =", correctValue: "4", placeholder: "___" },
            { label: "4 x 2 =", correctValue: "8", placeholder: "___" },
            { label: "4 x 3 =", correctValue: "12", placeholder: "___" },
            { label: "4 x 4 =", correctValue: "16", placeholder: "___" },
            { label: "4 x 5 =", correctValue: "20", placeholder: "___" },
            { label: "4 x 6 =", correctValue: "24", placeholder: "___" },
            { label: "4 x 7 =", correctValue: "28", placeholder: "___" },
            { label: "4 x 8 =", correctValue: "32", placeholder: "___" },
            { label: "4 x 9 =", correctValue: "36", placeholder: "___" },
            { label: "4 x 10 =", correctValue: "40", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "💡 Desafio 6: Observando a Tabela do 4",
          instruction: "Observe o quadro que você acabou de preencher e responda:",
          question: "6️⃣ Quando aumentamos a quantidade de lapiseiras em 1 unidade, de quanto é o aumento no valor total?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📊 Desafio 7: Tabuada do 5",
          instruction: "Carlos vai comprar borrachas que custam 5 reais cada. Complete o quadro abaixo com o valor das borrachas.",
          question: "7️⃣ Complete a tabela de multiplicação do 5:",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "5 x 1 =", correctValue: "5", placeholder: "___" },
            { label: "5 x 2 =", correctValue: "10", placeholder: "___" },
            { label: "5 x 3 =", correctValue: "15", placeholder: "___" },
            { label: "5 x 4 =", correctValue: "20", placeholder: "___" },
            { label: "5 x 5 =", correctValue: "25", placeholder: "___" },
            { label: "5 x 6 =", correctValue: "30", placeholder: "___" },
            { label: "5 x 7 =", correctValue: "35", placeholder: "___" },
            { label: "5 x 8 =", correctValue: "40", placeholder: "___" },
            { label: "5 x 9 =", correctValue: "45", placeholder: "___" },
            { label: "5 x 10 =", correctValue: "50", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "💡 Desafio 8: Observando a Tabela do 5",
          instruction: "Observe o quadro que você acabou de preencher e responda:",
          question: "8️⃣ Quando aumentamos a quantidade de borrachas em 1 unidade, de quanto é o aumento no valor total?",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "", correctValue: "5", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🔷 Desafio 9: Formas Geométricas",
          instruction: "Vamos aprender sobre o quadrado! Escolha todas as características corretas.",
          question: "9️⃣ Quais são características do quadrado?",
          reward: "💰 Você ganhou +5 moedas!",
          options: [
            { text: "4 lados iguais", correct: true },
            { text: "4 cantos", correct: true },
            { text: "Não tem profundidade", correct: true },
            { text: "3 lados", correct: false }
          ],
          allowMultiple: true
        },
        {
          type: "multiple-choice",
          title: "⚡ Desafio 10: Tabuada Rápida",
          instruction: "Vamos testar sua tabuada do 2!",
          question: "🔟 Complete: 2 x 5 =",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "10", correct: true },
            { text: "8", correct: false },
            { text: "12", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          instruction: "Mais uma questão da tabuada do 2!",
          question: "1️⃣1️⃣ Complete: 2 x 3 =",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "6", correct: true },
            { text: "5", correct: false },
            { text: "7", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          instruction: "Continue testando a tabuada do 2!",
          question: "1️⃣2️⃣ Complete: 2 x 7 =",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "14", correct: true },
            { text: "12", correct: false },
            { text: "16", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          instruction: "Mais uma questão!",
          question: "1️⃣3️⃣ Complete: 2 x 9 =",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "18", correct: true },
            { text: "16", correct: false },
            { text: "20", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "⚡ Desafio 14: Última Questão da Tabuada",
          instruction: "Última questão! Vamos testar sua tabuada do 2!",
          question: "1️⃣4️⃣ Complete: 2 x 10 =",
          reward: "🎉 Você ganhou +10 XP e +5 moedas! Parabéns!",
          options: [
            { text: "20", correct: true },
            { text: "18", correct: false },
            { text: "22", correct: false }
          ]
        }
      ],
      successMessage: "🎉 PARABÉNS, ANTHONY! 🎉\n\nVocê completou TODOS os desafios de Tabuada e Formas! 🏆\n\nVocê é um verdadeiro MESTRE DA TABUADA! ⭐\n\nContinue assim e você vai se tornar um campeão! 💪✨"
    },
    {
      id: 8,
      title: "📐 Geometria - Figuras Planas",
      icon: "📐",
      image: "assets/imagens_livro/geometria.jpg",
      textTitle: "GEOMETRIA - FIGURAS PLANAS",
      textContent: `Olá, Mestre da Geometria! 👋

Bem-vindo ao mundo das formas! 📐

Aqui você vai aprender sobre:
🔲 Quadrado - 4 lados iguais
📐 Retângulo - 4 lados (opostos iguais)
🔺 Triângulo - 3 lados
⭕ Círculo - sem lados, sem pontas
🧩 Tangram - quebra-cabeça com 7 peças

Cada desafio que você completar te dará moedas de energia e XP! 💰⭐

Vamos começar? 🚀`,
      showImageIcon: true,
      observationQuestions: [
        "Quantos lados tem cada figura?",
        "Quais são as características de cada forma?",
        "Consegue identificar as figuras nas obras de arte?"
      ],
      explanation: `Estes são desafios de geometria para você aprender sobre figuras planas! 🎮

Você vai aprender sobre:
- Quadrado: 4 lados iguais, 4 pontas, 4 cantos
- Retângulo: 4 lados, lados opostos iguais
- Triângulo: 3 lados, 3 pontas, 3 cantos
- Círculo: sem lados, sem pontas, sem cantos
- Tangram: 7 peças (triângulos, quadrado, paralelogramo)

Cada desafio tem uma recompensa especial quando você acerta! 💰
Lembre-se: você pode tentar quantas vezes precisar, mas cuidado com seus corações! ❤️

Vamos lá, você consegue! 🌟`,
      activities: [
        {
          type: "multiple-choice",
          title: "🎨 Desafio 1: Figuras Geométricas Planas",
          instruction: "Muitas obras de arte apresentam figuras geométricas planas em suas composições. Vamos aprender sobre elas!",
          question: "1️⃣ Qual dessas é uma figura geométrica plana?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Quadrado, retângulo, triângulo, círculo", correct: true },
            { text: "Cubo, esfera, cilindro", correct: false },
            { text: "Pirâmide, cone", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🔲 Desafio 2: Identificando o Quadrado",
          instruction: "Larissa fez um contorno usando 4 palitos iguais para representar uma figura. Que figura ela fez?",
          question: "2️⃣ O contorno montado por Larissa se parece com qual figura geométrica plana?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Quadrado", correct: true },
            { text: "Retângulo", correct: false },
            { text: "Triângulo", correct: false },
            { text: "Círculo", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "🔲 Desafio 3: Palitos do Quadrado",
          instruction: "Rodrigo também fez alguns contornos usando palitos de madeira iguais para representar figuras.",
          question: "3️⃣ Quantos palitos Rodrigo usou para fazer o contorno que se parece com um quadrado?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" },
            { label: "", correctValue: "palitos", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🔲 Desafio 4: Características do Quadrado",
          instruction: "🖼️ Observe o quadrado na malha quadriculada e suas características.",
          question: "4️⃣ Quais são algumas características do quadrado?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Tem 4 lados, 4 pontas, todos os lados iguais", correct: true },
            { text: "Tem 3 lados, 3 pontas", correct: false },
            { text: "Tem 5 lados, 5 pontas", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "📐 Desafio 5: Retângulo com Palitos",
          instruction: "Larissa está tentando fazer o contorno de um retângulo usando palitos. Rodrigo também fez um retângulo usando 10 palitos.",
          question: "5️⃣ Quantos palitos Rodrigo usou para fazer o contorno desse retângulo?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "10", placeholder: "___" },
            { label: "", correctValue: "palitos", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "📐 Desafio 6: Retângulos na Malha",
          instruction: "🖼️ Veja como foram representados alguns retângulos na malha quadriculada, colorindo 12 quadradinhos para compor cada retângulo.",
          question: "6️⃣ O que podemos afirmar sobre a medida dos lados de um retângulo?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Os retângulos têm 4 lados, 4 pontas e 4 cantos que coincidem com os fios da malha quadriculada", correct: true },
            { text: "Os retângulos têm 3 lados iguais", correct: false },
            { text: "Os retângulos têm todos os lados iguais", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "📐 Desafio 7: Retângulos com 12 Quadradinhos",
          instruction: "🖼️ Desenhe todas as maneiras diferentes de representar um retângulo colorindo 12 quadradinhos na malha quadriculada.",
          question: "7️⃣ Quantas maneiras diferentes existem de representar um retângulo com 12 quadradinhos? (Exemplos: 1x12, 2x6, 3x4)",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "3", placeholder: "___" },
            { label: "", correctValue: "maneiras", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "📐 Desafio 8: Retângulos com 24 Quadradinhos",
          instruction: "🖼️ Desenhe todas as maneiras diferentes de representar um retângulo colorindo 24 quadradinhos na malha quadriculada.",
          question: "8️⃣ Quantas maneiras diferentes existem de representar um retângulo com 24 quadradinhos? (Exemplos: 1x24, 2x12, 3x8, 4x6)",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "4", placeholder: "___" },
            { label: "", correctValue: "maneiras", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🎨 Desafio 9: Triângulos na Obra de Kandinsky",
          instruction: "🖼️ Observe a obra 'Negro e violeta', do artista russo Wassily Kandinsky, de 1923. Esta obra é abstrata e contém várias figuras geométricas.",
          question: "9️⃣ Identifique alguns triângulos que você vê nessa obra de arte. Como você identificou esses triângulos?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Triângulos têm 3 lados, 3 pontas e 3 cantos", correct: true },
            { text: "Triângulos têm 4 lados iguais", correct: false },
            { text: "Triângulos não têm lados", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🎨 Desafio 10: Outras Figuras na Obra de Kandinsky",
          instruction: "🖼️ Na obra 'Negro e violeta' de Kandinsky, além de triângulos, há outras figuras geométricas planas.",
          question: "🔟 Que outras figuras geométricas planas você identifica nessa obra?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Círculos, retângulos e quadrados", correct: true },
            { text: "Apenas triângulos", correct: false },
            { text: "Apenas círculos", correct: false }
          ]
        },
        {
          type: "fill-blank",
          title: "🎨 Desafio 11: Desenho Inspirado em Kandinsky",
          instruction: "Inspire-se nas obras de Wassily Kandinsky e faça um desenho usando figuras geométricas planas. Abaixo, escreva o nome das figuras geométricas que você usou em seu desenho.",
          question: "1️⃣1️⃣ Escreva o nome das figuras geométricas que você usou:",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "Figuras:", correctValue: "triângulo, círculo, retângulo, quadrado", placeholder: "Ex: triângulo, círculo..." }
          ]
        },
        {
          type: "multiple-choice",
          title: "⭕ Desafio 12: Círculos na Obra de Milhazes",
          instruction: "🖼️ Observe a obra 'Modinha', que a artista Beatriz Milhazes criou em 2007. Esta obra é rica em formas circulares.",
          question: "1️⃣2️⃣ Mostre aos colegas e ao professor as formas circulares na obra acima. O que caracteriza um círculo?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "O círculo não tem lados, nem pontas, nem cantos", correct: true },
            { text: "O círculo tem 4 lados iguais", correct: false },
            { text: "O círculo tem 3 pontas", correct: false }
          ]
        },
        {
          type: "fill-blank",
          title: "⭕ Desafio 13: Desenho Inspirado em Milhazes",
          instruction: "Inspire-se na obra de Beatriz Milhazes e faça um desenho usando círculos.",
          question: "1️⃣3️⃣ Escreva quantos círculos você usou em seu desenho:",
          reward: "⭐ Você ganhou +10 XP!",
          inputFields: [
            { label: "Quantidade de círculos:", correctValue: "vários", placeholder: "Ex: 5, 10, vários..." }
          ]
        },
        {
          type: "multiple-choice",
          title: "📚 Desafio 14: Características do Quadrado",
          instruction: "Relembre o que você estudou sobre figuras geométricas planas.",
          question: "1️⃣4️⃣ O quadrado tem quantos lados, pontas e cantos?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "4 lados, 4 pontas e 4 cantos. Todos os lados têm medidas iguais", correct: true },
            { text: "3 lados, 3 pontas e 3 cantos", correct: false },
            { text: "5 lados, 5 pontas e 5 cantos", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "📚 Desafio 15: Características do Retângulo",
          instruction: "Relembre o que você estudou sobre o retângulo.",
          question: "1️⃣5️⃣ O retângulo tem quantos lados, pontas e cantos?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "4 lados, 4 pontas e 4 cantos. Os lados opostos têm medidas iguais", correct: true },
            { text: "3 lados, 3 pontas e 3 cantos", correct: false },
            { text: "Todos os lados têm medidas iguais", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "📚 Desafio 16: Características do Triângulo",
          instruction: "Relembre o que você estudou sobre o triângulo.",
          question: "1️⃣6️⃣ O triângulo tem quantos lados, pontas e cantos?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "3 lados, 3 pontas e 3 cantos", correct: true },
            { text: "4 lados, 4 pontas e 4 cantos", correct: false },
            { text: "Não tem lados, nem pontas, nem cantos", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "📚 Desafio 17: Características do Círculo",
          instruction: "Relembre o que você estudou sobre o círculo.",
          question: "1️⃣7️⃣ O círculo tem quantos lados, pontas e cantos?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Não tem lados, nem pontas, nem cantos", correct: true },
            { text: "3 lados, 3 pontas e 3 cantos", correct: false },
            { text: "4 lados, 4 pontas e 4 cantos", correct: false }
          ]
        },
        {
          type: "math-input",
          title: "🧩 Desafio 18: Tangram",
          instruction: "O tangram é um quebra-cabeça composto de 7 peças: 2 triângulos grandes, 1 triângulo médio, 2 triângulos pequenos, 1 quadrado e 1 paralelogramo.",
          question: "1️⃣8️⃣ Quantas peças tem o tangram?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "7", placeholder: "___" },
            { label: "", correctValue: "peças", placeholder: "___" }
          ]
        },
        {
          type: "math-input",
          title: "🧩 Desafio 19: Peças do Tangram",
          instruction: "O tangram tem 7 peças: 2 triângulos grandes, 1 triângulo médio, 2 triângulos pequenos, 1 quadrado e 1 paralelogramo.",
          question: "1️⃣9️⃣ Quantos triângulos grandes tem o tangram?",
          reward: "⭐ Você ganhou +5 XP!",
          inputFields: [
            { label: "", correctValue: "2", placeholder: "___" },
            { label: "", correctValue: "triângulos grandes", placeholder: "___" }
          ]
        },
        {
          type: "multiple-choice",
          title: "🧩 Desafio 20: Triângulos do Tangram",
          instruction: "O tangram tem 7 peças no total: 2 triângulos grandes, 1 triângulo médio, 2 triângulos pequenos, 1 quadrado e 1 paralelogramo.",
          question: "2️⃣0️⃣ Quantos triângulos tem o tangram no total? (grandes + médio + pequenos)",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "3 triângulos", correct: false },
            { text: "4 triângulos", correct: false },
            { text: "5 triângulos", correct: true },
            { text: "6 triângulos", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          title: "🎨 Desafio 21: Painéis Coloridos",
          instruction: "🖼️ Podemos colorir figuras geométricas planas, seguindo um padrão, e obter lindos painéis.",
          question: "2️⃣1️⃣ Esse painel é formado por triângulos que, coloridos seguindo determinado padrão, parecem formar outras figuras. Que figuras podem ser formadas?",
          reward: "⭐ Você ganhou +5 XP!",
          options: [
            { text: "Outros triângulos e até mesmo quadrados", correct: true },
            { text: "Apenas círculos", correct: false },
            { text: "Apenas retângulos", correct: false }
          ]
        }
      ],
      successMessage: "🎉 PARABÉNS, ANTHONY! 🎉\n\nVocê completou TODOS os desafios de Geometria! 🏆\n\nVocê é um verdadeiro MESTRE DA GEOMETRIA! ⭐\n\nContinue assim e você vai se tornar um campeão! 💪✨"
    }
  ];

  getMissions(): Mission[] {
    return this.missions;
  }

  getMissionById(id: number): Mission | undefined {
    return this.missions.find(m => m.id === id);
  }

  markMissionAsCompleted(id: number): void {
    const mission = this.missions.find(m => m.id === id);
    if (mission) {
      mission.completed = true;
    }
  }

  isMissionUnlocked(missionId: number): boolean {
    if (missionId === 1) return true;
    const previousMission = this.missions.find(m => m.id === missionId - 1);
    return previousMission?.completed === true;
  }
}


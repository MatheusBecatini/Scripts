#       Dog's       #
#   MATHEUS BECATINI    #
#       PYTHON          #
# ##################### #

import datetime  
from datetime import date 
  
# Encontrar o dia da semana da data
def findDay(date): 
    day, month, year = (int(i) for i in date.split('/'))     
    data = datetime.date(year, month, day)
    ds = data.isoweekday()
    if (ds == 6 or ds == 7):
        return 1
    else:
        return 0

# Calcular valor dos Pet Shops levando em consideração o dia da semana
def calc_canino_feliz(dia, qp, qg):
    pequeno = 20.00
    grande = 40.00
    if (dia == 1):
        pequeno += (pequeno*0.2)
        grande += (grande*0.2)
    valor = (qp * pequeno) + (qg * grande)
    return valor

def calc_vai_rex(dia, qp, qg):
    pequeno = 15.00
    grande = 50.00
    if (dia == 1):
        pequeno = 20.00
        grande = 55.00
    valor = (qp * pequeno) + (qg * grande)
    return valor

def calc_chow(dia, qp, qg):
    pequeno = 30.00
    grande = 45.00
    valor = (qp * pequeno) + (qg * grande)
    return valor


# Verificar qual está mais barato
def confere (dia, qp, qg):
    v1 = calc_canino_feliz(dia, qp, qg) # Valor calculado no canil Meu Canino Feliz
    v2 = calc_vai_rex(dia, qp, qg) # Valor calculado no canil Vai Rex
    v3 = calc_chow(dia, qp, qg)  # Valor calculado no canil ChowChawgas

    if (v1 < v2):
        menor = v1
        pet = 'Meu Canino Feliz'
    else:
        menor = v2
        pet = 'Vai Rex'

    if (v3 <= menor):
        menor = v3
        pet = 'ChowChawgas'

    if (menor == 0):
        input('Não foi inserido a quantidade de cachorros')
        exit()

    print ('\n\nO Pet Shop mais barato para você nesta data é:\n',pet,'\nNo valor de: R$',menor)

    return pet,menor # Deixei o nome e o valor como saída da função apenas para que se ela fosse usada pra outra coisa, já está aqui 
  
# Driver program 

# Distancias
# Meu_Canino_Feliz = 2000
# Vai_Rex: = 1700
# ChowChawgas = 800
##################

flag = 1

while (flag != '0'):

    print('########################################################')
    print('#######                                          #######')
    print('#######       Petshop Mais Barato da Região      #######')
    print('#######                                          #######')
    print('########################################################')
    print(' ')

    # Data
    indate = input('Qual a data que gostaria de verificar o preço? Exemplo: 01/01/2020\n')
    # Verificar qual o dia da semana da data inserida
    try:
        dia = findDay(indate)
    except:
        input('Data inválida\nAperte "enter" para reiniciar.')
        continue
    
    # Quantidades
    # Garantir que o valor inserido seja inteiro
    try:
        quntP = int(input('Quantos são os cachorros pequenos? Exemplo: 1\n'))
    except:
        input('Erro: Valor inválido.\nAperte "enter" para reiniciar.')
        continue
    # Verifica se o valor inserido não é nagativo
    if (quntP < 0):
        input('Quantidade inválida! (Quantidade negativa de cachorros)\nAperte "enter" para reiniciar.')
        continue

    # Garantir que o valor inserido seja inteiro
    try:
        quntG = int(input('Quantos são os cachorros grandes? Exemplo: 3\n'))
    except:
        input('Erro: Valor inválido.\nAperte "enter" para reiniciar.')
        continue
    # Verifica se o valor inserido não é nagativo
    if (quntG < 0):
        input('Quantidade inválida! (Quantidade negativa de cachorros)\nAperte "enter" para reiniciar.')
        continue

    confere(dia, quntP, quntG)
    
    flag = input('Digite "0" para encerrar ou "Enter" para reiniciar: ')

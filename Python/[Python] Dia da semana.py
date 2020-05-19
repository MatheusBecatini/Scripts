from datetime import date

DIAS = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-Feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
]

data = date.today()
print("Data Informada ",data)

indice_da_semana = data.weekday()
print("Indice do dia da semana: ", indice_da_semana)

dia_da_semana = DIAS[indice_da_semana]
print(dia_da_semana)

input()
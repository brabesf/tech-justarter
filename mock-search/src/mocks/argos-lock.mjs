const responses = [
  {
    "hits": 1,
    "lawsuits":[{
      "value": 50000.75,
      "subject": "Exploração do trabalho infantil",
      "related_people": [
        {
          "role": "Autor",
          "name": "Maria Souza"
        },
        {
          "role": "Réu",
          "name": "Empresa Xyz Ltda."
        }
      ],
      "number": "1234567-89.2023.8.09.0001",
      "nature": "Ação Ordinária",
      "lawyers": [
        {
          "name": "Carlos Almeida"
        },
        {
          "name": "Ana Pereira"
        }
      ],
      "kind": "Cível",
      "judge": "João Silva",
      "id": "3",
      "date": "2023-05-10T00:00:00",
      "court": "TJCE",
      "activities": [
        {
          "description": "Distribuído por sorteio",
          "date": 1683763200
        },
        {
          "description": "Citação expedida",
          "date": 1684108800
        }
      ]
    }]
  }, {"hits": 1,
    "lawsuits":[{
      "value": 3740.00,
      "subject": "Indenização por Dano Material",
      "related_people": [
        {
          "role": "Autora",
          "name": "Ana Joyce de Oliveira Silva"
        },
        {
          "role": "Réu",
          "name": "Yamaha Administradora de Consórcio Ltda."
        }
      ],
      "number": "0709782-13.2022.8.02.0058",
      "nature": "Procedimento do Juizado Especial Cível",
      "lawyers": [
        {
          "name": "Naína Paula Costa Duarte"
        },
        {
          "name": "Márcio Alexandre Malfatti"
        }
      ],
      "kind": " Cível",
      "judge": "Durval Mendonça Júnior",
      "id": "5",
      "date": "2022-09-23T00:00:00",
      "court": "TJAL",
      "activities": [
        {
          "description": "Ato Publicado",
          "date": 1678060800
        },
        {
          "description": "Disponibilização no Diário da Justiça Eletrônico",
          "date": 1677801600
        },
        {
          "description": "Remetido recurso eletrônico ao Tribunal de Justiça",
          "date": 1677801600
        },
        {
          "description": "Decisão Proferida",
          "date": 1677715200
        },
        {
          "description": "Conclusos",
          "date": 1675814400
        }
      ]
    }]
  }, {"lawsuits": [],
      "hits": 2}
]

const lawsuit_map = {
  "1234567-89.2023.8.09.0001": 0,
  "0709782-13.2022.8.02.0058": 1
}

function getValue(dict, key, defaultValue) {
  return key in dict ? dict[key] : defaultValue;
}

export const getLawsuit = (req) => {
  return responses[getValue(lawsuit_map, req, 2)];
};

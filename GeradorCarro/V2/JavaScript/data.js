// De acordo com
// https://www.statista.com/statistics/264031/top-selling-car-brands-in-europe-by-number-of-new-registrations/
const marcaCarro = [
	{ weight: 14.4, id: 'Volkswagen' },
	{ weight: 8, id: 'Renault' },
	{ weight: 8, id: 'Peugeot' },
	{ weight: 7.6, id: 'Mercedes' },
	{ weight: 7.6, id: 'Ford' },
	{ weight: 6.8, id: 'BMW' },
	{ weight: 6.1, id: 'Toyota' },
	{ weight: 5.9, id: 'Skoda' },
	{ weight: 5.1, id: 'Citroen' },
	{ weight: 4.9, id: 'Audi' },
	{ weight: 4.7, id: 'Fiat' },
	{ weight: 4.6, id: 'Opel' },
	{ weight: 4.5, id: 'Hyundai' },
	{ weight: 4.1, id: 'Kia' },
	{ weight: 4.0, id: 'Dacia' },
	{ weight: 3.6, id: 'Seat' }
];

const preferencia = [
	{ weight: 6, id: 'MaisBarato' },
	{ weight: 4, id: 'MaisPerto' }
];

const tipoCarro = [
	{ weight: 7.5, id: 'Combustao' },
	{ weight: 2.5, id: 'Eletrico' },
	{ weight: 5, id: 'Hibrido' }
];

const nomes = [
	[
		{
			weight: 24.82,
			id: 'Maria'
		},
		{
			weight: 7.12,
			id: 'Leonor'
		},
		{
			weight: 6.97,
			id: 'Matilde'
		},
		{
			weight: 5.18,
			id: 'Beatriz'
		},
		{
			weight: 5.17,
			id: 'Carolina'
		},
		{
			weight: 4.32,
			id: 'Sofia'
		},
		{
			weight: 4.05,
			id: 'Alice'
		},
		{
			weight: 4.0,
			id: 'Mariana'
		},
		{
			weight: 3.87,
			id: 'Ana'
		},
		{
			weight: 3.66,
			id: 'Benedita'
		},
		{
			weight: 3.65,
			id: 'Francisca'
		},
		{
			weight: 3.55,
			id: 'Margarida'
		},
		{
			weight: 3.53,
			id: 'Inês'
		},
		{
			weight: 3.49,
			id: 'Clara'
		},
		{
			weight: 3.25,
			id: 'Lara'
		},
		{
			weight: 3.14,
			id: 'Laura'
		},
		{
			weight: 2.74,
			id: 'Madalena'
		},
		{
			weight: 2.68,
			id: 'Vitória'
		},
		{
			weight: 2.66,
			id: 'Diana'
		},
		{
			weight: 2.14,
			id: 'Joana'
		}
	],
	[
		{
			weight: 7.18,
			id: 'João'
		},
		{
			weight: 6.85,
			id: 'Francisco'
		},
		{
			weight: 6.75,
			id: 'Santiago'
		},
		{
			weight: 5.94,
			id: 'Afonso'
		},
		{
			weight: 5.73,
			id: 'Duarte'
		},
		{
			weight: 5.7,
			id: 'Tomás'
		},
		{
			weight: 5.65,
			id: 'Martim'
		},
		{
			weight: 5.37,
			id: 'Rodrigo'
		},
		{
			weight: 5.33,
			id: 'Lourenço'
		},
		{
			weight: 5.21,
			id: 'Gabriel'
		},
		{
			weight: 5.15,
			id: 'Miguel'
		},
		{
			weight: 4.26,
			id: 'Lucas'
		},
		{
			weight: 4.09,
			id: 'Pedro'
		},
		{
			weight: 4.07,
			id: 'Dinis'
		},
		{
			weight: 4.02,
			id: 'Vicente'
		},
		{
			weight: 4.0,
			id: 'Guilherme'
		},
		{
			weight: 3.86,
			id: 'Salvador'
		},
		{
			weight: 3.83,
			id: 'Gonçalo'
		},
		{
			weight: 3.73,
			id: 'Rafael'
		},
		{
			weight: 3.29,
			id: 'Mateus'
		}
	]
];


const moradas = [
	{
		weight: 4,
		id: 'Rua'
	},
	{
		weight: 4,
		id: 'Lugar'
	},
	{
		weight: 2,
		id: 'Avenida'
	}
];

const sobrenomes = [
	{
		weight: 9.57,
		id: 'Silva'
	},
	{
		weight: 6.02,
		id: 'Santos'
	},
	{
		weight: 5.3,
		id: 'Ferreira'
	},
	{
		weight: 4.92,
		id: 'Pereira'
	},
	{
		weight: 3.75,
		id: 'Oliveira'
	},
	{
		weight: 3.71,
		id: 'Costa'
	},
	{
		weight: 3.6,
		id: 'Rodrigues'
	},
	{
		weight: 3.26,
		id: 'Martins'
	},
	{
		weight: 3.02,
		id: 'Jesus'
	},
	{
		weight: 2.98,
		id: 'Sousa'
	},
	{
		weight: 2.84,
		id: 'Fernandes'
	},
	{
		weight: 2.79,
		id: 'Gonçalves'
	},
	{
		weight: 2.6,
		id: 'Gomes'
	},
	{
		weight: 2.54,
		id: 'Lopes'
	},
	{
		weight: 2.54,
		id: 'Marques'
	},
	{
		weight: 2.39,
		id: 'Alves'
	},
	{
		weight: 2.29,
		id: 'Almeida'
	},
	{
		weight: 2.29,
		id: 'Ribeiro'
	},
	{
		weight: 2.11,
		id: 'Pinto'
	},
	{
		weight: 1.99,
		id: 'Carvalho'
	},
	{
		weight: 1.7,
		id: 'Teixeira'
	},
	{
		weight: 1.55,
		id: 'Moreira'
	},
	{
		weight: 1.54,
		id: 'Correia'
	},
	{
		weight: 1.4,
		id: 'Mendes'
	},
	{
		weight: 1.33,
		id: 'Nunes'
	},
	{
		weight: 1.29,
		id: 'Soares'
	},
	{
		weight: 1.22,
		id: 'Vieira'
	},
	{
		weight: 1.12,
		id: 'Monteiro'
	},
	{
		weight: 1.08,
		id: 'Cardoso'
	},
	{
		weight: 1.05,
		id: 'Rocha'
	},
	{
		weight: 1.02,
		id: 'Raposo'
	},
	{
		weight: 0.99,
		id: 'Neves'
	},
	{
		weight: 0.98,
		id: 'Coelho'
	},
	{
		weight: 0.95,
		id: 'Cruz'
	},
	{
		weight: 0.94,
		id: 'Cunha'
	},
	{
		weight: 0.93,
		id: 'Pires'
	},
	{
		weight: 0.87,
		id: 'Ramos'
	},
	{
		weight: 0.86,
		id: 'Reis'
	},
	{
		weight: 0.86,
		id: 'Simões'
	},
	{
		weight: 0.82,
		id: 'Antunes'
	},
	{
		weight: 0.82,
		id: 'Matos'
	},
	{
		weight: 0.82,
		id: 'Fonseca'
	},
	{
		weight: 0.77,
		id: 'Machado'
	},
	{
		weight: 0.7,
		id: 'Araújo'
	},
	{
		weight: 0.69,
		id: 'Barbosa'
	},
	{
		weight: 0.68,
		id: 'Tavares'
	},
	{
		weight: 0.65,
		id: 'Lourenço'
	},
	{
		weight: 0.63,
		id: 'Castro'
	},
	{
		weight: 0.62,
		id: 'Figueiredo'
	},
	{
		weight: 0.61,
		id: 'Azevedo'
	}
];

const emailProviders = [
	"@gmail.com",
	"@hotmail.com",
	"@outlook.com",
	"@yahoo.com",
	"@iol.pt",
	"@portugalmail.pt",
	"@icloud.com",
	"@me.com",
	"@mac.com",
	"@di-uminho.pt",
	"@alunos.uminho.pt"
];

module.exports = {
	marcaCarro,
	preferencia,
	nomes,
	sobrenomes,
	tipoCarro,
	moradas,
	emailProviders
};

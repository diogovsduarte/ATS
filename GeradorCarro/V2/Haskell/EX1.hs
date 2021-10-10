import Test.QuickCheck

data Carro = Carro Tipo Marca Matricula NIF CPKm Autonomia
            deriving Show 

data Cliente = Cliente Nome NIF Email Morada X Y
            deriving Show

data Proprietario = Proprietario Nome NIF Email Morada
            deriving Show

data Aluguer = Aluguer NIF X Y Tipo Preferencia
            deriving Show

data Classificaçao = Classificaçao Matricula Nota
            deriving Show


data Tipo = Combustao
        | Eletrico
        | Hibrido
            deriving Show

data Preferencia = MaisBarato
                | MaisPerto
                    deriving Show

type Marca = String
type Matricula = String
type NIF = String-- NIF Proprietario
type CPKm = Float -- Consumo por Km
type Autonomia = Int
type Email = String
type Nome = String
type Morada = String
type X = Float
type Y = Float
type Nota = Int

nomes = ["Joao","Francisco", "Santiago", "Afonso", "Duarte", "Tomas", "Martim", "Rodrigo", "Lourenco", "Gabriel", "Diogo", "Miguel", "Maria", "Leonor", "Matilde", "Beatriz", "Carolina", "Sofia", "Alice", "Mariana", "Ana", "Benedita", "Joana", "Ines"]
apelidos = ["Silva", "Santos", "Ferreira", "Pereira", "Oliveira", "Costa", "Rodrigues", "Martis", "Jesus", "Sousa", "Fernandes", "Goncalves", "Gomes", "Lopes", "Marques", "Alves", "Almeida", "Ribeiro", "Pinto", "Carvalho", "Teixeira", "Moreira", "Correia", "Mendes"]
marcas = ["Peugeot", "BMW", "Mercedes", "Renault" , "Toyota" ,"Kia", "Citroen" ,"Nissan", "Volvo" ,"Opel" ]


genTipo :: Gen Tipo
genTipo = frequency [(75, return Combustao),(25, return Eletrico),(5, return Hibrido)]

--Marcas populares seguindo o site Standvirtual
genMarca :: Gen Marca
genMarca = elements marcas

genCPKm :: Gen CPKm
genCPKm = choose (0.1, 2)

genAutonomia :: Gen Autonomia
genAutonomia = choose(350, 500)

genMatricula :: Gen Matricula
genMatricula = do letra1 <- choose ('A','Z')
                  letra2 <- choose ('A','Z')
                  numero1 <- choose (0::Int,9)
                  numero2 <- choose (0::Int,9)
                  numero3 <- choose (0::Int,9)
                  numero4 <- choose (0::Int,9)
                  return([letra1] ++ [letra2] ++ "-" ++ show numero1 ++  show numero2 ++ "-" ++ show numero3 ++ show numero4)

genNIF :: Gen NIF
genNIF = do n <-choose(200000000::Int,300000000)
            return (show n)


genNome :: Gen Nome
genNome = do n <- elements nomes 
             a <- elements apelidos 
             return(n ++ " " ++ a)

genPreferencia :: Gen Preferencia
genPreferencia = frequency[(65, return MaisBarato), (35, return MaisPerto)]

genMorada :: Gen Morada
genMorada = do r <- frequency [(70, return "Rua"), (20, return "Avenida"), (10, return "Travessa")]
               n <- elements nomes
               a <- elements apelidos
               nu <- choose (0::Int,99)
               return (r ++ " " ++ n ++ " " ++ a ++ " numero " ++ show nu)

genEmail :: Gen Email
genEmail = do e <- choose (0000000::Int, 9999999)
              o <- elements ["hotmail", "outlook", "gmail"]
              return(show e ++ "@" ++ o ++ ".com")


genX :: Gen X 
genX = choose(-180, 180)

genY :: Gen Y 
genY = choose(-85.05112878 , 85.05112878 )

genNota :: Gen Nota
genNota = choose(0, 100)


genCliente :: Gen Cliente
genCliente  = do n <- genNome
                 ni <- genNIF
                 e <- genEmail
                 m <- genMorada
                 x <- genX
                 y <- genY
                 return(Cliente n ni e m x y)

genProprietario :: Gen Proprietario
genProprietario = do n <-genNome
                     ni <- genNIF
                     e <- genEmail
                     m <- genMorada
                     return(Proprietario n ni e m)

genAluguer :: Gen Aluguer
genAluguer = do n <- genNIF
                x <- genX
                y <- genY
                t <- genTipo
                p <- genPreferencia
                return(Aluguer n x y t p)

genCarro :: [NIF] -> Gen Carro
genCarro l = do t <- genTipo
                m <- genMarca
                ma <- genMatricula
                n <- elements l
                c <- genCPKm
                a <- genAutonomia
                return(Carro t m ma n c a)

genClassificaçao :: Gen Classificaçao
genClassificaçao = do m <- genMatricula
                      n <- genNota
                      return(Classificaçao m n)

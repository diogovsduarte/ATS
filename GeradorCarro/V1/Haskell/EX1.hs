import Test.QuickCheck

data Carro = Carro Tipo Marca Matricula NIF CPKm Autonomia
            deriving Show

data Tipo = Combustao
        | Eletrico
        | Hibrido
            deriving Show

type Marca = String
type Matricula = String
type NIF = String-- NIF Proprietario
type CPKm = Float -- Consumo por Km
type Autonomia = Int

genTipo :: Gen Tipo
genTipo = frequency [(75, return Combustao),(25, return Eletrico),(5, return Hibrido)]

--Marcas populares seguindo o site Standvirtual
genMarca :: Gen Marca
genMarca = elements ["Peugeot", "BMW", "Mercedes", "Renault" , "Toyota" ,"Kia", "Citroen" ,"Nissan", "Volvo" ,"Opel" ]


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

genCarro :: Gen Carro
genCarro = do t <- genTipo
              m <- genMarca
              ma <- genMatricula
              n <- genNIF
              c <- genCPKm
              a <- genAutonomia
              return(Carro t m ma n c a)
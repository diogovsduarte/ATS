import Prelude hiding ((<*>),(<$>))

import Data.Char
import Parser

isDigit' :: Char -> Bool
isDigit' x = x `elem` ['0'..'9']

number  =   f <$> satisfy isDigit
       <|>  g <$> satisfy isDigit <*> number
  where f a = [a]
        g a b = a:b

number' = oneOrMore' (satisfy isDigit)

--Id :: a -> a
		
ident =  oneOrMore (satisfy isAlpha)

data Exp = AddExp Exp Exp
         | MulExp Exp Exp
         | SubExp Exp Exp
         | GThen Exp Exp
         | LThen Exp Exp
         | OneExp Exp
         | Var String
         | Const Int

instance Show Exp where
  show = showExp

showExp (AddExp e1 e2) = showExp e1 ++ "+" ++ showExp e2
showExp (SubExp e1 e2) = showExp e1 ++ "-" ++ showExp e2
showExp (MulExp e1 e2) = showExp e1 ++ "*" ++ showExp e2
showExp (GThen e1 e2) = showExp e1 ++ ">" ++ showExp e2
showExp (OneExp e)    = "(" ++ showExp e ++ ")"
showExp (Const i)      = show i
showExp (Var a)        = a

pexp :: Parser Char Exp
pexp =   f <$> pterm
     <|> g <$> pterm <*> symbol' '+' <*> pexp
     <|> h <$> pterm <*> symbol' '-' <*> pexp
   where f a = a
         g a b c = AddExp a c
         h a b c = SubExp a c

pterm :: Parser Char Exp
pterm =  f <$> pfactor
     <|> g <$> pfactor <*> symbol' '*' <*> pterm
   where f a = a
         g a b c = MulExp a c

pfactor :: Parser Char Exp
pfactor =   f <$> number
       <|>  g <$> ident
       <|>  h <$> symbol' '(' <*> pexp <*> symbol' ')'
  where f a = Const (read a)
        g a = Var a
        h a e f = OneExp e
		
		
data Prog = Prog Stats
data Stats = Stats [Stat]
data Stat = While Exp Stats
           | IfThenElse Exp Stats Stats
           | Assign id Exp
		   
instance Show Prog where
             show = showProg
             showProg (Prog sts) = showStats sts

instance Show Stats where
             show = showStats
             showStats (Stats l) = showStatsList l

showStatsList [] = ""
showStatsList (st:[]) = showStat st
showStatsList (st:sts) = showStat st ++ ";\n " ++ (showStatsList sts)

instance Show Stat where
             show = showStat
             showStat (Assign n e) = n ++ " = " ++ showExp e
             showStat (While e sts) = "while (" ++ showExp e ++ ")\n " ++ "{ " ++ showStats sts ++ "}"
			 
-- data Stat = While Exp Stats
-- | IfThenElse Exp Stats Stats
-- | Assign Id Exp		 

pProg :: Parser Char Prog
pProg = f <$> pProg
		<|> g <$> symbol' "while" symbol' '(' <*> pProg <*> symbol' ")\n" symbol' "{" <*> pProg <*> symbol' '}'
		<|> h <$> symbol' 
		where g a e i o f = While e o
			  h a
			  
		
{- pStat :: Parser Char Prog -} 


%{
    #include <stdio.h>
    #include <stdlib.h>
    int yyerror(const char*);
    int yylex();
%}

// Declarations
%union {
    char* string
}
%type <string> var tipo
%token Use Decl

// Rules
%%

prog: '[' command restoprog 
    ;

restoprog: ']'
         | ',' prog
         ;


command: Use '"' vari '"'
        | Decl '"' vari '"';

vari: VAR { $$ = $1; };

%%

int main() {
    yyparse();
    return 0;
}

int yyerror(char* msg) {

    printf("*** %s\n", msg);

    exit(1);
    
}


/*
[ Use "x"
, Decl "x"
, [ Decl "y"
, Use "x"
, Use "y
]
, Use "x"
]
*/
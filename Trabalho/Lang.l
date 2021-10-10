%{

%}

%%

\[      { printf("["); return '['; }
\]      { printf("]"); return ']'; }
\,      { printf(","); return ',';}
\"		{ printf("\""); return '"';}

Use     { printf("use"); return USE; }
Decl    { printf("decl"); return DECL; }


%%

int yywrap() {return 1;}
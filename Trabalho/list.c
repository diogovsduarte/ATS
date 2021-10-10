#include <stdio.h>
#include <stdlib.h>	
#include <string.h>
#include "list.h"

void Inserir(char *nome, int val){
	char *temp = malloc(256),
         *temp2 = malloc(256);
	int valor=0;

	valor = RetornaVal(nome);
    
	if(valor==0){
		temp=nome;
		strcat(temp,"/");
		sprintf(temp2,"%d",val);
		strcat(temp,temp2);
		strcat(temp,"|\n");
		FILE *fd;
		fd=fopen("variaveis.txt","a+");
		fprintf(fd,temp,strlen(temp));
		fclose(fd);
	}
}

int RetornaVal(char *nome){
	char *temporario = malloc(1024),
         *temporario2 = malloc(1024),
         *variavel = malloc(1024);

	int valor=0;

	FILE *fd;

	fd=fopen("variaveis.txt","r");
	while(fgets(temporario,1024,fd)!=NULL){
		variavel=strtok(temporario,"/");
		temporario2=strtok(NULL,"|");
		if(strcmp(variavel,nome)==0){
			valor=atoi(temporario2);
		}
	}
	fclose(fd);
	return valor;
}

void NewFile(){
    // File descriptor
	FILE *fd;
    // String to write
	char *basic="";
    // Write to Output file with file pointer
	fd = fopen("output.txt","w+");
    // write basic string to file
	fprintf(fd,basic,strlen(basic));
    // Close pointed file
	fclose(fd);
}


void MoveTart(int xx1, int xx2, int yy1, int yy2, int red, int green, int blue){
	FILE *fd;
	fd=fopen("desenho.svg","r+");
	char *basic="\n</svg>\n";
	char *basic2="<line x1=\"%d\" x2=\"%d\" y1=\"%d\" y2=\"%d\" style=\"stroke:rgb(%d,%d,%d); \"/>";
	char *temporario = malloc(1024),
         *conteudo = malloc(1024);

	while(fgets(temporario,1024,fd)!=NULL)
    {
        if(strcmp(temporario,"</svg>\n")!=0){
            strcat(conteudo,temporario);
        }
    }
    
	fclose(fd);

	fd=fopen("desenho.svg","w");
	fprintf(fd,conteudo,strlen(conteudo));
	fprintf(fd,basic2,xx1, xx2, yy1, yy2, red, green, blue,2000);
	fprintf(fd,basic,10);
	fclose(fd);
}

/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/
#include<stdio.h>
#include<string.h>
#include<stdlib.h>  

int main(){
       char string[50],auxiliar[50];
       int a,b;
       printf("Digite a palavra para ser invertida: ");
       scanf("%[^\n]",string);  
       b=strlen(string)-1;    
       for(a=0;string[a]!='\0';a++){        
       auxiliar[b]=string[a];
       b--;     
       }
       auxiliar[a]='\0';     
       strcpy(string,auxiliar);    
       printf("\n\nA palavra inversa e:\n%s\n\n",string);
system("pause");
}
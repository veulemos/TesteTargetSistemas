#include <stdio.h>
#include <stdlib.h>
#include <locale.h>


int fibo(int a);

int main()
{
	int valor;
	printf("\nDigite o número: ");
	scanf("%d", &valor);
  if(valor == fibo(valor)){
    printf("\nO número %i pertence a sequência de fibonacci!\n", valor);
  }else {
    printf("\nO número %i não pertence a sequência de fibonacci!\n", valor);
  }
	system("PAUSE");
	return 0;
}
int fibo(int a){
	int v0 = 0, v1 = 1;
	int resultado = 0;
  int x = 1;
	if(a == 0){
		return resultado = v0;
	}else{
		 resultado = v1;
	}
	while(x==1){
    resultado = v0 + v1;
		v0 = v1;
		v1 = resultado;
    if(a == resultado){
      x = 0;
    }else if(resultado > a){
      x = 0;
    }
  }
	return resultado;
}
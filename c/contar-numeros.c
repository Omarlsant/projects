#include <stdio.h>
#include <ctype.h>

int main() {
    char str[100];
    int count = 0;
    int i = 0;

    printf("Introduce un número: ");
    scanf("%s", str);

    while (str[i] != '\0') {
        if (isdigit(str[i])) {
            count++;
        }
        i++;
    }

    printf("El número ingresado contiene %d digitos.\n", count);
    return 0;
}

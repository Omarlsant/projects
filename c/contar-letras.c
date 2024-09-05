#include <stdio.h>
#include <ctype.h>

int main() {
    char str[100];
    int count = 0;
    int i = 0;

    printf("Introduce una cadena: ");
    scanf("%s", str);

    while (str[i] != '\0') {
        if (isalpha(str[i])) {
            count++;
        }
        i++;
    }

    printf("La cadena contiene %d letras.\n", count);
    return 0;
}

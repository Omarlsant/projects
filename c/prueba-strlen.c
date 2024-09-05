#include <stdio.h>

// Declaración de la función ft_strlen
size_t ft_strlen(const char *s) {
    size_t i = 0;
    while (s[i] != '\0') {
        i++;
    }
    return i;
}

int main() {
    // Cadenas de prueba
    const char *cadena1 = "Hola";
    const char *cadena2 = "Mundo";
    const char *cadena3 = "¡Hola, Mundo!";
    const char *cadena4 = "";

    // Uso de ft_strlen para calcular la longitud de las cadenas
    printf("Longitud de '%s': %zu\n", cadena1, ft_strlen(cadena1));
    printf("Longitud de '%s': %zu\n", cadena2, ft_strlen(cadena2));
    printf("Longitud de '%s': %zu\n", cadena3, ft_strlen(cadena3));
    printf("Longitud de cadena vacía: %zu\n", ft_strlen(cadena4));

    return 0;
}

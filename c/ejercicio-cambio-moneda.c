#include <stdio.h>

int main()
{
    float   precioArticulo;
    float   pagoCliente;
    float   cambio;

    printf("Ingrese el precio del artículo: ");
    scanf("%f", &precioArticulo);
    printf("¿Cuánto ha pagado el cliente?: ");
    scanf("%f", &pagoCliente);

    cambio = precioArticulo - pagoCliente;

    printf("El cambio a dar es: %.0f \n", cambio);
}
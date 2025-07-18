#include <stdio.h>
#include <stdlib.h>

#define N 10000000

int main() {
    float *a, *b, *c;

    // Allocate memory for the arrays
    a = (float*)malloc(sizeof(float) * N);
    b = (float*)malloc(sizeof(float) * N);
    c = (float*)malloc(sizeof(float) * N);

    // Ensure memory was allocated
    if (a == NULL || b == NULL || c == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }

    // Initialize arrays a and b to 1 and N - 1
    for (int i = 0; i < N; i++) {
        a[i] = i * 1.0f;
        b[i] = (N - i) * 1.0f;
    }

    // Utilize openacc pragmas
    #pragma acc data copyin(a[0:N], b[0:N]) copyout(c[0:N])
    {
        #pragma acc parallel loop
        for (int i = 0; i < N; i++) {
            c[i] = a[i] + b[i];
        }
    }

    // Free allocated memory
    free(a);
    free(b);
    free(c);

    return 0;
}

#include <stdio.h>
#include <cuda.h>

#define N 10000000

__global__ void vector_add_single(float *a, float *b, float *c, int n) {
    for (int i = 0; i < n; i++) {
        c[i] = a[i] + b[i];
    }
}

int main() {
    float *a, *b, *c;
    float *d_a, *d_b, *d_c;

    size_t bytes = N * sizeof(float);
    cudaMallocHost(&a, bytes);
    cudaMallocHost(&b, bytes);
    cudaMallocHost(&c, bytes);

    for (int i = 0; i < N; i++) {
        a[i] = i * 1.0f;
        b[i] = (N - i) * 1.0f;
    }

    cudaMalloc(&d_a, bytes);
    cudaMalloc(&d_b, bytes);
    cudaMalloc(&d_c, bytes);

    cudaMemcpy(d_a, a, bytes, cudaMemcpyHostToDevice);
    cudaMemcpy(d_b, b, bytes, cudaMemcpyHostToDevice);

    vector_add_single<<<1, 1>>>(d_a, d_b, d_c, N);

    cudaMemcpy(c, d_c, bytes, cudaMemcpyDeviceToHost);

    cudaFreeHost(a); cudaFreeHost(b); cudaFreeHost(c);
    cudaFree(d_a); cudaFree(d_b); cudaFree(d_c);

    return 0;
}

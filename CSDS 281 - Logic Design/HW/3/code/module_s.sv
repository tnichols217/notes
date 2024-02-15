module module_s (
	input logic A, B,
	output logic Y1, Y2, Y3
);
	and U1 (Y1, A, B);
	or U2 (Y2, A, B);
	xor U3 (Y3, A, B);
endmodule
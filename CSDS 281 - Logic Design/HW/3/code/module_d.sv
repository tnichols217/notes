module module_d (
	input logic A, B,
	output logic Y1, Y2, Y3
);
	assign Y1 = A & B;
	assign Y2 = A | B;
	assign Y3 = A ^ B;
endmodule

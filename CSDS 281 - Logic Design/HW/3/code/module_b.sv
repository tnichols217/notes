module module_b (
	input logic A, B,
	output logic Y1, Y2, Y3
);
	always_comb begin
		Y1 = A & B;
		Y2 = A | B;
		Y3 = A ^ B;
	end
endmodule
import { readFile } from "node:fs/promises";

const data = await readFile("./puzzel-input.txt", "utf8");

const lines = data
	.trim()
	.split("\n")
	.map((line) => line.split("  "));

const b = lines.map(([_, b]) => b).sort((a, b) => (a < b ? -1 : 1));
const result = lines
	.map(([a, _]) => a)
	.sort((a, b) => (a < b ? -1 : 1))
	.reduce((sum, value, i) => sum + Math.abs(+value - +b[i]), 0);

console.log("result", result);

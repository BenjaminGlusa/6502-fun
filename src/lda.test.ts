import { CPU, Cycles, Memory } from "./cpu"

const flashProgram = (memory: Memory, program: number[]) => {
    const startAddress = 0xfffc;

    for(let i = 0; i < program.length; i++) {
        memory.setByte(startAddress + i, program[i]);
    }
}

const runProgram = (cycles: number, program: number[]) => {
    const memory = new Memory();
    const cpu = new CPU();
    cpu.reset(memory);
    flashProgram(memory, program);
    cpu.execute(new Cycles(cycles), memory);

    return {
        cpu,
        memory
    }
}

describe('LDA Immediate mode', () => {
    test('should load second byte into A register', () => {
        fail('not implemented yet')
    })
})
export class Memory {
    public initialize(){}
    public getByte(address: number){}
    public setByte(address: number, value: number){}
}

export class Cycles {
    constructor(private cycles: number){}
    public consume(amount: number = 1){}
    public left(){}
}

export class CPU {
    public reset(memory: Memory){}
    public execute(cycles: Cycles, memory: Memory){}
    public getRegisters(){}
    public getFlags(){}
    private fetchByte(cycles: Cycles, memory: Memory){}

}
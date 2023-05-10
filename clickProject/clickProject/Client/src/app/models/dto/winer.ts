export class Winner{
    id: number;
    name: string;
}

export class Question{
    code: number;
    winers?: Winner[];
}

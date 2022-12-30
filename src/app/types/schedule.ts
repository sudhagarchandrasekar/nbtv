import { Program } from './program';
export interface Schedule {
    day: string;
    dayOfWeek: number;
    program: Program[];
}

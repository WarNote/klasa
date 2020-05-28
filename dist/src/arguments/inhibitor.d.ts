import { Argument, Possible, Inhibitor } from 'klasa';
import type { Message } from '@klasa/core';
export default class CoreArgument extends Argument {
    run(argument: string, possible: Possible, message: Message): Inhibitor;
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exponent'
})
export class ExponentPipe implements PipeTransform {
    // transform(value: any, args?: any): any {}
    transform(value: number, exponent: string, add: number): number {
        const exp = parseFloat(exponent);
        let ret = Math.pow(value, isNaN(exp) ? 1 : exp);
        ret = ret + add;
        return ret;
    }
}

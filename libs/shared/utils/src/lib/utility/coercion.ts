export function toBool(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

export function toNumber(value: string): number {
  return Number(value);
}

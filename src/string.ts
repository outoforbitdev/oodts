export function isNullOrEmpty(val: string | undefined): boolean {
    return val === "" || val === null || val === undefined;
}
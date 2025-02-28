export function error(message: string) {
    console.error(message)
    console.trace()
}

export function assert(condition: boolean, message: string) {
    if (!condition) {
        error(message)
    }
}

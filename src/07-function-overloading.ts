function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: any, b: any): any {
    return a + b
}

add(2, 3)
add("2", "3")


interface KonamiProps {
    code: string[],
    keyPressed: string,
    onFinishTime?: number,
    onSuccess: () => void,
    onFinish: () => void
}

interface KonamiState {
    [key: string]: number
}

const konamiState: KonamiState = {}

export function Konami({ code, keyPressed, onFinishTime, onSuccess, onFinish }: KonamiProps) {
    const codeKey = code.join("-");
    const konamiCodePosition = konamiState[codeKey] || 0;

    const actualKey = keyPressed.toLowerCase();
    const actualCode = code[konamiCodePosition].toLowerCase();

    if (actualKey !== actualCode) {
        if (onFinish) onFinish()
        konamiState[codeKey] = 0
        return
    }

    const nextPosition = konamiCodePosition + 1

    if (nextPosition === code.length) {
        onSuccess()
        konamiState[codeKey] = 0

        if (onFinishTime && onFinish) {
            setTimeout(() => {
                onFinish()
            }, onFinishTime || 1000)
        }
    } else {
        konamiState[codeKey] = nextPosition
    }
}
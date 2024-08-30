import "@logseq/libs"

function evaluateExpression(expression: string): number {
    // Remove all whitespace from the expression
    expression = expression.replace(/\s+/g, '');

    // Function to handle basic operations
    const operate = (a: number, b: number, operator: string): number => {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: throw new Error(`Unknown operator: ${operator}`);
        }
    };

    // Function to evaluate the expression
    const parseExpression = (expr: string): number => {
        const tokens = expr.match(/(\d+|\+|\-|\*|\/|\(|\))/g);
        if (!tokens) throw new Error('Invalid expression');

        const outputQueue: (number | string)[] = [];
        const operatorStack: string[] = [];

        const precedence: Record<string, number> = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };

        tokens.forEach(token => {
            if (!isNaN(Number(token))) {
                outputQueue.push(Number(token));
            } else if ('+-*/'.includes(token)) {
                while (
                    operatorStack.length &&
                    precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
                ) {
                    outputQueue.push(operatorStack.pop()!);
                }
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack[operatorStack.length - 1] !== '(') {
                    outputQueue.push(operatorStack.pop()!);
                }
                operatorStack.pop(); // Remove the '(' from the stack
            }
        });

        while (operatorStack.length) {
            outputQueue.push(operatorStack.pop()!);
        }

        const resultStack: number[] = [];
        outputQueue.forEach(token => {
            if (typeof token === 'number') {
                resultStack.push(token);
            } else {
                const b = resultStack.pop()!;
                const a = resultStack.pop()!;
                resultStack.push(operate(a, b, token as string));
            }
        });

        return resultStack[0];
    };

    return parseExpression(expression);
}

function evaluateDiceRoll(content: string): string {
    // parse content for dice roll
    const roll = content.match(/(\d*)d(\d+)([+-]\d+)?/)

    // if no dice roll found, throw an error
    if (!roll) {
        throw new Error('No dice roll found')
    }

    // extract dice roll parameters
    const [, num, dice, modifier] = roll

    // convert num to integer
    const numInt = num ? parseInt(num) : 1

    // roll dice and track all results
    const rolls = []
    for (let i = 0; i < numInt; i++) {
        rolls.push(Math.floor(Math.random() * parseInt(dice)) + 1)
    }

    // calculate total
    let total = rolls.reduce((a, b) => a + b, 0)

    // apply modifier
    if (modifier) {
        total += parseInt(modifier)
    }

    // construct result string
    let result = `${total}`
    if (numInt > 1) {
        result += ` (${rolls.join(', ')})`
    }

    return result
}

// main function
function main () {
    // add slash command for dynamic command parsing (e.g. /roll 2d6+10)
    logseq.Editor.registerSlashCommand(
        'roll',
        async () => {
            // get content of current block
            const content = await logseq.Editor.getEditingBlockContent()
    
            // if no dice roll found, return
            if (!content) {
                logseq.App.showMsg('No dice roll found :(')
                return
            }
    
            // evaluate dice roll
            let result
            try {
                result = evaluateDiceRoll(content)
            } catch (e) {
                logseq.App.showMsg(`Error: ${e.message}`)
                return
            }
    
            // insert result into block
            logseq.Editor.insertAtEditingCursor(`: ${result}`)
        }
    )

    logseq.Editor.registerSlashCommand(
        'calc',
        async () => {
            // get content of current block
            const content = await logseq.Editor.getEditingBlockContent()

            // if no expression found, return
            if (!content) {
                logseq.App.showMsg('No expression found :(')
                return
            }

            // evaluate expression
            let result
            try {
                result = evaluateExpression(content)
            } catch (e) {
                logseq.App.showMsg(`Error: ${e.message}`)
                return
            }

            // insert result into block
            logseq.Editor.insertAtEditingCursor(`: ${result}`)
        }
    )

    logseq.App.showMsg('indiLib loaded :)')
}

logseq.ready(main).catch(console.error)
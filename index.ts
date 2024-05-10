import "@logseq/libs"

// main function
function main () {
    // add slash command for dynamic command parsing (e.g. /roll 2d6+10)
    logseq.Editor.registerSlashCommand(
        'roll',
        async () => {
            // get content of current block
            const content = await logseq.Editor.getEditingBlockContent()

            // parse content for dice roll
            const roll = content.match(/(\d*)d(\d+)([+-]\d+)?/)

            // if no dice roll found, return
            if (!roll) {
                logseq.App.showMsg('No dice roll found :(')
                return
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

            // insert result into block
            let result = `: ${total}`
            if (numInt > 1) {
                result += ` (${rolls.join(', ')})`
            }

            // insert result into block
            logseq.Editor.insertAtEditingCursor(result)
        }
    )

    logseq.App.showMsg('Dice Roller loaded :)')
}

logseq.ready(main).catch(console.error)
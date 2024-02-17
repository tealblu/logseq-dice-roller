import "@logseq/libs"

// main function
function main () {
    logseq.App.showMsg('Dice Roller loaded :)')

    // Add slash command
    logseq.Editor.registerSlashCommand(
        'roll d100',
        async () => {
            const roll = Math.floor(Math.random() * 100) + 1
            await logseq.Editor.insertAtEditingCursor(`${roll}`)
        }
    )
}

logseq.ready(main).catch(console.error)
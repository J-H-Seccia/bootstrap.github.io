const words = ['Easier', 'Faster', 'Responsive', 'Attractive']
// Main timeline
let mainTimeline = gsap.timeline({
    repeat: -1
})

//For each word, create a new timeline, use the Text plugin, then append that timeline to the main one
words.forEach(word => {
    let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 3
    })

    textTimeline.to('#typewriter', {
        text: word,
        duration: 1,
        onUpdate: () => {
            cursorTimeline.restart()
            cursorTimeline.pause()
        },
        onComplete: () => {
            cursorTimeline.play()
        }
    })

    mainTimeline.add(textTimeline)
})

//Cursor blinking effect
let cursorTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: .8
})

cursorTimeline.to('#cursor', {
    opacity: 1,
    duration: 0
}).to('#cursor', {
    opacity: 0,
    duration: 0,
    delay: .8
})
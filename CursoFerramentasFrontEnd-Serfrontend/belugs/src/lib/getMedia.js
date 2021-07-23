export default function getMedia() {
    let args = Array.from(arguments)
    let media =
        args.reduce((current, sum) => {
            return current + sum
        }) / args.length

    return media.toFixed(2)
}

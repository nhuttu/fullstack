/* eslint-disable no-unused-vars */
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs[0].likes
}

const favoriteBlog = (blogs) => {
    const likeNumbers = blogs.map(b => b.likes)
    console.log(typeof(likeNumbers))
    console.log(blogs.reduce)
    const findMax = (acc, val) => {
        if (val > acc) {
            acc = val
        }
        return acc
    }
    const maxNumber = blogs.map(b => b.likes).reduce(findMax)
    console.log(likeNumbers)
    console.log(maxNumber)
    const found = blogs.find(b => b.likes === maxNumber)
    console.log(found)

    return found
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
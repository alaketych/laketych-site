import fetch from 'isomorphic-unfetch'

export function getPosts() {
    return fetch('http://localhost:3000/api/posts')
}

export function getPost(slug) {
    return fetch(`http://localhost:3000/api/posts/${slug}`)
}
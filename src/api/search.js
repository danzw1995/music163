import axios from 'axios'

export const getMindSearchData = (keyword) => {
  let url = `https://www.easy-mock.com/mock/5af3a211656ea22f99b56034/clous-music/search?key=${keyword}`
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}
export const getSearchData = (keyword) => {
  let url = `https://www.easy-mock.com/mock/5af3a211656ea22f99b56034/clous-music/get?keyword=${keyword}`
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}
export const getHotSearch = () => {
  let url = 'https://www.easy-mock.com/mock/5af3a211656ea22f99b56034/clous-music/hotsearch'
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    }) 
  })
}
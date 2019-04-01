import axios from 'axios'

export const getHotMusic = () => {
  let url = 'https://www.easy-mock.com/mock/5af3a211656ea22f99b56034/clous-music/getHot'
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}
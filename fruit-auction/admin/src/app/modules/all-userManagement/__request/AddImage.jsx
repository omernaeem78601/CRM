import axios from "axios"

export const uploadFile = async (type, timestamp, signature, img, video) => {
    const folder = type === 'image' ? 'images' : 'videos'
    const data = new FormData()
    data.append('file', type === 'image' ? img : video)
    data.append('timestamp', timestamp)
    data.append('signature', signature)
    data.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY)
    data.append('folder', folder)

    try {
      let cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
      let resourceType = type === 'image' ? 'image' : 'video'
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`

      const res = await axios.post(api, data)
      const {secure_url} = res.data
      return secure_url
    } catch (error) {
      console.error(error)
    }
  }


  export const getSignatureForUpload = async (folder) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/fruit/user/sign-upload`, {folder})
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
import crypto from 'crypto'

import DataDTO from '@utils/data.dto'
import DecryptDTO from '@utils/decrypt.dto'

const Decrypt = (data: DataDTO[]): DecryptDTO[] => {
  const arr = []
  data.forEach((item) => {
    const iv = Buffer.from(item.buffer, 'hex')
    const encrypted = Buffer.from(item.pass, 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', item.key, iv)
    let decrypted = decipher.update(encrypted)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return arr.push(decrypted.toString())
  })
  data.forEach((item, index) => {
    item.pass = arr[index]
    delete item.buffer
    delete item.key
    delete item.userId
  })
  return data
}

export default Decrypt

import crypto from 'crypto'

import EncryptDTO from '@utils/encrypt.dto'

const Encrypt = (pass: string): EncryptDTO => {
  const iv = crypto.randomBytes(16)
  const key = crypto.randomBytes(32).toString('hex').substring(0, 32)
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
  let encrypted = cipher.update(pass, 'utf-8', 'hex')
  encrypted += cipher.final('hex')
  return { pass: encrypted, buffer: iv.toString('hex'), key }
}

export default Encrypt

import keccak from "keccak256"

export const calculateHash = (content: Buffer) => {
  const hash = keccak(content.toString('base64')).toString('hex');
  return `0x${hash}`
}
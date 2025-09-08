/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react'

export default function PortableTextBlock({ value }: { value: any }) {
  if (!value) return null
  return <PortableText value={value} />
}

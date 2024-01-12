import React from 'react'

export default function Alert({children, className}:{children: React.ReactNode, className: string}) {
  return (
    <div className={`font-bold py-2 px-4 rounded text-white ${className}`}>{children}</div>
  )
}

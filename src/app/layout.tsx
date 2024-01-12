import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tic Tac Toe - Mohamed Abdelrahman',
  description: 'A game of tic-tac-toe is a simple game in which two players take turns placing X and O symbols on an empty 3x3 board. The object is to make a series of three consecutive symbols in any direction (horizontally, vertically or diagonally) before the board is filled.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

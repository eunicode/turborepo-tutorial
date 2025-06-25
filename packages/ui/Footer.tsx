import React from 'react'
// update the footer component so it doesn't use tailwindcss
// and uses plain CSS instead

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} My Company</p>
      <p>
        Follow us on{' '}
        <a
          href="https://twitter.com"
          className="text-blue-400 hover:underline"
        >
          Twitter
        </a>
      </p>
    </footer>
  )
}

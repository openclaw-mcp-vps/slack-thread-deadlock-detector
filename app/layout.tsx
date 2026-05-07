import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Thread Deadlock Detector — Find Blocked Decisions',
  description: 'Scans Slack channels for threads where decisions are stuck waiting on specific people. Get daily digests of blocked items before they derail your projects.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6442b0d0-c382-4e52-9e7d-b3e51d40aaed"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

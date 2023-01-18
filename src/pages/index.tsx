import { invoke } from "@tauri-apps/api/tauri"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

import { CardUploadImage } from "@/components/CardUploadImage"
import { useGlobalShortcut } from "@/hooks/tauri/shortcuts"
import { CardConfigCos } from "@/pages/cos"

const Home: NextPage = () => {
  const [buttonDesc, setButtonDesc] = useState<string>(
    "Waiting to be clicked. This calls 'on_button_clicked' from Rust.",
  )
  const onButtonClick = () => {
    invoke<string>("on_button_clicked")
      .then((value) => {
        setButtonDesc(value)
      })
      .catch(() => setButtonDesc("Failed to invoke Rust command 'on_button_clicked'"))
  }

  useGlobalShortcut("CommandOrControl+P", () => {
    console.log("Ctrl+P was pressed!")
  })

  return (
    <div className="bg-grey-500">
      <Head>
        <title>PICS - RNW</title>
        <meta name="description" content="pics by rust and next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="flex justify-center text-6xl text-gray-700 font-bold mt-3 mb-3">
          图片上传
        </h1>

        <div>
          <CardUploadImage />
          <CardConfigCos />
        </div>
      </main>

      <footer className="flex flex-1 flex-grow-0 items-center justify-center border-t border-gray-200 py-4">
        <div>
          <a
            href="https://tauri.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-grow items-center justify-center p-4"
          >
            Powered by{" "}
            <span className="ml-2 h-6">
              <Image
                src="/tauri_logo_light.svg"
                alt="Vercel Logo"
                height={24}
                width={78}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home

'use client'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Cesium = dynamic(
  () => import('./Cesium')
)

export default function CesiumViewer() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      </Head>
      <Cesium />
    </>
  )
}
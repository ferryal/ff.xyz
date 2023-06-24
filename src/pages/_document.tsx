import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html className="">
			<Head>
				<title>Ferryal Fajar - Software Engineer Frontend @Dagangan</title>
				<link rel="icon" type="image/png" href="https://anahoward.me/images/eyesemoji.png" />
				<link></link>
				<meta name="title" content="Ferryal Fajar - Software Engineer Frontend @Dagangan" />
				{/* facebook  / open graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.ferryalfajar.xyz"></meta>
				<meta property="og:title" content="Ferryal Fajar - Software Engineer Frontend @Dagangan" />
				<meta property="og:description" content="" />
				<meta property="og:image" content="https://anahoward.me/images/preview.png"></meta>

				{/* twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.ferryalfajar.xyz" />
				<meta property="twitter:title" content="Ferryal Fajar - Software Engineer Frontend @Dagangan" />
				<meta property="twitter:description" content="" />
				<meta property="twitter:image" content="https://anahoward.me/images/preview.png"></meta>

				{/* <!-- Google tag (gtag.js) --> */}
				<Script
       				 src="https://www.googletagmanager.com/gtag/js?id=G-HERRG7L4LP"
        				strategy="afterInteractive"
      			/>
      			<Script id="google-analytics" strategy="afterInteractive">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){window.dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-HERRG7L4LP');
				`}
			</Script>
			</Head>
			{/* <body className="bg-[#f7f2f2] dark:bg-gray-800"> */}
			<body className="bg-[#f7f2f2] dark:bg-[#121516]">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

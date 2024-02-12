// import '../styles/globals.css';
"use client"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="tooltip-portal"></div>
    </>
  );
}

export default MyApp;

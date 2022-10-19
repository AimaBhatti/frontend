import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }
    render() {
        return (
            <Html>
                <Head>
                    {/* <link rel="stylesheet" href="css/bootstrap.css" /> */}
                    {/* <!-- Bootstrap-Core-CSS --> */}
                    {/* <link rel="stylesheet" href="css/style.css" type="text/css" media="all" /> */}
                    {/* <!-- font-awesome-icons --> */}
                    {/* <link href="css/font-awesome.css" rel="stylesheet" /> */}
                    {/* <!-- /Fonts --> */}
                    <link href="//fonts.googleapis.com/css?family=Hind:300,400,500,600,700" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* <script>
                        function hideURLbar() {
                            window.scrollTo(0, 1)
                        }

                        addEventListener("load", function() {
                            setTimeout(hideURLbar, 0)
                        }, false);
                    </script> */}
                </body>
            </Html>
        )
    }
}

export default MyDocument
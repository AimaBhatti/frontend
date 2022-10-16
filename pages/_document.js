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
                    {/* <script>
                        addEventListener("load", function() {
                            setTimeout(hideURLbar, 0)
                        }, false);

                        function hideURLbar() {
                            window.scrollTo(0, 1)
                        }
                    </script> */}
                    <link rel="stylesheet" href="css/bootstrap.css" />
                    <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
                    <link href="css/font-awesome.css" rel="stylesheet" />
                    <link href="//fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700" rel="stylesheet" />
                    <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument